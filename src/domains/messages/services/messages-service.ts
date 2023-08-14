import DatabaseService from '@/common/services/database-service';
import { Message } from '@prisma/client';
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
    })
  );

  return messages;
}

export type CreateMessageRequest = {
  content: string;
  userId: string;
  fromLinkedIn: boolean;
};

async function create(payload: CreateMessageRequest) {
  const { content, userId, fromLinkedIn } = payload;

  const userExists = await DatabaseService.instance<number>((prisma) =>
    prisma.user.count({ where: { id: userId } })
  );

  if (!userExists) {
    throw { error: 'User not found', status: StatusCodes.NotAcceptable };
  }

  const message = await DatabaseService.instance<Message>((prisma) =>
    prisma.message.create({
      data: {
        content,
        userId,
        fromLinkedIn,
      },
    })
  );

  return message;
}

const MessagesService = {
  fetchAll,
  create,
};

export default MessagesService;
