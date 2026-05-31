import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBox } from "@/components/SearchBox";

const features = [
  "Approved garage network",
  "Live fitting availability",
  "Tyres fitted locally",
  "Online booking system",
  "Same-day appointments",
  "Fully fitted pricing",
];

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#111827",
      }}
    >
      <Header />

      <section
        style={{
          padding: "70px 6%",
          background: "linear-gradient(135deg,#fefce8,#ecfeff)",
        }}
      >
        <span
          style={{
            background: "#bef264",
            borderRadius: 999,
            padding: "8px 14px",
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          Garage fitting
        </span>

        <h1
          style={{
            fontSize: 56,
            letterSpacing: "-0.06em",
            maxWidth: 850,
          }}
        >
          NeedATyre Garages
        </h1>

        <p
          style={{
            color: "#475569",
            fontSize: 18,
            maxWidth: 760,
            lineHeight: 1.6,
          }}
        >
          Search trusted local garages, compare fully fitted tyre prices and
          book your appointment online through the NeedATyre network.
        </p>

        <div style={{ marginTop: 30 }}>
          <SearchBox />
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 18,
            marginTop: 42,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature}
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 22,
                padding: 22,
                fontWeight: 800,
              }}
            >
              ✓ {feature}
            </div>
          ))}
        </section>

        <section
          style={{
            marginTop: 50,
            background: "#111827",
            color: "white",
            borderRadius: 28,
            padding: 32,
            maxWidth: 900,
          }}
        >
          <h2
            style={{
              fontSize: 34,
              marginTop: 0,
            }}
          >
            Local garage fitting network
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.7,
            }}
          >
            NeedATyre connects drivers with trusted local fitting centres.
            Compare tyre prices, choose a fitting date and have your tyres
            professionally installed by experienced technicians.
          </p>

          <Link
            href="/booking"
            style={{
              display: "inline-flex",
              marginTop: 20,
              background: "#facc15",
              color: "#111827",
              padding: "14px 22px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Book garage fitting
          </Link>
        </section>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            marginTop: 28,
            color: "#2563eb",
            fontWeight: 900,
          }}
        >
          ← Back home
        </Link>
      </section>
    </main>
  );
}