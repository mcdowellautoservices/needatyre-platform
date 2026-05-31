import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBox } from "@/components/SearchBox";
import { Footer } from "@/components/Footer";

const features = ['Approved garage network','Live fitting availability','Tyres fitted locally','Online booking system','Same-day appointments','Fully fitted pricing'];

export default function Page() {
  return (
    <main style={pageStyle}>
      <Header />
      <section style={heroStyle}>
        <span style={badgeStyle}>Garage fitting</span>
        <h1 style={titleStyle}>NeedATyre Garages</h1>
        <p style={leadStyle}>Search trusted local garages, compare fully fitted tyre prices and book your appointment online through the NeedATyre network.</p>
        <div style={{ marginTop: 30 }}><SearchBox /></div>
        <section style={featureGrid}>
          {features.map((item) => (
            <div key={item} style={featureCard}>✓ {item}</div>
          ))}
        </section>
        <section style={darkBox}>
          <h2 style={darkTitle}>Local garage fitting network</h2>
          <p style={darkText}>NeedATyre connects drivers with trusted local fitting centres. Compare tyre prices, choose a fitting date and have your tyres professionally installed by experienced technicians.</p>
          <Link href="/booking" style={yellowButton}>Book garage fitting</Link>
        </section>
        <Link href="/" style={backLink}>← Back home</Link>
      </section>
      <Footer />
    </main>
  );
}

const pageStyle: React.CSSProperties = { minHeight: "100vh", background: "#f8fafc", color: "#111827" };
const heroStyle: React.CSSProperties = { padding: "70px 6%", background: "linear-gradient(135deg,#fefce8,#ecfeff)" };
const badgeStyle: React.CSSProperties = { background: "#bef264", borderRadius: 999, padding: "8px 14px", fontWeight: 900, textTransform: "uppercase", display: "inline-flex" };
const titleStyle: React.CSSProperties = { fontSize: 56, letterSpacing: "-0.06em", maxWidth: 850 };
const leadStyle: React.CSSProperties = { color: "#475569", fontSize: 18, maxWidth: 760, lineHeight: 1.6 };
const featureGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 42 };
const featureCard: React.CSSProperties = { background: "white", border: "1px solid #e5e7eb", borderRadius: 22, padding: 22, fontWeight: 800 };
const darkBox: React.CSSProperties = { marginTop: 50, background: "#111827", color: "white", borderRadius: 28, padding: 32, maxWidth: 900 };
const darkTitle: React.CSSProperties = { fontSize: 34, marginTop: 0 };
const darkText: React.CSSProperties = { color: "#cbd5e1", lineHeight: 1.7 };
const yellowButton: React.CSSProperties = { display: "inline-flex", marginTop: 20, background: "#facc15", color: "#111827", padding: "14px 22px", borderRadius: 999, fontWeight: 900, textDecoration: "none" };
const backLink: React.CSSProperties = { display: "inline-flex", marginTop: 28, color: "#2563eb", fontWeight: 900 };
