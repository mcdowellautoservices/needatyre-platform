import Link from "next/link";
import { Header } from "@/components/Header";
import { searchSupplierTyres } from "@/lib/suppliers";

export default async function Page(){const tyres=await searchSupplierTyres({});return <main><Header/><section style={{padding:"70px 6%",background:"linear-gradient(135deg,#fefce8,#ecfeff)"}}><span style={badge}>Live tyre results</span><h1 style={h1}>Supplier stock and pricing</h1><p style={p}>These results use supplier API routes. If API credentials are missing, mock data is shown safely.</p><div style={{display:"grid",gap:18,marginTop:35,maxWidth:1050}}>{tyres.map(t=><article key={t.id} style={row}><div><strong style={{color:"#2563eb"}}>{t.category} • {t.supplier}</strong><h2>{t.brand} {t.model}</h2><p style={{color:"#64748b"}}>{t.size} {t.loadSpeed} • Fuel {t.fuel} • Wet {t.wetGrip} • {t.noiseDb}dB • Stock {t.stock} • {t.eta}</p></div><div style={{textAlign:"right"}}><strong style={{fontSize:30}}>£{t.priceEach.toFixed(2)}</strong><br/><span>fully fitted</span><br/><Link href="/checkout" style={btn}>Select</Link></div></article>)}</div></section></main>}
const badge:React.CSSProperties={background:"#bef264",borderRadius:999,padding:"8px 14px",fontWeight:900,textTransform:"uppercase",display:"inline-flex"};
const h1:React.CSSProperties={fontSize:56,letterSpacing:"-.06em",maxWidth:850};
const p:React.CSSProperties={color:"#475569",fontSize:18,maxWidth:760,lineHeight:1.6};
const row:React.CSSProperties={background:"white",border:"1px solid #e5e7eb",borderRadius:26,padding:24,display:"grid",gridTemplateColumns:"1fr auto",gap:20,alignItems:"center"};
const btn:React.CSSProperties={display:"inline-flex",marginTop:14,background:"#111827",color:"white",padding:"12px 20px",borderRadius:999,fontWeight:900,textDecoration:"none"};
