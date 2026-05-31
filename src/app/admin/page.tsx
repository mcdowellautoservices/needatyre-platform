import Link from "next/link";
import { Header } from "@/components/Header";

const stats = [
  ["Orders today", "18"],
  ["Pending bookings", "7"],
  ["Fleet accounts", "12"],
  ["Garage partners", "24"],
];

const jobs = [
  {
    customer: "James Wilson",
    vehicle: "BMW 3 Series",
    service: "2 x Michelin Primacy 4+",
    status: "Confirmed",
  },
  {
    customer: "Mcdowell Fleet",
    vehicle: "Ford Transit",
    service: "Emergency mobile fitting",
    status: "Urgent",
  },
  {
    customer: "Sarah Grant",
    vehicle: "Audi A3",
    service: "Garage fitting",
    status: "Awaiting payment",
  },
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#111827" }}>
      <Header />

      <section style={{ padding: "70px 6%", background: "linear-gradient(135deg,#fefce8,#ecfeff)" }}>
        <span style={badgeStyle}>Admin dashboard</span>

        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em", maxWidth: 850 }}>
          NeedATyre control centre
        </h1>

        <p style={{ color: "#475569", fontSize: 18, maxWidth: 760, lineHeight: 1.6 }}>
          Manage tyre orders, mobile fitting requests, garage bookings, fleet customers
          and partner network activity from one dashboard.
        </p>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 18, marginTop: 40 }}>
          {stats.map(([label, value]) => (
            <div key={label} style={statCard}>
              <strong style={{ fontSize: 34 }}>{value}</strong>
              <span style={{ color: "#64748b", fontWeight: 800 }}>{label}</span>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 34, background: "white", border: "1px solid #e5e7eb", borderRadius: 28, padding: 28, maxWidth: 1050 }}>
          <h2 style={{ marginTop: 0 }}>Recent jobs</h2>

          <div style={{ display: "grid", gap: 14 }}>
            {jobs.map((job) => (
              <article key={`${job.customer}-${job.vehicle}`} style={jobRow}>
                <div>
                  <strong>{job.customer}</strong>
                  <p style={{ margin: "6px 0 0", color: "#64748b" }}>
                    {job.vehicle} • {job.service}
                  </p>
                </div>
                <span style={statusPill}>{job.status}</span>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 34, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
          <Link href="/results" style={moduleCard}>Manage tyre catalogue</Link>
          <Link href="/garages" style={moduleCard}>Garage partner network</Link>
          <Link href="/fleet" style={moduleCard}>Fleet accounts</Link>
          <Link href="/booking" style={moduleCard}>Booking settings</Link>
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

const jobRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 18,
  alignItems: "center",
  padding: 16,
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  background: "#f8fafc",
};

const statusPill: React.CSSProperties = {
  background: "#111827",
  color: "white",
  borderRadius: 999,
  padding: "8px 12px",
  fontWeight: 900,
  fontSize: 13,
};

const moduleCard: React.CSSProperties = {
  background: "#111827",
  color: "white",
  borderRadius: 22,
  padding: 24,
  textDecoration: "none",
  fontWeight: 900,
};