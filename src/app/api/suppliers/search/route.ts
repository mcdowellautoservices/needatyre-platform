import { NextResponse } from "next/server";
import { searchSupplierTyres } from "@/lib/suppliers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const tyres = await searchSupplierTyres(body);
    return NextResponse.json({ ok: true, tyres, count: tyres.length });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || "Supplier search failed" }, { status: 500 });
  }
}

export async function GET() {
  const tyres = await searchSupplierTyres({});
  return NextResponse.json({ ok: true, tyres, count: tyres.length });
}
