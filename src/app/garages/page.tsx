import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBox } from "@/components/SearchBox";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#111827" }}>
      <Header />
      <section style={{ padding: "70px 6%", background: "linear-gradient(135deg,#fefce8,#ecfeff)" }}>
        <span style={{ background: "#bef264", borderRadius: 999, padding: "8px 14px", fontWeight: 900, textTransform: "uppercase" }}>Garages</span>
        <h1 style={{ fontSize: 56, letterSpacing: "-.06em", maxWidth: 800 }}>NeedATyre Garages</h1>
        <p style={{ color: "#475569", fontSize: 18, maxWidth: 700, lineHeight: 1.6 }}>This page is ready for the next module. Connect live APIs, booking data and checkout when you are ready.</p>
        <div style={{ marginTop: 30 }}><SearchBox /></div>
        <Link href="/" style={{ display: "inline-flex", marginTop: 28, color: "#2563eb", fontWeight: 900 }}>← Back home</Link>
      </section>
    </main>
  );
}
