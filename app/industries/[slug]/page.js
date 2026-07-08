"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal, Stat, MagneticButton } from "@/components/site/fx";
import { getIndustryDetail } from "@/lib/site-data";

export default function IndustryDetail({ params }) {
  const { slug } = use(params);
  const d = getIndustryDetail(slug);
  if (!d) return notFound();

  return (
    <Shell>
      <PageHero eyebrow={`Industry · ${d.name}`} title={`${d.name}`} gradientPart="marketing that works." subtitle={d.tagline} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: d.name }]} />

      <section className="relative py-8"><div className="container"><div className="glass-strong rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">{d.metrics.map(m => (<Stat key={m.label} value={m.value} label={m.label} />))}</div></div></section>

      <section className="relative py-16"><div className="container grid md:grid-cols-2 gap-10">
        <Reveal>
          <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Challenges</Badge>
          <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Common </span><span className="text-gradient">pain points.</span></h2>
          <ul className="mt-8 space-y-4">{d.challenges.map((c, i) => (<li key={i} className="flex items-start gap-3 text-white/70"><AlertTriangle className="w-5 h-5 mt-1 text-rose-400 shrink-0" /><span>{c}</span></li>))}</ul>
        </Reveal>
        <Reveal delay={0.1}>
          <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Solutions</Badge>
          <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">How Digify4u </span><span className="text-gradient">solves them.</span></h2>
          <ul className="mt-8 space-y-4">{d.solutions.map((c, i) => (<li key={i} className="flex items-start gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 mt-1 text-brand-glow shrink-0" /><span>{c}</span></li>))}</ul>
        </Reveal>
      </div></section>

      <section className="relative py-16"><div className="container">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Services Offered</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Full-stack for </span><span className="text-gradient">{d.name}.</span></h2></Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.servicesOffered.map((x, i) => (<Reveal key={x} delay={i * 0.05}><div className="glass rounded-2xl p-6"><h4 className="font-heading font-semibold text-white">{x}</h4><p className="text-white/60 text-sm mt-2">Tailored for {d.name.toLowerCase()} — with vertical-specific playbooks and compliance-aware execution.</p></div></Reveal>))}
        </div>
      </div></section>

      <section className="relative py-16"><div className="container max-w-3xl">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">FAQ</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Frequently </span><span className="text-gradient">asked.</span></h2></Reveal>
        <Reveal delay={0.1}><Accordion type="single" collapsible className="mt-8 space-y-3">
          {d.faqs.map((f, i) => (<AccordionItem key={i} value={`i-${i}`} className="glass rounded-2xl border-white/10 px-6"><AccordionTrigger className="text-white text-left hover:no-underline font-heading text-lg">{f.q}</AccordionTrigger><AccordionContent className="text-white/70 leading-relaxed">{f.a}</AccordionContent></AccordionItem>))}
        </Accordion></Reveal>
      </div></section>

      <section className="relative py-24"><div className="container"><Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 text-center">
          <Sparkles className="w-10 h-10 text-white/90 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Ready to dominate {d.name}?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto text-lg">Book a free strategy call. We’ll audit your current setup and share three growth levers you can pull this week.</p>
          <div className="mt-8"><MagneticButton><Link href="/contact"><Button size="lg" className="bg-white text-purple-700 rounded-full h-14 px-8 font-semibold">Get a Free Audit <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></MagneticButton></div>
        </div>
      </Reveal></div></section>
    </Shell>
  );
}
