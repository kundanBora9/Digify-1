"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Calendar, Users, Wrench, Target, TrendingUp, Quote, Star } from "lucide-react";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal, MagneticButton } from "@/components/site/fx";
import { portfolioBySlug, portfolio, testimonials } from "@/lib/site-data";

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const p = portfolioBySlug[slug];
  if (!p) return notFound();
  const others = portfolio.filter(x => x.slug !== slug).slice(0, 3);
  const t = testimonials[Math.floor(Math.random() * testimonials.length)];

  return (
    <Shell>
      <PageHero eyebrow={`Case Study · ${p.category}`} title={p.title} gradientPart="· case study" subtitle={p.tagline} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: p.title }]} />

      {/* Hero banner */}
      <section className="relative py-8"><div className="container"><Reveal>
        <div className={`relative rounded-3xl overflow-hidden aspect-[16/7] bg-gradient-to-br ${p.grad}`}>
          <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center"><div className="w-48 h-48 rounded-3xl glass-strong flex items-center justify-center shadow-glow"><span className="text-6xl font-heading font-bold text-white/90">{p.title.charAt(0)}</span></div></div>
        </div>
      </Reveal></div></section>

      {/* Overview */}
      <section className="relative py-16"><div className="container grid md:grid-cols-3 gap-6">
        <Reveal><div className="glass rounded-2xl p-6"><Users className="w-6 h-6 text-brand-glow" /><div className="text-xs uppercase tracking-widest text-white/50 mt-4">Client</div><div className="text-white font-heading font-semibold mt-1">{p.client}</div></div></Reveal>
        <Reveal delay={0.05}><div className="glass rounded-2xl p-6"><Wrench className="w-6 h-6 text-brand-glow" /><div className="text-xs uppercase tracking-widest text-white/50 mt-4">Category</div><div className="text-white font-heading font-semibold mt-1">{p.category}</div></div></Reveal>
        <Reveal delay={0.1}><div className="glass rounded-2xl p-6"><Calendar className="w-6 h-6 text-brand-glow" /><div className="text-xs uppercase tracking-widest text-white/50 mt-4">Timeline</div><div className="text-white font-heading font-semibold mt-1">{p.timeline}</div></div></Reveal>
      </div></section>

      {/* Challenge & Solution */}
      <section className="relative py-16"><div className="container grid md:grid-cols-2 gap-10">
        <Reveal>
          <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">The Challenge</Badge>
          <h2 className="mt-5 text-3xl md:text-4xl font-heading font-bold"><span className="text-gradient-soft">Where they </span><span className="text-gradient">started.</span></h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">{p.challenge}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Our Solution</Badge>
          <h2 className="mt-5 text-3xl md:text-4xl font-heading font-bold"><span className="text-gradient-soft">What we </span><span className="text-gradient">delivered.</span></h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">{p.solution}</p>
        </Reveal>
      </div></section>

      {/* Tech */}
      <section className="relative py-8"><div className="container">
        <Reveal><div className="text-xs uppercase tracking-[0.3em] text-white/40">Technology Stack</div>
        <div className="mt-4 flex flex-wrap gap-3">{p.tech.map(x => (<span key={x} className="px-5 py-2.5 rounded-full glass text-white text-sm">{x}</span>))}</div></Reveal>
      </div></section>

      {/* Results / Gallery */}
      <section className="relative py-16"><div className="container">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Results</Badge>
        <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Numbers that </span><span className="text-gradient">tell the story.</span></h2></Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {p.results.map((r, i) => (<Reveal key={r.k} delay={i * 0.06}><div className="glass-strong rounded-3xl p-6 md:p-8"><TrendingUp className="w-6 h-6 text-brand-glow mb-3" /><div className="font-heading font-bold text-3xl md:text-5xl text-gradient">{r.v}</div><div className="text-white/60 text-sm mt-2">{r.k}</div></div></Reveal>))}
        </div>

        {/* mock gallery */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(n => (
            <Reveal key={n} delay={n * 0.04}>
              <div className={`aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${p.grad} relative`}>
                <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center"><div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center"><span className="font-heading font-bold text-2xl text-white/90">0{n}</span></div></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* Testimonial */}
      <section className="relative py-16"><div className="container max-w-3xl text-center">
        <Reveal>
          <Quote className="w-10 h-10 text-brand-glow mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-heading text-white leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-6 text-white font-semibold">{t.name}</div>
          <div className="text-white/50 text-sm">{t.role}</div>
          <div className="mt-3 flex gap-0.5 justify-center">{Array.from({length:5}).map((_,k) => (<Star key={k} className="w-4 h-4 fill-brand-glow text-brand-glow" />))}</div>
        </Reveal>
      </div></section>

      {/* CTA */}
      <section className="relative py-16"><div className="container"><Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 text-center">
          <Target className="w-10 h-10 text-white/90 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Want results like {p.client.split(" ")[0]}?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto text-lg">Book a strategy call — free 30 minutes, zero pressure.</p>
          <div className="mt-8"><MagneticButton><Link href="/contact"><Button size="lg" className="bg-white text-purple-700 rounded-full h-14 px-8 font-semibold">Start Your Project <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></MagneticButton></div>
        </div>
      </Reveal></div></section>

      {/* Related */}
      <section className="relative py-16 pb-24"><div className="container">
        <Reveal><h3 className="text-2xl md:text-3xl font-heading font-bold"><span className="text-gradient-soft">More </span><span className="text-gradient">work.</span></h3></Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((it, i) => (
            <Reveal key={it.slug} delay={i * 0.05}>
              <Link href={`/portfolio/${it.slug}`} className="group relative block rounded-3xl overflow-hidden aspect-[4/3]">
                <div className={`absolute inset-0 bg-gradient-to-br ${it.grad}`} />
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5"><div className="text-xs uppercase tracking-widest text-white/70">{it.category}</div><div className="text-white font-heading font-bold text-lg">{it.title}</div></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div></section>
    </Shell>
  );
}
