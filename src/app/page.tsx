import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Garage fitting network",
    text: "Book at trusted fitting centres with clear prices and live availability.",
  },
  {
    number: "02",
    title: "Mobile fitting at home or work",
    text: "Our fitters come to you, whether you are at home, work, fleet yard or roadside.",
  },
  {
    number: "03",
    title: "Emergency tyre assistance",
    text: "Need help quickly? Request urgent tyre support and roadside assistance.",
  },
];

const tyres = [
  "Premium tyre search",
  "Vehicle registration lookup",
  "Tyre size search",
  "Fully fitted prices",
  "Garage fitting",
  "Mobile fitting",
  "Breakdown tyre support",
  "Fleet account support",
];

export default function Home() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <Link href="/" style={styles.brand}>
          <div style={styles.logoMark}>N</div>
          <div>
            <strong style={styles.logoText}>NeedATyre</strong>
            <span style={styles.logoSub}>by Mcdowell Auto Services</span>
          </div>
        </Link>

        <nav style={styles.nav}>
          <Link href="/tyres" style={styles.navLink}>Tyres</Link>
          <Link href="/mobile-fitting" style={styles.navLink}>Mobile fitting</Link>
          <Link href="/breakdown" style={styles.navLink}>Breakdown</Link>
          <Link href="/fleet" style={styles.navLink}>Fleet</Link>
          <Link href="/garages" style={styles.navLink}>Garages</Link>
        </nav>

        <Link href="/booking" style={styles.headerButton}>Book now</Link>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <span style={styles.badge}>The smarter tyre booking platform</span>
          <h1 style={styles.title}>Tyres booked online. Fitted anywhere.</h1>
          <p style={styles.subtitle}>
            Search by registration, compare fully fitted prices, then choose
            garage fitting, mobile fitting or emergency tyre assistance.
          </p>

          <div style={styles.searchCard}>
            <div style={styles.formRow}>
              <input
                style={styles.regInput}
                placeholder="AB12 CDE"
                aria-label="Vehicle registration"
              />
              <input
                style={styles.postcodeInput}
                placeholder="Postcode"
                aria-label="Postcode"
              />
              <Link href="/results" style={styles.findButton}>Find tyres</Link>
            </div>

            <div style={styles.tabs}>
              <span style={styles.activeTab}>Search by registration</span>
              <span style={styles.tab}>Search by tyre size</span>
              <span style={styles.tab}>Fully fitted prices</span>
            </div>
          </div>
        </div>

        <div style={styles.heroPanel}>
          <div style={styles.panelHeader}>NeedATyre Promise</div>
          <h2 style={styles.panelTitle}>Fast local fitting with no fuss.</h2>
          <ul style={styles.checkList}>
            <li>✓ Transparent fitted pricing</li>
            <li>✓ Mobile and garage fitting</li>
            <li>✓ Emergency tyre help</li>
            <li>✓ Fleet support available</li>
          </ul>
        </div>
      </section>

      <section style={styles.services}>
        {services.map((item) => (
          <div key={item.number} style={styles.serviceCard}>
            <span style={styles.serviceNumber}>{item.number}</span>
            <h3 style={styles.serviceTitle}>{item.title}</h3>
            <p style={styles.serviceText}>{item.text}</p>
          </div>
        ))}
      </section>

      <section style={styles.marketplace}>
        <div>
          <span style={styles.badge}>Built-in marketplace modules</span>
          <h2 style={styles.sectionTitle}>Everything needed to sell tyres online.</h2>
          <p style={styles.sectionText}>
            NeedATyre is designed as your own tyre booking platform with search,
            booking, customer journeys and admin-ready sections.
          </p>
        </div>

        <div style={styles.grid}>
          {tyres.map((item) => (
            <div key={item} style={styles.gridItem}>✓ {item}</div>
          ))}
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to book tyres?</h2>
        <p style={styles.ctaText}>
          Get fitted locally, at home, at work, or roadside.
        </p>
        <Link href="/booking" style={styles.ctaButton}>Start booking</Link>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    color: "#111827",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  header: {
    width: "100%",
    padding: "22px 6%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(255,255,255,0.92)",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "#111827",
    textDecoration: "none",
  },
  logoMark: {
    width: 44,
    height: 44,
    borderRadius: 14,
    background: "linear-gradient(135deg,#111827,#2563eb)",
    color: "#facc15",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    fontSize: 22,
    border: "3px solid #facc15",
  },
  logoText: {
    display: "block",
    fontSize: 22,
    letterSpacing: "-0.04em",
  },
  logoSub: {
    display: "block",
    fontSize: 11,
    color: "#64748b",
    fontWeight: 700,
  },
  nav: {
    display: "flex",
    gap: 24,
  },
  navLink: {
    color: "#111827",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
  },
  headerButton: {
    background: "#111827",
    color: "white",
    padding: "12px 22px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.35fr 0.65fr",
    gap: 40,
    padding: "80px 6% 60px",
    background:
      "radial-gradient(circle at top right,#99f6e4,transparent 34%), linear-gradient(135deg,#fefce8,#ecfeff)",
  },
  heroText: {
    maxWidth: 820,
  },
  badge: {
    display: "inline-flex",
    background: "#bef264",
    padding: "9px 16px",
    borderRadius: 999,
    fontWeight: 900,
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: "0.04em",
    marginBottom: 18,
  },
  title: {
    fontSize: "clamp(46px, 7vw, 86px)",
    lineHeight: 0.93,
    letterSpacing: "-0.07em",
    maxWidth: 760,
    margin: "0 0 24px",
  },
  subtitle: {
    fontSize: 19,
    lineHeight: 1.6,
    maxWidth: 650,
    color: "#475569",
    marginBottom: 34,
  },
  searchCard: {
    background: "rgba(255,255,255,0.82)",
    padding: 18,
    borderRadius: 28,
    boxShadow: "0 30px 80px rgba(15,23,42,0.12)",
    maxWidth: 760,
    border: "1px solid rgba(15,23,42,0.08)",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr auto",
    gap: 10,
  },
  regInput: {
    background: "#facc15",
    border: "3px solid #111827",
    borderRadius: 16,
    padding: "18px 20px",
    fontWeight: 900,
    fontSize: 20,
    textTransform: "uppercase",
  },
  postcodeInput: {
    border: "1px solid #cbd5e1",
    borderRadius: 16,
    padding: "18px 20px",
    fontSize: 16,
  },
  findButton: {
    background: "#2563eb",
    color: "white",
    borderRadius: 16,
    padding: "18px 24px",
    textDecoration: "none",
    fontWeight: 900,
    display: "grid",
    placeItems: "center",
  },
  tabs: {
    display: "flex",
    gap: 18,
    padding: "15px 4px 0",
    flexWrap: "wrap",
    fontSize: 14,
  },
  activeTab: {
    background: "#d9f99d",
    padding: "7px 12px",
    borderRadius: 999,
    fontWeight: 800,
  },
  tab: {
    color: "#475569",
    padding: "7px 0",
    fontWeight: 700,
  },
  heroPanel: {
    alignSelf: "center",
    background: "#111827",
    color: "white",
    padding: 30,
    borderRadius: 32,
    boxShadow: "0 30px 90px rgba(15,23,42,0.3)",
  },
  panelHeader: {
    color: "#facc15",
    fontWeight: 900,
    marginBottom: 16,
  },
  panelTitle: {
    fontSize: 34,
    lineHeight: 1,
    letterSpacing: "-0.04em",
    marginBottom: 24,
  },
  checkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: 2,
    fontWeight: 700,
  },
  services: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 22,
    padding: "35px 6% 80px",
  },
  serviceCard: {
    background: "white",
    padding: 28,
    borderRadius: 28,
    boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
    border: "1px solid #e5e7eb",
  },
  serviceNumber: {
    color: "#0891b2",
    fontSize: 28,
    fontWeight: 900,
  },
  serviceTitle: {
    fontSize: 23,
    margin: "14px 0 10px",
  },
  serviceText: {
    color: "#64748b",
    lineHeight: 1.6,
  },
  marketplace: {
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: 36,
    padding: "80px 6%",
    background: "#111827",
    color: "white",
  },
  sectionTitle: {
    fontSize: 46,
    lineHeight: 1,
    letterSpacing: "-0.05em",
    margin: "12px 0 18px",
  },
  sectionText: {
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 14,
  },
  gridItem: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 18,
    padding: 18,
    fontWeight: 800,
  },
  cta: {
    textAlign: "center",
    padding: "80px 6%",
    background: "#facc15",
  },
  ctaTitle: {
    fontSize: 50,
    letterSpacing: "-0.05em",
    margin: "0 0 12px",
  },
  ctaText: {
    fontSize: 19,
    marginBottom: 28,
  },
  ctaButton: {
    display: "inline-flex",
    background: "#111827",
    color: "white",
    padding: "16px 28px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 900,
  },
};