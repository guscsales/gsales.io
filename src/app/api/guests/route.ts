import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import DatabaseService from '@/common/services/database-service';
import { User } from '@prisma/client';
import { StatusCodes } from '@/common/enums/status-codes';

export async function GET() {
  const userId = cookies().get('userId')?.value;
  let user = null;

  if (userId) {
    user = await DatabaseService.instance<User | null>((prisma) =>
      prisma.user.findFirst({ where: { id: userId } })
    );
  }

  if (!userId || !user) {
    return new Response('', {
      status: StatusCodes.NotFound,
    });
  }

  return NextResponse.json(user);
}

export async function POST() {
  const newUser = await DatabaseService.instance<User>((prisma) =>
    prisma.user.create({ data: {} })
  );

  cookies().set({
    name: 'userId',
    value: newUser.id,
    path: '/',
    expires: 2147483647,
  });

  return NextResponse.json(newUser);
}
