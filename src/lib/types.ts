export type FittingType = "garage" | "mobile" | "emergency" | "fleet";

export type TyreSearchRequest = {
  registration?: string;
  postcode?: string;
  width?: string;
  profile?: string;
  rim?: string;
  quantity?: number;
  fittingType?: FittingType;
};

export type NormalisedTyre = {
  id: string;
  supplier: string;
  brand: string;
  model: string;
  size: string;
  loadSpeed: string;
  category: "Premium" | "Mid-range" | "Budget";
  fuel: string;
  wetGrip: string;
  noiseDb: number;
  stock: number;
  priceEach: number;
  fittingIncluded: boolean;
  eta: string;
};
