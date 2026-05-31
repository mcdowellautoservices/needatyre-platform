import { NextResponse } from "next/server";
import { searchSupplierTyres } from "@/lib/suppliers";

export async function POST(request: Request) {
  const body = await request.json();
  const tyres = await searchSupplierTyres(body);
  return NextResponse.json({ ok: true, stock: tyres.map((tyre) => ({ id: tyre.id, supplier: tyre.supplier, stock: tyre.stock, eta: tyre.eta })) });
}
