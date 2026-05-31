import { mockTyres } from "./mockTyres";
import type { NormalisedTyre, TyreSearchRequest } from "./types";

type SupplierConfig = { name: string; baseUrl?: string; apiKey?: string };

export function getSuppliers(): SupplierConfig[] {
  return [
    { name: process.env.SUPPLIER_1_NAME || "Supplier 1", baseUrl: process.env.SUPPLIER_1_BASE_URL, apiKey: process.env.SUPPLIER_1_API_KEY },
    { name: process.env.SUPPLIER_2_NAME || "Supplier 2", baseUrl: process.env.SUPPLIER_2_BASE_URL, apiKey: process.env.SUPPLIER_2_API_KEY }
  ].filter((supplier) => Boolean(supplier.baseUrl && supplier.apiKey));
}

function normaliseSupplierTyres(raw: any, supplierName: string): NormalisedTyre[] {
  const rows = Array.isArray(raw) ? raw : Array.isArray(raw?.tyres) ? raw.tyres : Array.isArray(raw?.results) ? raw.results : [];

  return rows.map((item: any, index: number) => ({
    id: String(item.id || item.sku || `${supplierName}-${index}`),
    supplier: supplierName,
    brand: String(item.brand || item.make || "Unknown"),
    model: String(item.model || item.pattern || item.name || "Tyre"),
    size: String(item.size || `${item.width || "205"}/${item.profile || "55"} R${item.rim || "16"}`),
    loadSpeed: String(item.loadSpeed || item.speedRating || item.rating || "91V"),
    category: item.category || item.tier || "Mid-range",
    fuel: String(item.fuel || item.fuelRating || "C"),
    wetGrip: String(item.wetGrip || item.wet || "B"),
    noiseDb: Number(item.noiseDb || item.noise || 71),
    stock: Number(item.stock || item.quantity || item.available || 0),
    priceEach: Number(item.priceEach || item.price || item.fittedPrice || 0),
    fittingIncluded: Boolean(item.fittingIncluded ?? true),
    eta: String(item.eta || item.delivery || "Available")
  }));
}

export async function searchSupplierTyres(params: TyreSearchRequest): Promise<NormalisedTyre[]> {
  const suppliers = getSuppliers();

  if (suppliers.length === 0) {
    return mockTyres;
  }

  const results = await Promise.allSettled(
    suppliers.map(async (supplier) => {
      const url = `${supplier.baseUrl}/tyres/search`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supplier.apiKey}`,
          "x-api-key": supplier.apiKey || ""
        },
        body: JSON.stringify(params),
        cache: "no-store"
      });

      if (!response.ok) throw new Error(`${supplier.name} failed with ${response.status}`);
      const json = await response.json();
      return normaliseSupplierTyres(json, supplier.name);
    })
  );

  const tyres = results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
  return tyres.length ? tyres.sort((a, b) => a.priceEach - b.priceEach) : mockTyres;
}
