import { NextResponse } from 'next/server';
import MessagesService from '@/domains/messages/services/messages-service';
import { z } from 'zod';
import { ValidatorErrors } from '@/common/enums/validator-errors';
import { StatusCodes } from '@/common/enums/status-codes';
import { ErrorResponse } from '@/common/services/api';

export async function GET() {
  const messages = await MessagesService.fetchAll();

  return NextResponse.json({ items: messages });
}

export async function POST(req: Request) {
  const messagePostValidator = z.object({
    content: z.string({ required_error: ValidatorErrors.RequiredField }),
    userId: z.string({ required_error: ValidatorErrors.RequiredField }),
    fromLinkedIn: z.boolean({ required_error: ValidatorErrors.RequiredField }),
  });

  try {
    const payload = await req.json();
    const userId = req.headers.get('x-user-id');
    messagePostValidator.parse({ ...payload, userId });

    const message = await MessagesService.create({ ...payload, userId });

    return NextResponse.json(message);
  } catch (e) {
    return NextResponse.json(e, {
      status: (e as ErrorResponse).status || StatusCodes.BadRequest,
    });
  }
}
