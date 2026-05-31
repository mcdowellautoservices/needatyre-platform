import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBox } from "@/components/SearchBox";

const support = [
  "Emergency tyre assistance",
  "Roadside puncture support",
  "Mobile tyre fitting",
  "Blowout support",
  "Workplace call-outs",
  "Local garage fallback",
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#111827" }}>
      <Header />

      <section style={{ padding: "70px 6%", background: "linear-gradient(135deg,#fefce8,#ecfeff)" }}>
        <span style={{ background: "#facc15", borderRadius: 999, padding: "8px 14px", fontWeight: 900, textTransform: "uppercase" }}>
          Emergency tyre help
        </span>

        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em", maxWidth: 850 }}>
          NeedATyre Breakdown
        </h1>

        <p style={{ color: "#475569", fontSize: 18, maxWidth: 760, lineHeight: 1.6 }}>
          Got a puncture, flat tyre or blowout? NeedATyre helps drivers request
          fast tyre support, mobile fitting and local garage assistance.
        </p>

        <div style={{ marginTop: 30 }}>
          <SearchBox />
        </div>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 42 }}>
          {support.map((item) => (
            <div key={item} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 22, padding: 22, fontWeight: 800 }}>
              ✓ {item}
            </div>
          ))}
        </section>

        <section style={{ marginTop: 50, background: "#111827", color: "white", borderRadius: 28, padding: 32, maxWidth: 900 }}>
          <h2 style={{ fontSize: 34, marginTop: 0 }}>Fast roadside tyre assistance</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
            Whether you are stuck at home, work, roadside or on a job, NeedATyre
            is built to connect you with emergency tyre help and fast fitting options.
          </p>

          <Link
            href="/booking"
            style={{
              display: "inline-flex",
              marginTop: 20,
              background: "#facc15",
              color: "#111827",
              padding: "14px 22px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Request emergency help
          </Link>
        </section>

        <Link href="/" style={{ display: "inline-flex", marginTop: 28, color: "#2563eb", fontWeight: 900 }}>
          ← Back home
        </Link>
      </section>
    </main>
  );
}