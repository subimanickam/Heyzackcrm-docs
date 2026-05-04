import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

function isAssetPath(pathname: string): boolean {
  return /\.[^/]+$/.test(pathname)
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // Keep existing app routes, API routes, and static assets untouched.
  if (
    pathname === '/' ||
    pathname.startsWith('/docs') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    isAssetPath(pathname)
  ) {
    return NextResponse.next()
  }

  const redirectUrl = request.nextUrl.clone()
  redirectUrl.pathname = `/docs${pathname}`
  redirectUrl.search = search

  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
