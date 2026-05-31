import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ tyres: [
    { brand: "Michelin", model: "Primacy 4+", price: 124.99, type: "Premium" },
    { brand: "Goodyear", model: "EfficientGrip Performance 2", price: 112.99, type: "Premium" },
    { brand: "Hankook", model: "Ventus Prime 4", price: 89.99, type: "Mid-range" },
    { brand: "Landsail", model: "LS388", price: 59.99, type: "Budget" }
  ] });
}
