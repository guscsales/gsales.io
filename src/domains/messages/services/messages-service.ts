import DatabaseService from '@/common/services/database-service';
import { Message } from '@prisma/client';
import UserService from '@/domains/users/services/user-service';
import { StatusCodes } from '@/common/enums/status-codes';

async function fetchAll() {
  const messages = await DatabaseService.instance((prisma) =>
    prisma.message.findMany({
      include: {
        User: {
          select: {
            name: true,
            visitorNumber: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  );

  return messages || [];
}

async function getById(id: string) {
  const message = await DatabaseService.instance((prisma) =>
    prisma.message.findUnique({ where: { id } })
  );

  if (!message) {
    console.log(`Message Service: Message ${id} not found`);

    throw { error: 'Message not found', status: StatusCodes.NotFound };
  }

  return message;
}

export type CreateMessageRequest = {
  content: string;
  userId: string;
  fromLinkedIn: boolean;
  name?: string;
  createdAt?: Date;
  email?: string;
};

async function create(payload: CreateMessageRequest) {
  const { content, userId, fromLinkedIn, name, createdAt, email } = payload;

  let finalUserId = userId;
  if (!userId) {
    console.log('Message Service: Creating user');
    const newUser = await UserService.createUser({
      name,
      email,
      visitorNumber: 0,
    });
    finalUserId = newUser.id;
  }

  const user = await UserService.getUserById(finalUserId);

  if (!user) {
    console.log(`Message Service: User ${userId} not found`);

    throw { error: 'User not found', status: StatusCodes.NotAcceptable };
  }

  if (!user?.name && name && email) {
    console.log('Message Service: Updating user');
    await UserService.updateUser({ userId, name, email });
  }

  console.log('Message Service: Creating message');

  const message = await DatabaseService.instance<Message>((prisma) =>
    prisma.message.create({
      data: {
        content,
        userId: finalUserId,
        fromLinkedIn,
        createdAt,
      },
    })
  );

  console.log('Message Service: Message created');

  return message;
}

const MessagesService = {
  fetchAll,
  create,
  getById,
};

export default MessagesService;
