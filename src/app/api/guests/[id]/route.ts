import { StatusCodes } from '@/common/enums/status-codes';
import { ValidatorErrors } from '@/common/enums/validator-errors';
import DatabaseService from '@/common/services/database-service';
import { User } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';

type UserUpdateRequest = {
  name: string;
};

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const userPatchValidator = z.object({
    name: z.string({ required_error: ValidatorErrors.RequiredField }),
  });

  try {
    const payload = await req.json();
    userPatchValidator.parse(payload);

    const userExists = await DatabaseService.instance<number>((prisma) =>
      prisma.user.count({ where: { id: params.id } })
    );

    if (!userExists) {
      return new Response('', {
        status: StatusCodes.NotAcceptable,
      });
    }

    const { name } = payload as UserUpdateRequest;

    const user = await DatabaseService.instance<User>((prisma) =>
      prisma.user.update({
        where: { id: params.id },
        data: { name: name.trim() },
      })
    );

    return NextResponse.json(user);
  } catch (e: any) {
    return NextResponse.json(e, { status: StatusCodes.BadRequest });
  }
}
