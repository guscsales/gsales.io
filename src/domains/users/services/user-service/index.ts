import { cookies } from 'next/headers';
import DatabaseService from '@/common/services/database-service';
import { User } from '@prisma/client';

async function getUserById(id: string) {
  const user = await DatabaseService.instance<User | null>((prisma) =>
    prisma.user.findFirst({ where: { id } })
  );

  return user;
}

type CreateUser = {
  name?: string;
  email?: string;
  visitorNumber?: number;
};

async function createUser({ name, email, visitorNumber }: CreateUser = {}) {
  const newUser = await DatabaseService.instance<User>((prisma) =>
    prisma.user.create({ data: { name, email, visitorNumber } })
  );

  return newUser;
}

type UpdateUser = {
  userId: string;
  name: string;
  email: string;
};

async function updateUser({ userId, name, email }: UpdateUser) {
  const newUser = await DatabaseService.instance<User>((prisma) =>
    prisma.user.update({ where: { id: userId }, data: { name, email } })
  );

  return newUser;
}

async function getUserFromSession() {
  const userId = cookies().get('gs_session')?.value;
  let user = null;

  if (userId) {
    user = await getUserById(userId);
  }

  return user;
}

const UserService = {
  getUserFromSession,
  getUserById,
  createUser,
  updateUser,
};

export default UserService;
