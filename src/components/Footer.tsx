import Link from "next/link";

export function Footer() {
  return (
    <footer style={footer}>
      <section style={top}>
        <div>
          <strong style={{ fontSize: 26 }}>NeedATyre</strong>
          <p style={text}>Book tyres online with garage fitting, mobile tyre fitting, emergency tyre assistance and fleet support.</p>
        </div>
        <div style={linksGrid}>
          <div><h3 style={heading}>Services</h3><Link href="/tyres" style={link}>Tyres</Link><Link href="/mobile-fitting" style={link}>Mobile fitting</Link><Link href="/breakdown" style={link}>Breakdown</Link><Link href="/fleet" style={link}>Fleet</Link></div>
          <div><h3 style={heading}>Platform</h3><Link href="/booking" style={link}>Booking</Link><Link href="/results" style={link}>Tyre results</Link><Link href="/customer" style={link}>Customer area</Link><Link href="/garages" style={link}>Garages</Link></div>
          <div><h3 style={heading}>Need help?</h3><Link href="/booking" style={link}>Book now</Link><Link href="/breakdown" style={link}>Emergency help</Link><Link href="/admin" style={link}>Admin</Link></div>
        </div>
      </section>
      <section style={bottom}><span>© 2026 NeedATyre. All rights reserved.</span><span>Tyres • Mobile fitting • Breakdown • Fleet • Garages</span></section>
    </footer>
  );
}
const footer: React.CSSProperties = { background: "#111827", color: "white", padding: "60px 6% 28px" };
const top: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 40 };
const text: React.CSSProperties = { color: "#cbd5e1", lineHeight: 1.7, maxWidth: 440, marginTop: 18 };
const linksGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 24 };
const heading: React.CSSProperties = { color: "#facc15", marginTop: 0 };
const link: React.CSSProperties = { display: "block", color: "#e5e7eb", textDecoration: "none", marginBottom: 10, fontWeight: 700 };
const bottom: React.CSSProperties = { borderTop: "1px solid rgba(255,255,255,0.14)", marginTop: 40, paddingTop: 24, display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap", color: "#cbd5e1", fontSize: 14 };
