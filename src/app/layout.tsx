import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeedATyre | Tyres fitted locally or at your location",
  description:
    "Book tyre fitting, mobile tyre fitting, puncture repairs, emergency tyre assistance, fleet support and garage fitting online.",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#f8fafc",
          color: "#111827"
        }}
      >
        {children}
      </body>
    </html>
  );
}
