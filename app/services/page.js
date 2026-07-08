"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal } from "@/components/site/fx";
import { services, serviceMegaColumns } from "@/lib/site-data";

const categories = ["All", "Development", "Marketing", "Creative", "Growth"];

export default function ServicesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => services.filter(s => (cat === "All" || s.category === cat) && (q === "" || s.name.toLowerCase().includes(q.toLowerCase()) || s.desc.toLowerCase().includes(q.toLowerCase()))), [q, cat]);

  return (
    <Shell>
      <PageHero eyebrow="Services" title="Every service you need" gradientPart="under one roof." subtitle="50+ senior-led services across Development, Marketing, Creative and AI-driven growth. Fixed-scope, retainer or performance-based — pick your model." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      {/* Column overview */}
      <section className="relative pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceMegaColumns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.05}>
              <div className="glass rounded-3xl p-6">
                <div className={`text-xs font-heading font-bold uppercase tracking-widest mb-4 bg-gradient-to-r ${col.color} bg-clip-text text-transparent`}>{col.title}</div>
                <ul className="space-y-2">{col.items.map(it => (<li key={it.slug}><Link href={`/services/${it.slug}`} className="text-white/80 hover:text-white transition text-sm block py-1">{it.name}</Link></li>))}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="relative py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" /><Input value={q} onChange={e => setQ(e.target.value)} placeholder="Search services…" className="h-14 pl-12 bg-white/5 border-white/10 text-white rounded-full" /></div>
            <div className="flex flex-wrap gap-2">{categories.map(c => (<Button key={c} onClick={() => setCat(c)} variant={cat === c ? "default" : "ghost"} className={`rounded-full h-14 px-5 ${cat === c ? "bg-gradient-brand text-white" : "text-white/70 border border-white/10 hover:bg-white/5"}`}>{c}</Button>))}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i, 8) * 0.03}>
                <Link href={`/services/${s.slug}`} data-cursor="hover" className="group relative block h-full rounded-2xl p-6 glass hover:bg-white/[0.08] transition overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/25 to-transparent" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3"><Badge className="bg-white/5 border-white/10 text-white/70 text-xs rounded-full">{s.category}</Badge><Badge className="bg-white/5 border-white/10 text-white/70 text-xs rounded-full">{s.tag}</Badge></div>
                    <h3 className="font-heading font-bold text-xl text-white leading-tight">{s.name}</h3>
                    <p className="text-white/60 text-sm mt-2 line-clamp-3">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-brand-glow text-sm font-medium">Explore <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-white/50 mt-10">No services match your search.</p>}
        </div>
      </section>
    </Shell>
  );
}
