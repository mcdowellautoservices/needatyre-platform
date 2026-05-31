import Link from "next/link";
import { Header } from "@/components/Header";

const bookings = [
  {
    vehicle: "BMW 3 Series",
    reg: "AB12 CDE",
    service: "2 x Michelin Primacy 4+",
    status: "Booked",
    date: "Tomorrow, 10:00",
  },
  {
    vehicle: "Ford Transit",
    reg: "FN21 TYR",
    service: "Mobile fitting request",
    status: "Pending",
    date: "Awaiting confirmation",
  },
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#111827" }}>
      <Header />

      <section style={{ padding: "70px 6%", background: "linear-gradient(135deg,#fefce8,#ecfeff)" }}>
        <span style={badgeStyle}>Customer area</span>

        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em", maxWidth: 850 }}>
          Your NeedATyre dashboard
        </h1>

        <p style={{ color: "#475569", fontSize: 18, maxWidth: 760, lineHeight: 1.6 }}>
          View bookings, saved vehicles, invoices and tyre fitting requests.
          Customer login and live order history can be connected later.
        </p>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 40 }}>
          <div style={statCard}><strong>2</strong><span>Active bookings</span></div>
          <div style={statCard}><strong>3</strong><span>Saved vehicles</span></div>
          <div style={statCard}><strong>£249.98</strong><span>Recent spend</span></div>
          <div style={statCard}><strong>24/7</strong><span>Emergency tyre help</span></div>
        </section>

        <section style={{ marginTop: 34, display: "grid", gap: 16, maxWidth: 1050 }}>
          {bookings.map((booking) => (
            <article key={booking.reg} style={cardStyle}>
              <div>
                <strong style={{ color: "#2563eb" }}>{booking.status}</strong>
                <h2 style={{ margin: "8px 0" }}>{booking.vehicle}</h2>
                <p style={{ color: "#64748b", margin: 0 }}>{booking.reg} • {booking.service}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <strong>{booking.date}</strong>
                <br />
                <Link href="/booking" style={smallButton}>Manage</Link>
              </div>
            </article>
          ))}
        </section>

        <Link href="/" style={{ display: "inline-flex", marginTop: 28, color: "#2563eb", fontWeight: 900 }}>
          ← Back home
        </Link>
      </section>
    </main>
  );
}

const badgeStyle: React.CSSProperties = {
  background: "#bef264",
  borderRadius: 999,
  padding: "8px 14px",
  fontWeight: 900,
  textTransform: "uppercase",
  display: "inline-flex",
};

const statCard: React.CSSProperties = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 24,
  padding: 24,
  display: "grid",
  gap: 8,
  boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
};

const cardStyle: React.CSSProperties = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 26,
  padding: 24,
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: 20,
  alignItems: "center",
};

const smallButton: React.CSSProperties = {
  display: "inline-flex",
  marginTop: 12,
  background: "#111827",
  color: "white",
  padding: "10px 16px",
  borderRadius: 999,
  fontWeight: 900,
  textDecoration: "none",
};