import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ registration: "AB12 CDE", make: "BMW", model: "3 Series", tyreSizes: ["225/45R17", "255/40R18"] });
}
