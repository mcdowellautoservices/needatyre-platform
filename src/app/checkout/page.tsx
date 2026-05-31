import Link from "next/link";
import { Header } from "@/components/Header";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#111827" }}>
      <Header />

      <section style={{ padding: "70px 6%", background: "linear-gradient(135deg,#fefce8,#ecfeff)" }}>
        <span style={badgeStyle}>Checkout</span>

        <h1 style={{ fontSize: 56, letterSpacing: "-0.06em", maxWidth: 850 }}>
          Confirm your booking
        </h1>

        <p style={{ color: "#475569", fontSize: 18, maxWidth: 760, lineHeight: 1.6 }}>
          Review your selected tyres, fitting option and contact details before payment.
          Stripe checkout can be connected when you are ready to take live payments.
        </p>

        <section style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, marginTop: 40 }}>
          <div style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Customer details</h2>

            <div style={{ display: "grid", gap: 14 }}>
              <input placeholder="Full name" style={inputStyle} />
              <input placeholder="Email address" style={inputStyle} />
              <input placeholder="Phone number" style={inputStyle} />
              <input placeholder="Vehicle registration" style={inputStyle} />
              <input placeholder="Fitting address or garage postcode" style={inputStyle} />
              <select style={inputStyle}>
                <option>Preferred fitting type</option>
                <option>Garage fitting</option>
                <option>Mobile fitting</option>
                <option>Emergency tyre assistance</option>
              </select>
            </div>
          </div>

          <aside style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Order summary</h2>

            <div style={summaryRow}>
              <span>Michelin Primacy 4+</span>
              <strong>£124.99</strong>
            </div>

            <div style={summaryRow}>
              <span>Fitting</span>
              <strong>Included</strong>
            </div>

            <div style={summaryRow}>
              <span>Booking fee</span>
              <strong>£0.00</strong>
            </div>

            <hr style={{ border: 0, borderTop: "1px solid #e5e7eb", margin: "18px 0" }} />

            <div style={{ ...summaryRow, fontSize: 22 }}>
              <span>Total</span>
              <strong>£124.99</strong>
            </div>

            <Link href="/customer" style={payButton}>
              Continue to payment
            </Link>
          </aside>
        </section>

        <Link href="/results" style={{ display: "inline-flex", marginTop: 28, color: "#2563eb", fontWeight: 900 }}>
          ← Back to results
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

const cardStyle: React.CSSProperties = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 28,
  padding: 28,
  boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: 16,
  border: "1px solid #cbd5e1",
  fontSize: 16,
};

const summaryRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 20,
  padding: "10px 0",
};

const payButton: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: 22,
  background: "#111827",
  color: "white",
  padding: "15px 24px",
  borderRadius: 999,
  fontWeight: 900,
  textDecoration: "none",
};