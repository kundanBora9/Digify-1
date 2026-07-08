"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, ArrowUpRight, Check, Sparkles, CheckCircle2, Clock, Wallet, Layers, Shield, Zap,
  Target, TrendingUp, Users, Trophy, Package, Wrench, Rocket, Star
} from "lucide-react";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal, Stat, MagneticButton } from "@/components/site/fx";
import { getServiceDetail, portfolioBySlug } from "@/lib/site-data";

export default function ServiceDetail({ params }) {
  const { slug } = use(params);
  const s = getServiceDetail(slug);
  if (!s) return notFound();
  const kase = s.miniCase && portfolioBySlug[s.miniCase.slug];

  return (
    <Shell>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        gradientPart={s.hero.gradient}
        subtitle={s.hero.subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.name }]}
      />

      {/* Hero right-side quick-info bar */}
      <section className="relative py-8">
        <div className="container">
          <Reveal>
            <div className="glass-strong rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0"><Wallet className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Starts at</div>
                  <div className="text-white font-heading font-bold text-lg mt-0.5">{s.pricing.starting}</div>
                  <div className="text-white/50 text-xs">{s.pricing.model}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Timeline</div>
                  <div className="text-white font-heading font-bold text-lg mt-0.5">{s.pricing.timeline}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0"><Package className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Deliverables</div>
                  <div className="text-white font-heading font-bold text-lg mt-0.5">{s.deliverables.length}+ items</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0"><Wrench className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Tools used</div>
                  <div className="text-white font-heading font-bold text-lg mt-0.5">{s.toolCategories.reduce((a, c) => a + c.tools.length, 0)}+ tools</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Long Description + Sticky CTA */}
      <section className="relative py-16">
        <div className="container grid lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <Reveal>
              <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">What we deliver</Badge>
              <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold leading-tight">
                <span className="text-gradient-soft">{s.name}</span> <span className="text-gradient">done right.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-white/70 text-lg leading-relaxed">
                {s.longDesc.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </Reveal>
          </div>

          {/* Sticky CTA card */}
          <Reveal delay={0.1}>
            <aside className="lg:sticky lg:top-32 h-fit">
              <div className="relative rounded-3xl p-6 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 overflow-hidden shadow-glow">
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/20 blur-3xl" />
                <div className="relative">
                  <Sparkles className="w-6 h-6 text-white mb-3" />
                  <div className="text-xs uppercase tracking-[0.25em] text-white/70">Ready to start?</div>
                  <div className="mt-2 font-heading font-bold text-2xl text-white">Get a custom {s.name} quote</div>
                  <div className="mt-3 text-white/80 text-sm">Proposal in 48 hours. Free 30-minute strategy call. Zero obligation.</div>
                  <Link href="/contact"><Button className="mt-5 w-full bg-white text-purple-700 hover:bg-white/90 rounded-full h-12 font-semibold">Book Strategy Call <ArrowRight className="w-4 h-4 ml-1.5" /></Button></Link>
                  <div className="mt-5 space-y-2 text-white/80 text-sm">
                    {["Senior-only team", "No lock-in contracts", "Own all your assets", "Weekly reporting"].map(x => (
                      <div key={x} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> {x}</div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative py-16">
        <div className="container">
          <Reveal>
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">What's included</Badge>
            <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold">
              <span className="text-gradient-soft">Every </span><span className="text-gradient">{s.name}</span> <span className="text-gradient-soft">engagement includes.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {s.deliverables.map((d, i) => (
              <Reveal key={d} delay={Math.min(i, 6) * 0.03}>
                <div className="flex items-start gap-3 rounded-2xl glass p-4 hover:bg-white/[0.06] transition">
                  <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shrink-0"><Check className="w-4 h-4 text-white" /></div>
                  <div className="text-white/85 text-sm leading-relaxed pt-1">{d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16">
        <div className="container">
          <Reveal>
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Who it's for</Badge>
            <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold">
              <span className="text-gradient-soft">Perfect if </span><span className="text-gradient">you are…</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl glass p-6 hover:bg-white/[0.08] transition">
                  <div className="w-10 h-10 rounded-xl bg-gradient-brand/20 border border-brand-glow/30 flex items-center justify-center mb-4">
                    <Target className="w-5 h-5 text-brand-glow" />
                  </div>
                  <div className="text-white font-heading font-semibold text-base leading-snug">{u.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies — the star */}
      <section className="relative py-16">
        <div className="container">
          <Reveal>
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Tools & Technologies</Badge>
            <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold">
              <span className="text-gradient-soft">The </span><span className="text-gradient">best-in-class stack.</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl">We only use industry-leading, battle-tested tools. Below is the complete stack we deploy for {s.name.toLowerCase()} — organised by function.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {s.toolCategories.map((cat, i) => (
              <Reveal key={cat.name} delay={Math.min(i, 6) * 0.05}>
                <div className="h-full glass rounded-3xl p-6 md:p-7 hover:bg-white/[0.06] transition">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0"><Layers className="w-5 h-5 text-white" /></div>
                    <h3 className="font-heading font-bold text-lg text-white">{cat.name}</h3>
                    <div className="ml-auto text-xs text-white/40">{cat.tools.length}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map(t => (
                      <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 hover:border-brand-glow/40 transition cursor-default" data-cursor="hover">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-16">
        <div className="container">
          <Reveal>
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Why Digify4u</Badge>
            <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold">
              <span className="text-gradient-soft">Benefits that </span><span className="text-gradient">move the needle.</span>
            </h2>
          </Reveal>
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
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16">
        <div className="container">
          <Reveal>
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Our Process</Badge>
            <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold">
              <span className="text-gradient-soft">A 5-step </span><span className="text-gradient">system.</span>
            </h2>
          </Reveal>
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
        </div>
      </section>

      {/* Why Us differentiators */}
      <section className="relative py-16">
        <div className="container">
          <Reveal>
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">The Digify4u difference</Badge>
            <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold">
              <span className="text-gradient-soft">Why founders </span><span className="text-gradient">choose us.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {s.whyUs.map((w, i) => {
              const Icons = [Shield, Sparkles, Zap, Trophy];
              const Ic = Icons[i % Icons.length];
              return (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div className="h-full glass rounded-3xl p-8 flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-glow"><Ic className="w-6 h-6 text-white" /></div>
                    <div>
                      <h4 className="font-heading font-bold text-xl text-white">{w.title}</h4>
                      <p className="text-white/60 mt-2">{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini Case Study */}
      {kase && (
        <section className="relative py-16">
          <div className="container">
            <Reveal>
              <div className={`relative overflow-hidden rounded-3xl grid md:grid-cols-2 gap-0 bg-gradient-to-br ${kase.grad}`}>
                <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
                <div className="relative p-8 md:p-12">
                  <Badge className="bg-white/20 border-white/30 text-white rounded-full px-4 backdrop-blur">Case Study</Badge>
                  <div className="mt-3 text-white/80 text-sm">{kase.client}</div>
                  <h3 className="mt-3 font-heading font-bold text-2xl md:text-4xl text-white leading-tight">{s.miniCase.headline}</h3>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {s.miniCase.results.map(([v, k]) => (
                      <div key={k} className="glass-strong rounded-2xl p-4 border border-white/20">
                        <div className="font-heading font-bold text-2xl md:text-3xl text-white">{v}</div>
                        <div className="text-white/70 text-xs mt-1">{k}</div>
                      </div>
                    ))}
                  </div>
                  <Link href={`/portfolio/${kase.slug}`}><Button className="mt-8 bg-white text-purple-700 hover:bg-white/90 rounded-full h-12 px-6 font-semibold">Read full case study <ArrowUpRight className="w-4 h-4 ml-1.5" /></Button></Link>
                </div>
                <div className="relative min-h-[280px] flex items-center justify-center p-10">
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl glass-strong flex items-center justify-center shadow-glow">
                    <span className="text-6xl md:text-8xl font-heading font-bold text-white/90">{kase.client.charAt(0)}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Metrics band */}
      <section className="relative py-8">
        <div className="container">
          <div className="glass-strong rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {s.metrics.map((m) => (<Stat key={m.label} value={m.value} label={m.label} />))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="relative py-16">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800">
              <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Sparkles className="w-8 h-8 text-white/90 mb-3" />
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">Get a custom quote for {s.name}</h3>
                  <p className="mt-4 text-white/80 text-lg">Every engagement is scoped uniquely. Book a call and we'll send a proposal in 48 hours — with pricing, timeline and forecasted outcomes.</p>
                </div>
                <div className="space-y-3">
                  {["Free 30-min strategy call", "Proposal in 48 hours", "No obligation, no lock-in", "Fixed-scope or retainer models"].map(x => (<div key={x} className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5" /> {x}</div>))}
                  <div className="pt-4"><MagneticButton><Link href="/contact"><Button size="lg" className="bg-white text-purple-700 rounded-full h-14 px-8 font-semibold">Get Custom Quote <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></MagneticButton></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16">
        <div className="container max-w-3xl">
          <Reveal>
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">FAQ</Badge>
            <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold">
              <span className="text-gradient-soft">Questions, </span><span className="text-gradient">answered.</span>
            </h2>
          </Reveal>
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
        </div>
      </section>

      {/* Related */}
      <section className="relative py-16 pb-24">
        <div className="container">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              <span className="text-gradient-soft">Related </span><span className="text-gradient">services.</span>
            </h3>
          </Reveal>
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
        </div>
      </section>
    </Shell>
  );
}
