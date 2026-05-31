import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header style={header}>
      <Logo />
      <nav style={nav}>
        <Link href="/tyres" style={navLink}>Tyres</Link>
        <Link href="/mobile-fitting" style={navLink}>Mobile fitting</Link>
        <Link href="/breakdown" style={navLink}>Breakdown</Link>
        <Link href="/fleet" style={navLink}>Fleet</Link>
        <Link href="/garages" style={navLink}>Garages</Link>
      </nav>
      <Link href="/booking" style={button}>Book now</Link>
    </header>
  );
}

const header: React.CSSProperties = { width: "100%", padding: "20px 6%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, background: "rgba(255,255,255,0.94)", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50, flexWrap: "wrap" };
const nav: React.CSSProperties = { display: "flex", gap: 22, flexWrap: "wrap" };
const navLink: React.CSSProperties = { color: "#111827", textDecoration: "none", fontWeight: 800, fontSize: 14 };
const button: React.CSSProperties = { background: "#111827", color: "white", padding: "12px 22px", borderRadius: 999, textDecoration: "none", fontWeight: 900 };
