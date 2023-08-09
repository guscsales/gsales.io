import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import DatabaseService from '@/common/services/database-service';
import { User } from '@prisma/client';
import { StatusCodes } from '@/common/enums/status-codes';
import UserService from '@/domains/users/services/user-service';

export async function GET() {
  const userId = cookies().get('gs_session')?.value;
  let user = null;

  if (userId) {
    user = await UserService.getUserById(userId);
  }

  if (!userId || !user) {
    return new Response('', {
      status: StatusCodes.NotFound,
    });
  }

  return NextResponse.json(user);
}

export async function POST() {
  const newUser = await UserService.createUser();

  const oneYear = 3600 * 1000 * 24 * 365 * 1;
  cookies().set({
    name: 'gs_session',
    value: newUser.id,
    path: '/',
    expires: Date.now() + oneYear,
  });

  return NextResponse.json(newUser);
}
