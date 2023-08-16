import { StatusCodes } from '@/common/enums/status-codes';
import UserService from '@/domains/users/services/user-service';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await UserService.getUserById(params.id);

    if (!user) {
      return new Response('', {
        status: StatusCodes.NotFound,
      });
    }

    return NextResponse.json(user);
  } catch (e: any) {
    return NextResponse.json(e, { status: StatusCodes.BadRequest });
  }
}
