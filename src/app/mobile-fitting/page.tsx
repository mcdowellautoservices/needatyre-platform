import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBox } from "@/components/SearchBox";

const benefits = [
  "Fitted at home",
  "Fitted at work",
  "Mobile van call-outs",
  "Same-day availability",
  "No garage waiting room",
  "Fleet yard support",
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#111827" }}>
      <Header />

      <section style={{ padding: "70px 6%", background: "linear-gradient(135deg,#fefce8,#ecfeff)" }}>
        <span style={badge}>Mobile tyre fitting</span>

        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em", maxWidth: 850 }}>
          Tyres fitted at home, work or roadside
        </h1>

        <p style={{ color: "#475569", fontSize: 18, maxWidth: 760, lineHeight: 1.6 }}>
          NeedATyre brings tyre fitting to you. Search tyres online, choose mobile
          fitting, then book a time that suits your day.
        </p>

        <div style={{ marginTop: 30 }}>
          <SearchBox />
        </div>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 42 }}>
          {benefits.map((item) => (
            <div key={item} style={card}>
              ✓ {item}
            </div>
          ))}
        </section>

        <section style={darkBox}>
          <h2 style={{ fontSize: 34, marginTop: 0 }}>How mobile fitting works</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
            Enter your registration or tyre size, choose your tyres, select mobile
            fitting, then confirm your address and appointment slot. A fitter attends
            your location and fits the tyres without you needing to visit a garage.
          </p>

          <Link href="/booking" style={button}>
            Book mobile fitting
          </Link>
        </section>

        <Link href="/" style={{ display: "inline-flex", marginTop: 28, color: "#2563eb", fontWeight: 900 }}>
          ← Back home
        </Link>
      </section>
    </main>
  );
}

const badge: React.CSSProperties = {
  background: "#bef264",
  borderRadius: 999,
  padding: "8px 14px",
  fontWeight: 900,
  textTransform: "uppercase",
  display: "inline-flex",
};

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 22,
  padding: 22,
  fontWeight: 800,
};

const darkBox: React.CSSProperties = {
  marginTop: 50,
  background: "#111827",
  color: "white",
  borderRadius: 28,
  padding: 32,
  maxWidth: 900,
};

const button: React.CSSProperties = {
  display: "inline-flex",
  marginTop: 20,
  background: "#facc15",
  color: "#111827",
  padding: "14px 22px",
  borderRadius: 999,
  fontWeight: 900,
  textDecoration: "none",
};
