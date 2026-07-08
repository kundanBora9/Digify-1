"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Check, Sparkles, CheckCircle2 } from "lucide-react";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal, Stat, MagneticButton } from "@/components/site/fx";
import { getServiceDetail } from "@/lib/site-data";

export default function ServiceDetail({ params }) {
  const { slug } = use(params);
  const s = getServiceDetail(slug);
  if (!s) return notFound();

  return (
    <Shell>
      <PageHero eyebrow={s.hero.eyebrow} title={s.hero.title} gradientPart={s.hero.gradient} subtitle={s.hero.subtitle} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.name }]} />

      {/* Metrics band */}
      <section className="relative py-8"><div className="container"><div className="glass-strong rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">{s.metrics.map(m => (<Stat key={m.label} value={m.value} label={m.label} />))}</div></div></section>

      {/* Description */}
      <section className="relative py-16"><div className="container grid md:grid-cols-2 gap-10 items-start">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">What we deliver</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold leading-tight"><span className="text-gradient-soft">{s.name}</span> <span className="text-gradient">done right.</span></h2></Reveal>
        <Reveal delay={0.1}><div className="space-y-4 text-white/70 text-lg leading-relaxed">
          <p>{s.desc}</p>
          <p>Every {s.name.toLowerCase()} engagement at Digify4u is led by senior specialists with 10+ years of experience and full-funnel context. We do not hand you off to junior account managers or offshore freelancers.</p>
          <p>You get an in-house-quality team without the in-house-team overhead — with weekly sprints, Slack access and live dashboards from day one.</p>
        </div></Reveal>
      </div></section>

      {/* Benefits */}
      <section className="relative py-16"><div className="container">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Why Digify4u</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Benefits that </span><span className="text-gradient">move the needle.</span></h2></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="h-full glass rounded-3xl p-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center mb-4"><Check className="w-5 h-5 text-white" /></div>
                <h4 className="font-heading font-bold text-xl text-white">{b.title}</h4>
                <p className="text-white/60 mt-2">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* Process */}
      <section className="relative py-16"><div className="container">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Our Process</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">A 5-step </span><span className="text-gradient">system.</span></h2></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {s.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="h-full glass rounded-2xl p-6">
                <div className="text-5xl font-heading font-bold text-gradient opacity-40">{p.step}</div>
                <h4 className="mt-2 font-heading font-bold text-lg text-white">{p.title}</h4>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div></section>

      {/* Tech */}
      <section className="relative py-16"><div className="container">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Technologies</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Best-in-class </span><span className="text-gradient">stack.</span></h2></Reveal>
        <div className="mt-8 flex flex-wrap gap-3">{s.tech.map(t => (<span key={t} className="px-5 py-3 rounded-full glass text-white text-sm font-medium hover:bg-white/10 transition">{t}</span>))}</div>
      </div></section>

      {/* Pricing CTA */}
      <section className="relative py-16"><div className="container"><Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Sparkles className="w-8 h-8 text-white/90 mb-3" />
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">Get a custom quote for {s.name}</h3>
              <p className="mt-4 text-white/80 text-lg">Every engagement is scoped uniquely. Book a call and we’ll send a proposal in 48 hours — with pricing, timeline and forecasted outcomes.</p>
            </div>
            <div className="space-y-3">
              {["Free 30-min strategy call", "Proposal in 48 hours", "No obligation, no lock-in", "Fixed-scope or retainer models"].map(x => (<div key={x} className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5" /> {x}</div>))}
              <div className="pt-4"><MagneticButton><Link href="/contact"><Button size="lg" className="bg-white text-purple-700 rounded-full h-14 px-8 font-semibold">Get Custom Quote <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></MagneticButton></div>
            </div>
          </div>
        </div>
      </Reveal></div></section>

      {/* FAQ */}
      <section className="relative py-16"><div className="container max-w-3xl">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">FAQ</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Questions, </span><span className="text-gradient">answered.</span></h2></Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {s.faqs.map((f, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="glass rounded-2xl border-white/10 px-6">
                <AccordionTrigger className="text-white text-left hover:no-underline font-heading text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div></section>

      {/* Related */}
      <section className="relative py-16 pb-24"><div className="container">
        <Reveal><h3 className="text-2xl md:text-3xl font-heading font-bold"><span className="text-gradient-soft">Related </span><span className="text-gradient">services.</span></h3></Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.05}>
              <Link href={`/services/${r.slug}`} className="group block h-full glass rounded-2xl p-6 hover:bg-white/[0.08] transition">
                <div className="text-xs uppercase tracking-widest text-white/50">{r.category}</div>
                <h4 className="mt-2 font-heading font-semibold text-white text-lg">{r.name}</h4>
                <div className="mt-3 flex items-center gap-1 text-brand-glow text-sm">Learn more <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div></section>
    </Shell>
  );
}
