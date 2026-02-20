import { NextResponse } from "next/server"

export function middleware() {
  return new NextResponse("Site is currently under maintenance.", {
    status: 503,
    headers: { "Content-Type": "text/plain" },
  })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
