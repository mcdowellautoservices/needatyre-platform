import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header style={styles.header}>
      <Link href="/" style={styles.logoWrap}>
        <Image src="/logo.svg" alt="NeedATyre" width={190} height={52} priority />
      </Link>
      <nav style={styles.nav}>
        <Link href="/tyres" style={styles.navLink}>Tyres</Link>
        <Link href="/mobile-fitting" style={styles.navLink}>Mobile fitting</Link>
        <Link href="/breakdown" style={styles.navLink}>Breakdown</Link>
        <Link href="/fleet" style={styles.navLink}>Fleet</Link>
        <Link href="/garages" style={styles.navLink}>Garages</Link>
      </nav>
      <Link href="/booking" style={styles.cta}>Book now</Link>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    padding: "18px 6%",
    background: "rgba(255,255,255,.94)",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 20,
    flexWrap: "wrap"
  },
  logoWrap: { display: "inline-flex" },
  nav: { display: "flex", gap: 22, flexWrap: "wrap" },
  navLink: { color: "#111827", textDecoration: "none", fontWeight: 800, fontSize: 14 },
  cta: {
    background: "#111827",
    color: "#fff",
    textDecoration: "none",
    padding: "12px 22px",
    borderRadius: 999,
    fontWeight: 900
  }
};
