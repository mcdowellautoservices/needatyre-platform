import { NextResponse } from "next/server";
import { searchSupplierTyres } from "@/lib/suppliers";

export async function POST(request: Request) {
  const body = await request.json();
  const tyres = await searchSupplierTyres(body);
  return NextResponse.json({ ok: true, prices: tyres.map((tyre) => ({ id: tyre.id, brand: tyre.brand, model: tyre.model, priceEach: tyre.priceEach, fittingIncluded: tyre.fittingIncluded })) });
}
