import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("TOKEN");
  const homeURL = new URL("/", request.url);

  if (request.nextUrl.pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/dashboard" && !token) {
    return NextResponse.redirect(homeURL);
  }
}

export const config = {
  matcher: ["/:path*", "/auth/:path*"],
};
