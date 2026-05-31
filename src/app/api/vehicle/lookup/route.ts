import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const registration = String(body.registration || "AB12 CDE").toUpperCase();

  if (!process.env.VEHICLE_LOOKUP_BASE_URL || !process.env.VEHICLE_LOOKUP_API_KEY) {
    return NextResponse.json({
      ok: true,
      vehicle: {
        registration,
        make: "Demo Vehicle",
        model: "NeedATyre Lookup",
        tyreSize: "205/55 R16",
        fuel: "Petrol"
      }
    });
  }

  const response = await fetch(`${process.env.VEHICLE_LOOKUP_BASE_URL}/lookup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VEHICLE_LOOKUP_API_KEY}`
    },
    body: JSON.stringify({ registration }),
    cache: "no-store"
  });

  const data = await response.json();
  return NextResponse.json({ ok: response.ok, vehicle: data });
}
