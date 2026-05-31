import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: true, bookingId: "NAT-1001", status: "pending_payment" });
}
