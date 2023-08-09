import { cookies } from 'next/headers';
import DatabaseService from '@/common/services/database-service';
import { User } from '@prisma/client';

async function getUserById(id: string) {
  const user = await DatabaseService.instance<User | null>((prisma) =>
    prisma.user.findFirst({ where: { id } })
  );

  return user;
}

async function createUser() {
  const newUser = await DatabaseService.instance<User>((prisma) =>
    prisma.user.create({ data: {} })
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
};

export default UserService;
