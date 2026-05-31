import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" style={wrapper}>
      <div style={mark}>N</div>
      <div>
        <strong style={title}>NeedATyre</strong>
        <span style={subTitle}>by Mcdowell Auto Services</span>
      </div>
    </Link>
  );
}

const wrapper: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#111827" };
const mark: React.CSSProperties = { width: 52, height: 52, borderRadius: 16, background: "linear-gradient(135deg,#111827,#2563eb)", color: "#facc15", border: "3px solid #facc15", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 26 };
const title: React.CSSProperties = { display: "block", fontSize: 24, letterSpacing: "-0.05em" };
const subTitle: React.CSSProperties = { display: "block", fontSize: 11, color: "#64748b", fontWeight: 700 };
