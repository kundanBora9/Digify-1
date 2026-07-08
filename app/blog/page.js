"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, ArrowUpRight, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal } from "@/components/site/fx";
import { blogs } from "@/lib/site-data";

const categories = ["All", "SEO", "AI", "Ecommerce", "Ads", "Development", "Automation", "Branding"];

export default function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const featured = blogs.find(b => b.featured) || blogs[0];
  const filtered = useMemo(() => blogs.filter(b => (cat === "All" || b.category === cat) && (q === "" || b.title.toLowerCase().includes(q.toLowerCase()))), [q, cat]);

  return (
    <Shell>
      <PageHero eyebrow="Blog & Insights" title="Ideas that ship" gradientPart="results." subtitle="Deep-dives, playbooks and behind-the-scenes essays from the Digify4u team — covering SEO, performance marketing, AI, design and everything in between." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      {/* Featured */}
      <section className="relative py-8"><div className="container"><Reveal>
        <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden glass p-6 md:p-8 hover:bg-white/[0.06] transition">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-600">
            <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 grid-lines opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center"><featured.icon className="w-24 h-24 text-white/90" /></div>
          </div>
          <div>
            <Badge className="bg-brand-glow/20 text-brand-glow border-brand-glow/30 rounded-full">Featured · {featured.category}</Badge>
            <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-white leading-tight group-hover:text-gradient transition">{featured.title}</h2>
            <p className="mt-4 text-white/70 leading-relaxed">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {featured.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featured.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featured.read}</span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-brand-glow font-medium">Read article <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
          </div>
        </Link>
      </Reveal></div></section>

      {/* Filters */}
      <section className="relative py-8"><div className="container">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" /><Input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search articles…" className="h-14 pl-12 bg-white/5 border-white/10 text-white rounded-full" /></div>
          <div className="flex flex-wrap gap-2">{categories.map(c => (<Button key={c} onClick={()=>setCat(c)} variant={cat===c ? "default" : "ghost"} className={`rounded-full h-14 px-5 ${cat===c ? "bg-gradient-brand text-white" : "text-white/70 border border-white/10 hover:bg-white/5"}`}>{c}</Button>))}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((b, i) => (
            <Reveal key={b.slug} delay={Math.min(i,6) * 0.04}>
              <Link href={`/blog/${b.slug}`} className="group block h-full glass rounded-3xl overflow-hidden hover:bg-white/[0.06] transition">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-600">
                  <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-overlay" />
                  <div className="absolute inset-0 grid-lines opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center"><b.icon className="w-16 h-16 text-white/90" /></div>
                </div>
                <div className="p-6">
                  <Badge className="bg-white/5 border-white/10 text-white/70 text-xs rounded-full">{b.category}</Badge>
                  <h3 className="mt-3 font-heading font-bold text-xl text-white leading-tight line-clamp-2">{b.title}</h3>
                  <p className="mt-2 text-white/60 text-sm line-clamp-2">{b.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-white/50"><span>{b.date}</span><span>•</span><span>{b.read}</span></div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* Newsletter */}
      <section className="relative py-16 pb-24"><div className="container"><Reveal>
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Get our best essays in your inbox.</h2>
          <p className="mt-3 text-white/80">One high-signal email a week. No fluff, no spam. Unsubscribe anytime.</p>
          <div className="mt-6 flex gap-2 max-w-md mx-auto"><Input placeholder="your@email.com" className="h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50" /><Button className="h-12 rounded-full bg-white text-purple-700 font-semibold px-6">Subscribe</Button></div>
        </div>
      </Reveal></div></section>
    </Shell>
  );
}
