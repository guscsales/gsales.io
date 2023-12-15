import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname == '/curso-ingles') {
    return NextResponse.redirect('https://go.hotmart.com/T76982113W');
  }

  return NextResponse.next();
}
