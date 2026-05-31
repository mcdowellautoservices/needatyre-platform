import Link from "next/link";
import { Header } from "@/components/Header";

const steps = [
  "Enter registration or tyre size",
  "Choose garage or mobile fitting",
  "Select date and time",
  "Confirm details",
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#111827" }}>
      <Header />

      <section style={{ padding: "70px 6%", background: "linear-gradient(135deg,#fefce8,#ecfeff)" }}>
        <span style={{ background: "#bef264", borderRadius: 999, padding: "8px 14px", fontWeight: 900, textTransform: "uppercase" }}>
          Book tyres online
        </span>

        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em", maxWidth: 850 }}>
          Book your tyre fitting
        </h1>

        <p style={{ color: "#475569", fontSize: 18, maxWidth: 760, lineHeight: 1.6 }}>
          Start your NeedATyre booking. Search by registration, tyre size or postcode,
          then choose mobile fitting, garage fitting or emergency support.
        </p>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 42 }}>
          {steps.map((step, index) => (
            <div key={step} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 22, padding: 22 }}>
              <strong style={{ color: "#2563eb", fontSize: 24 }}>0{index + 1}</strong>
              <h3>{step}</h3>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 40, background: "white", borderRadius: 28, padding: 28, border: "1px solid #e5e7eb", maxWidth: 900 }}>
          <h2 style={{ fontSize: 32, marginTop: 0 }}>Start booking</h2>

          <div style={{ display: "grid", gap: 14 }}>
            <input placeholder="Vehicle registration e.g. AB12 CDE" style={inputStyle} />
            <input placeholder="Postcode e.g. EH54 5XX" style={inputStyle} />
            <select style={inputStyle}>
              <option>Choose fitting type</option>
              <option>Garage fitting</option>
              <option>Mobile fitting</option>
              <option>Emergency tyre assistance</option>
              <option>Fleet booking</option>
            </select>
          </div>

          <Link href="/results" style={buttonStyle}>
            Continue to tyre results
          </Link>
        </section>

        <Link href="/" style={{ display: "inline-flex", marginTop: 28, color: "#2563eb", fontWeight: 900 }}>
          ← Back home
        </Link>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: 16,
  border: "1px solid #cbd5e1",
  fontSize: 16,
};

const buttonStyle: React.CSSProperties = {
  display: "inline-flex",
  marginTop: 22,
  background: "#111827",
  color: "white",
  padding: "15px 24px",
  borderRadius: 999,
  fontWeight: 900,
  textDecoration: "none",
};