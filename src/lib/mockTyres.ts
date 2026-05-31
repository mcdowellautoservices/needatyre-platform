import type { NormalisedTyre } from "./types";

export const mockTyres: NormalisedTyre[] = [
  { id: "michelin-primacy-4", supplier: "NeedATyre Demo", brand: "Michelin", model: "Primacy 4+", size: "205/55 R16", loadSpeed: "91V", category: "Premium", fuel: "B", wetGrip: "A", noiseDb: 69, stock: 12, priceEach: 124.99, fittingIncluded: true, eta: "Today / Tomorrow" },
  { id: "goodyear-efficientgrip", supplier: "NeedATyre Demo", brand: "Goodyear", model: "EfficientGrip Performance 2", size: "205/55 R16", loadSpeed: "91V", category: "Premium", fuel: "B", wetGrip: "A", noiseDb: 70, stock: 9, priceEach: 112.99, fittingIncluded: true, eta: "Tomorrow" },
  { id: "hankook-ventus-prime", supplier: "NeedATyre Demo", brand: "Hankook", model: "Ventus Prime 4", size: "205/55 R16", loadSpeed: "91V", category: "Mid-range", fuel: "C", wetGrip: "B", noiseDb: 71, stock: 18, priceEach: 89.99, fittingIncluded: true, eta: "Today / Tomorrow" },
  { id: "landsail-ls388", supplier: "NeedATyre Demo", brand: "Landsail", model: "LS388", size: "205/55 R16", loadSpeed: "91V", category: "Budget", fuel: "C", wetGrip: "C", noiseDb: 72, stock: 22, priceEach: 59.99, fittingIncluded: true, eta: "Today" }
];
