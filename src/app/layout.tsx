import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "NeedATyre | Live tyres, mobile fitting and garage fitting",
  description: "Search live tyre stock and pricing. Book mobile tyre fitting, garage fitting, fleet tyre support and emergency tyre assistance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{margin:0,padding:0,fontFamily:"Arial, Helvetica, sans-serif",backgroundColor:"#f8fafc",color:"#111827"}}>{children}<Footer /></body></html>;
}
