import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBox } from "@/components/SearchBox";

export default function Home(){return <main><Header/><section style={hero}><div><span style={badge}>Live supplier-ready platform</span><h1 style={title}>Tyres booked online. Fitted anywhere.</h1><p style={sub}>Search live supplier stock, compare fully fitted prices, then choose garage fitting, mobile fitting, fleet support or emergency tyre help.</p><SearchBox/></div><aside style={panel}><h2>NeedATyre API upgrade</h2><p>Secure supplier routes are now ready for live stock, pricing and tyre availability.</p><ul><li>✓ Supplier search route</li><li>✓ Stock route</li><li>✓ Pricing route</li><li>✓ Vehicle lookup route</li><li>✓ Booking route</li></ul></aside></section><section style={cards}>{["Live stock","Fully fitted prices","Mobile fitting","Garage booking","Fleet support","Emergency help"].map(x=><div key={x} style={card}>✓ {x}</div>)}</section><section style={seo}><h2>Online tyre booking built for Mcdowell Auto Services</h2><p>NeedATyre is built for tyre sales, local fitting, mobile tyre fitting, breakdown support, fleet accounts and supplier API stock/pricing integration.</p><Link href="/results" style={btn}>View live demo results</Link></section></main>}
const hero:React.CSSProperties={display:"grid",gridTemplateColumns:"1.2fr .8fr",gap:40,padding:"80px 6%",background:"linear-gradient(135deg,#fefce8,#ecfeff)"};
const badge:React.CSSProperties={background:"#bef264",borderRadius:999,padding:"9px 16px",fontWeight:900,textTransform:"uppercase",display:"inline-flex"};
const title:React.CSSProperties={fontSize:"clamp(46px,7vw,86px)",lineHeight:.94,letterSpacing:"-.07em",maxWidth:780,margin:"22px 0"};
const sub:React.CSSProperties={fontSize:19,lineHeight:1.6,color:"#475569",maxWidth:700};
const panel:React.CSSProperties={background:"#111827",color:"white",borderRadius:32,padding:32,alignSelf:"center"};
const cards:React.CSSProperties={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18,padding:"50px 6%"};
const card:React.CSSProperties={background:"white",border:"1px solid #e5e7eb",borderRadius:22,padding:22,fontWeight:900};
const seo:React.CSSProperties={padding:"70px 6%",background:"white"};
const btn:React.CSSProperties={display:"inline-flex",background:"#111827",color:"white",padding:"14px 22px",borderRadius:999,fontWeight:900,textDecoration:"none"};
