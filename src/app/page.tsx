import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBox } from "@/components/SearchBox";

const services = [
  ["01", "Garage fitting network", "Book at trusted local fitting centres with clear prices and live availability."],
  ["02", "Mobile fitting at home or work", "Fitters come to you at home, work, fleet yard or roadside."],
  ["03", "Emergency tyre assistance", "Request urgent tyre support when a puncture or blowout stops your day."],
];

const modules = ["Reg lookup mock API", "Tyre results", "Booking calendar", "Checkout flow", "Garage portal", "Fleet portal", "Customer dashboard", "Admin dashboard"];

export default function Home() {
  return (
    <main style={styles.page}>
      <Header />
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <span style={styles.badge}>The smarter Blackcircles alternative</span>
          <h1 style={styles.title}>Tyres booked online. Fitted anywhere.</h1>
          <p style={styles.subtitle}>Search by registration, compare fully fitted prices, then choose garage fitting, mobile fitting or emergency fitting.</p>
          <SearchBox />
        </div>
        <aside style={styles.panel}>
          <strong style={{ color: "#facc15" }}>NeedATyre Promise</strong>
          <h2 style={styles.panelTitle}>Fast local fitting with no fuss.</h2>
          <p style={styles.panelText}>Built for customers who want a simple tyre booking experience, and for Mcdowell Auto Services to grow online bookings.</p>
          <ul style={styles.list}>
            <li>✓ Transparent fitted pricing</li>
            <li>✓ Mobile and garage fitting</li>
            <li>✓ Emergency tyre help</li>
            <li>✓ Fleet support available</li>
          </ul>
        </aside>
      </section>
      <section style={styles.services}>{services.map(([n,t,d]) => <article key={n} style={styles.card}><span style={styles.number}>{n}</span><h3>{t}</h3><p style={styles.muted}>{d}</p></article>)}</section>
      <section style={styles.dark}>
        <div><span style={styles.badge}>Built-in marketplace modules</span><h2 style={styles.sectionTitle}>Everything needed to sell tyres online.</h2><p style={styles.darkText}>This build includes the foundations for search, bookings, customers, fleet work, garage fitting and admin workflows.</p></div>
        <div style={styles.grid}>{modules.map(m => <div key={m} style={styles.gridItem}>✓ {m}</div>)}</div>
      </section>
      <section style={styles.cta}><h2 style={styles.ctaTitle}>Ready to book tyres?</h2><p>Get fitted locally, at home, at work or roadside.</p><Link href="/booking" style={styles.ctaButton}>Start booking</Link></section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#f8fafc", color: "#111827" },
  hero: { display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(280px,.7fr)", gap: 36, padding: "78px 6% 58px", background: "radial-gradient(circle at top right,#99f6e4,transparent 32%),linear-gradient(135deg,#fefce8,#ecfeff)" },
  heroText: { maxWidth: 820 },
  badge: { display: "inline-flex", background: "#bef264", borderRadius: 999, padding: "9px 15px", fontWeight: 900, textTransform: "uppercase", fontSize: 12, marginBottom: 18 },
  title: { fontSize: "clamp(44px,7vw,86px)", lineHeight: .93, letterSpacing: "-.07em", maxWidth: 760, margin: "0 0 24px" },
  subtitle: { color: "#475569", fontSize: 19, lineHeight: 1.6, maxWidth: 650, marginBottom: 34 },
  panel: { alignSelf: "center", background: "#111827", color: "#fff", borderRadius: 32, padding: 32, boxShadow: "0 30px 90px rgba(15,23,42,.3)" },
  panelTitle: { fontSize: 34, lineHeight: 1, letterSpacing: "-.04em" },
  panelText: { color: "#cbd5e1", lineHeight: 1.6 },
  list: { listStyle: "none", padding: 0, lineHeight: 2, fontWeight: 800 },
  services: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 22, padding: "34px 6% 80px" },
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 28, padding: 28, boxShadow: "0 18px 50px rgba(15,23,42,.08)" },
  number: { color: "#0891b2", fontSize: 28, fontWeight: 900 },
  muted: { color: "#64748b", lineHeight: 1.6 },
  dark: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 36, padding: "80px 6%", background: "#111827", color: "#fff" },
  sectionTitle: { fontSize: 46, lineHeight: 1, letterSpacing: "-.05em", margin: "12px 0 18px" },
  darkText: { color: "#cbd5e1", fontSize: 18, lineHeight: 1.6 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 14 },
  gridItem: { background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 18, padding: 18, fontWeight: 800 },
  cta: { textAlign: "center", padding: "80px 6%", background: "#facc15" },
  ctaTitle: { fontSize: 50, letterSpacing: "-.05em", margin: 0 },
  ctaButton: { display: "inline-flex", marginTop: 24, background: "#111827", color: "#fff", textDecoration: "none", padding: "16px 28px", borderRadius: 999, fontWeight: 900 }
};
