"use client";
import Link from "next/link";
import { TrendingUp, Users, DollarSign, Search, ArrowRight, ArrowUpRight, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal, Stat, MagneticButton } from "@/components/site/fx";
import { portfolio } from "@/lib/site-data";

export default function CaseStudiesPage() {
  return (
    <Shell>
      <PageHero eyebrow="Case Studies" title="Real outcomes, real numbers." gradientPart="Zero fluff." subtitle="Every case study below is backed by verifiable metrics — traffic, revenue, ROI, leads and rankings — with before/after data our clients approved." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />

      {/* Metrics band */}
      <section className="relative py-8"><div className="container"><div className="glass-strong rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <Stat value="9x" label="Avg ROI across clients" />
        <Stat value="1.02M" label="Peak organic sessions/mo" />
        <Stat value="42" label="Revenue crores closed" />
        <Stat value="48%" label="Avg CAC reduction" />
      </div></div></section>

      {/* List */}
      <section className="relative py-16"><div className="container space-y-8">
        {portfolio.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i,4) * 0.06}>
            <Link href={`/portfolio/${p.slug}`} className="group grid md:grid-cols-2 gap-6 items-center glass rounded-3xl p-6 md:p-8 hover:bg-white/[0.06] transition">
              <div className={`relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${p.grad}`}>
                <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center"><div className="w-24 h-24 rounded-2xl glass-strong flex items-center justify-center shadow-glow"><span className="font-heading font-bold text-3xl text-white/90">{p.title.charAt(0)}</span></div></div>
              </div>
              <div>
                <Badge className="bg-white/5 border-white/10 text-white/70 rounded-full">{p.category}</Badge>
                <h3 className="mt-3 font-heading font-bold text-2xl md:text-3xl text-white group-hover:text-gradient transition">{p.title}</h3>
                <p className="mt-2 text-white/60">{p.tagline}</p>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {p.results.slice(0,4).map(r => (<div key={r.k} className="rounded-xl bg-white/5 border border-white/10 p-3"><div className="text-brand-glow font-heading font-bold text-xl">{r.v}</div><div className="text-white/50 text-xs mt-0.5">{r.k}</div></div>))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-brand-glow text-sm font-medium">Read full case study <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div></section>

      {/* Analytics illustrations */}
      <section className="relative py-16"><div className="container">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Analytics-first</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Every campaign, </span><span className="text-gradient">a Looker dashboard.</span></h2></Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{icon: TrendingUp, k: "Traffic Growth", v: "+512%", desc: "Nova Fintech"},{icon: Users, k: "Qualified Leads", v: "8,400", desc: "Orbit Realty"},{icon: DollarSign, k: "Revenue Closed", v: "₹42 Cr", desc: "Orbit Realty"},{icon: Search, k: "Top-3 Keywords", v: "1,240", desc: "Nova Fintech"},{icon: LineChart, k: "ROAS", v: "7.2x", desc: "Aetheria Skincare"},{icon: TrendingUp, k: "App Downloads", v: "210K", desc: "Pulse Fitness"}].map((m, i) => (
            <Reveal key={m.k} delay={i * 0.05}>
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center justify-between"><div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center"><m.icon className="w-5 h-5 text-white" /></div><div className="text-xs text-white/50">{m.desc}</div></div>
                <div className="mt-6 font-heading font-bold text-4xl text-gradient">{m.v}</div>
                <div className="text-white/60 text-sm mt-1">{m.k}</div>
                <div className="mt-4 h-14 relative overflow-hidden rounded-lg bg-white/5">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full"><path d="M0 35 Q 20 20 40 22 T 80 8 T 100 5" stroke="url(#gg)" strokeWidth="1.5" fill="none" /><defs><linearGradient id="gg" x1="0" x2="1"><stop stopColor="#B57BFF" /><stop offset="1" stopColor="#6F2DBD" /></linearGradient></defs></svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* CTA */}
      <section className="relative py-24"><div className="container"><Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Ready to be our next case study?</h2>
          <div className="mt-8"><MagneticButton><Link href="/contact"><Button size="lg" className="bg-white text-purple-700 rounded-full h-14 px-8 font-semibold">Book Strategy Call <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></MagneticButton></div>
        </div>
      </Reveal></div></section>
    </Shell>
  );
}
