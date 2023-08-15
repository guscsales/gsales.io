import MessagesService from '@/domains/messages/services/messages-service';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const message = await MessagesService.getById(params.id);

  return NextResponse.json(message);
}
