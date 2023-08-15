import { NextResponse } from 'next/server';
import MessagesService, {
  CreateMessageRequest,
} from '@/domains/messages/services/messages-service';
import { z } from 'zod';
import { ValidatorErrors } from '@/common/enums/validator-errors';
import { StatusCodes } from '@/common/enums/status-codes';
import { ErrorResponse } from '@/common/services/api';

export async function POST(req: Request) {
  const messagePostValidator = z
    .object({
      name: z.string(),
      email: z.string().email().optional().nullable(),
      createdAt: z.coerce.date(),
      content: z.string({ required_error: ValidatorErrors.RequiredField }),
      fromLinkedIn: z.boolean({
        required_error: ValidatorErrors.RequiredField,
      }),
    })
    .array();

  try {
    const payload = await req.json();
    messagePostValidator.parse(payload);

    const messages = await Promise.all(
      payload.map((message: CreateMessageRequest) =>
        MessagesService.create({ ...message, userId: '' })
      )
    );

    return NextResponse.json(messages);
  } catch (e) {
    return NextResponse.json(e, {
      status: (e as ErrorResponse).status || StatusCodes.BadRequest,
    });
  }
}
