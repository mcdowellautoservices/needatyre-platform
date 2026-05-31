import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ registration: "AB12 CDE", make: "Ford", model: "Focus", year: 2019, tyreSize: "205/55 R16" });
}
