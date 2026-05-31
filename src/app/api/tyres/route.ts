import { NextResponse } from "next/server";
import { mockTyres } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ tyres: mockTyres });
}
