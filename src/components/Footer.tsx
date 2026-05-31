import Link from "next/link";
export function Footer(){return <footer style={footer}><div><strong style={{fontSize:24}}>NeedATyre</strong><p style={text}>Mobile tyre fitting, garage fitting, roadside tyre assistance, live tyre stock and fleet tyre support.</p></div><div style={links}><Link href="/tyres" style={link}>Tyres</Link><Link href="/mobile-fitting" style={link}>Mobile fitting</Link><Link href="/breakdown" style={link}>Breakdown</Link><Link href="/fleet" style={link}>Fleet</Link><Link href="/garages" style={link}>Garages</Link></div><p style={{gridColumn:"1/-1",color:"#cbd5e1"}}>© 2026 NeedATyre by Mcdowell Auto Services</p></footer>}
const footer:React.CSSProperties={background:"#111827",color:"white",padding:"55px 6% 28px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:30};
const text:React.CSSProperties={color:"#cbd5e1",lineHeight:1.7,maxWidth:520};
const links:React.CSSProperties={display:"grid",gap:10};
const link:React.CSSProperties={color:"#e5e7eb",fontWeight:800,textDecoration:"none"};
