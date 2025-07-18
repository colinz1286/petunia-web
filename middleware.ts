import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect '/' to '/en'
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    return NextResponse.redirect(url);
  }

  const pathnameLocale = pathname.split('/')[1] || 'en';

  const response = NextResponse.next();
  response.headers.set('x-next-intl-locale', pathnameLocale);

  return response;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
