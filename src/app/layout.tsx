import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeedATyre | Tyres fitted locally or at your location",
  description:
    "Book tyre fitting, mobile tyre fitting, puncture repairs and emergency tyre services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}