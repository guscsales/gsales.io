'use server';

import MessagesService from '@/domains/messages/services/messages-service';
import { cookies } from 'next/headers';

type PostMessageOnWallPayload = {
  name?: string | null;
  email?: string | null;
  content: string;
};

export async function postMessageOnWall({
  content,
  name,
  email,
}: PostMessageOnWallPayload) {
  const userId = cookies().get('gs_session')!.value;

  const message = await MessagesService.create({
    content,
    fromLinkedIn: false,
    userId,
    name: name as string,
    email: email as string,
  });

  return message;
}
