import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/", request.url), { status: 303 });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", { maxAge: 0, path: "/" });
  return response;
}
