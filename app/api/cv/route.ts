import { NextResponse } from "next/server"

// The CV is served as a static file. Redirect /api/cv to it for any old links.
export function GET(request: Request) {
  return NextResponse.redirect(new URL("/Yahya_Demeriah_CV.docx", request.url))
}
