import Link from "next/link";

export function Header() {
  return (
    <header style={header}>
      <Link href="/" style={brand}>
        <div style={logoMark}>N</div>
        <div><strong style={logoText}>NeedATyre</strong><span style={logoSub}>by Mcdowell Auto Services</span></div>
      </Link>
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
const header: React.CSSProperties={width:"100%",padding:"18px 6%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,background:"rgba(255,255,255,.94)",borderBottom:"1px solid #e5e7eb",position:"sticky",top:0,zIndex:50};
const brand: React.CSSProperties={display:"flex",alignItems:"center",gap:12,color:"#111827",textDecoration:"none"};
const logoMark: React.CSSProperties={width:46,height:46,borderRadius:14,background:"linear-gradient(135deg,#111827,#2563eb)",color:"#facc15",display:"grid",placeItems:"center",fontWeight:900,fontSize:24,border:"3px solid #facc15"};
const logoText: React.CSSProperties={display:"block",fontSize:23,letterSpacing:"-.04em"};
const logoSub: React.CSSProperties={display:"block",fontSize:11,color:"#64748b",fontWeight:700};
const nav: React.CSSProperties={display:"flex",gap:22,flexWrap:"wrap"};
const navLink: React.CSSProperties={color:"#111827",textDecoration:"none",fontWeight:800,fontSize:14};
const button: React.CSSProperties={background:"#111827",color:"white",padding:"12px 22px",borderRadius:999,textDecoration:"none",fontWeight:900};
