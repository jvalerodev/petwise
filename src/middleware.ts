import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import getUrl from '@/helpers/auth/redirect-url';

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get('api-token')?.value;

  if (!token) {
    return NextResponse.redirect(getUrl(req));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
  } catch (error) {
    return NextResponse.redirect(getUrl(req));
  }

  NextResponse.next();
};

export const config = {
  matcher: ['/', '/owners', '/pets', '/appointments', '/reports', '/settings']
};
