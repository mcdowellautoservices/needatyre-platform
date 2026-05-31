import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeedATyre | Tyres Fitted Locally or At Your Location",
  description:
    "Book tyre fitting online. Mobile tyre fitting, garage fitting, fleet tyre services and emergency tyre assistance across the UK.",

  keywords: [
    "NeedATyre",
    "Tyres",
    "Tyre fitting",
    "Mobile tyre fitting",
    "Emergency tyre fitting",
    "Fleet tyres",
    "Garage tyre fitting",
  ],

  authors: [
    {
      name: "Mcdowell Auto Services",
    },
  ],

  openGraph: {
    title: "NeedATyre",
    description:
      "Search tyres, compare fitted prices and book online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}