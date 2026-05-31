import Link from "next/link";

export function SearchBox() {
  return (
    <div style={styles.card}>
      <div style={styles.row}>
        <input style={styles.reg} placeholder="AB12 CDE" aria-label="Vehicle registration" />
        <input style={styles.postcode} placeholder="Postcode" aria-label="Postcode" />
        <Link href="/results" style={styles.button}>Find tyres</Link>
      </div>
      <div style={styles.tabs}>
        <span style={styles.active}>Search by registration</span>
        <span style={styles.tab}>Search by tyre size</span>
        <span style={styles.tab}>Fully fitted prices</span>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "rgba(255,255,255,.86)",
    border: "1px solid rgba(15,23,42,.08)",
    boxShadow: "0 30px 80px rgba(15,23,42,.12)",
    borderRadius: 28,
    padding: 18,
    maxWidth: 780
  },
  row: { display: "flex", gap: 10, flexWrap: "wrap" },
  reg: {
    flex: "1 1 210px",
    background: "#facc15",
    border: "3px solid #111827",
    borderRadius: 16,
    padding: "18px 20px",
    fontWeight: 900,
    fontSize: 20,
    textTransform: "uppercase"
  },
  postcode: {
    flex: "1 1 190px",
    border: "1px solid #cbd5e1",
    borderRadius: 16,
    padding: "18px 20px",
    fontSize: 16
  },
  button: {
    background: "#2563eb",
    color: "#fff",
    textDecoration: "none",
    borderRadius: 16,
    padding: "18px 24px",
    fontWeight: 900,
    display: "grid",
    placeItems: "center"
  },
  tabs: { display: "flex", gap: 14, flexWrap: "wrap", paddingTop: 15, fontSize: 14 },
  active: { background: "#d9f99d", padding: "7px 12px", borderRadius: 999, fontWeight: 900 },
  tab: { color: "#475569", padding: "7px 0", fontWeight: 800 }
};
