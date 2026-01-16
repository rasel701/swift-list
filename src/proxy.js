import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export function proxy(request) {
  const isLogin = request.cookies.get("token").value;
  console.log(isLogin);

  if (!isLogin) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/add-item/:path*",
};
