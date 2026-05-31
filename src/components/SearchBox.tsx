import Link from "next/link";

export function SearchBox() {
  return (
    <section style={card}>
      <div style={tabs}>
        <span style={activeTab}>Search by registration</span>
        <span style={tab}>Search by tyre size</span>
        <span style={tab}>Search by postcode</span>
      </div>
      <div style={formGrid}>
        <input placeholder="AB12 CDE" aria-label="Vehicle registration" style={regInput} />
        <input placeholder="Postcode" aria-label="Postcode" style={input} />
        <Link href="/results" style={button}>Find tyres</Link>
      </div>
      <p style={hint}>Compare fully fitted tyre prices, garage fitting, mobile fitting and emergency tyre assistance.</p>
    </section>
  );
}

const card: React.CSSProperties = { background: "rgba(255,255,255,0.9)", border: "1px solid #e5e7eb", borderRadius: 28, padding: 18, maxWidth: 820, boxShadow: "0 25px 70px rgba(15,23,42,0.12)" };
const tabs: React.CSSProperties = { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 };
const activeTab: React.CSSProperties = { background: "#bef264", color: "#111827", borderRadius: 999, padding: "8px 12px", fontWeight: 900, fontSize: 13 };
const tab: React.CSSProperties = { background: "#f1f5f9", color: "#475569", borderRadius: 999, padding: "8px 12px", fontWeight: 800, fontSize: 13 };
const formGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 };
const regInput: React.CSSProperties = { width: "100%", background: "#facc15", border: "3px solid #111827", borderRadius: 16, padding: "17px 18px", fontSize: 20, fontWeight: 900, textTransform: "uppercase" };
const input: React.CSSProperties = { width: "100%", border: "1px solid #cbd5e1", borderRadius: 16, padding: "17px 18px", fontSize: 16 };
const button: React.CSSProperties = { background: "#2563eb", color: "white", borderRadius: 16, padding: "17px 24px", display: "grid", placeItems: "center", textDecoration: "none", fontWeight: 900 };
const hint: React.CSSProperties = { color: "#64748b", fontSize: 14, margin: "14px 4px 0", lineHeight: 1.5 };
