"use client";
import Link from "next/link";
import { Rocket, Target, Eye, Sparkles, ArrowRight, Award, Heart, Users2, Zap, Globe, Trophy, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal, Stat, MagneticButton } from "@/components/site/fx";

const timeline = [
  { year: "2018", title: "The Spark", desc: "Digify4u founded in Bangalore as a two-person shop obsessing over craft, code and conversion." },
  { year: "2020", title: "First 50 Brands", desc: "Delivered 50+ launches across D2C, SaaS and healthcare during a pandemic that killed most agencies." },
  { year: "2022", title: "Full-Stack Agency", desc: "Expanded into performance marketing, video production and AI automation — becoming a true full-stack partner." },
  { year: "2024", title: "Global Roster", desc: "Opened engagements in the UK, UAE, Singapore and the US. Team crossed 40 senior specialists." },
  { year: "2025", title: "The AI Era", desc: "Launched Digify4u AI Labs — our in-house R&D team building GPT-native marketing systems." },
];

const values = [
  { icon: Sparkles, title: "Craft over convention", desc: "We refuse to ship anything we would not brag about on our own portfolio." },
  { icon: Zap, title: "Speed of a startup", desc: "Weekly sprints, daily Slack, Loom-first communication. No sluggish agency vibes." },
  { icon: Target, title: "Outcomes, not deliverables", desc: "Every engagement is tied to a hard KPI — revenue, rankings, retention, or leads." },
  { icon: Heart, title: "Client-first, always", desc: "We win when you win. Long-term partnerships, not transactional projects." },
  { icon: ShieldCheck, title: "No lock-in, ever", desc: "You own every asset, account and access from day one. Zero ransom-ware relationships." },
  { icon: Globe, title: "Global craft, Indian roots", desc: "World-class quality with the cost efficiency and hustle only India can deliver." },
];

const team = [
  { name: "Rahul Verma", role: "Founder & CEO", grad: "from-fuchsia-500 to-purple-600" },
  { name: "Ananya Sinha", role: "Co-Founder & Head of Growth", grad: "from-indigo-600 to-purple-700" },
  { name: "Karthik Iyer", role: "Head of Engineering", grad: "from-purple-500 to-pink-500" },
  { name: "Meera Rao", role: "Head of Performance", grad: "from-amber-400 to-purple-500" },
  { name: "Aditya Singh", role: "Head of Design", grad: "from-rose-500 to-purple-600" },
  { name: "Nisha Menon", role: "Head of Content & Brand", grad: "from-emerald-500 to-purple-500" },
];

export default function AboutPage() {
  return (
    <Shell>
      <PageHero eyebrow="About Digify4u" title="A boutique agency" gradientPart="with global ambitions." subtitle="We are a team of 40+ senior specialists obsessed with building brands, products and growth engines that outlast trends. Founded in 2018 in Bangalore, trusted today across three continents." breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />

      {/* Story */}
      <section className="relative py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Our Story</Badge>
            <h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">We started </span><span className="text-gradient">to end mediocre marketing.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>Digify4u was born out of frustration. The founding team had worked at Fortune 500 companies and unicorn startups — and watched even the best-funded brands hire agencies that shipped forgettable work.</p>
              <p>So in 2018, we set out to build the agency we wished existed: senior-only, outcome-obsessed, brutally transparent, and unafraid to say <em>no</em> when a strategy doesn't hold up.</p>
              <p>Seven years later, we have delivered <span className="text-white font-semibold">250+ projects across 20+ industries and 9 countries</span> — and we are just getting started.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative py-16">
        <div className="container grid md:grid-cols-2 gap-6">
          <Reveal><div className="glass rounded-3xl p-10 h-full">
            <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow mb-6"><Target className="w-7 h-7 text-white" /></div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Mission</div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">To help every ambitious brand look, feel and perform like a category leader — whether they are a bootstrapped founder or a Fortune 500.</h3>
          </div></Reveal>
          <Reveal delay={0.1}><div className="glass rounded-3xl p-10 h-full">
            <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow mb-6"><Eye className="w-7 h-7 text-white" /></div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Vision</div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">To be the world's most beloved AI-native digital agency — known for craft that outlives trends and results that outlive decks.</h3>
          </div></Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 md:py-24">
        <div className="container">
          <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Our Journey</Badge></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Seven years, </span><span className="text-gradient">and counting.</span></h2></Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/50 via-fuchsia-500/40 to-transparent" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <div className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"} md:items-center gap-6`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-brand shadow-glow" />
                    <div className={`ml-12 md:ml-0 md:w-5/12 glass rounded-2xl p-6 ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                      <div className="text-brand-glow font-heading font-bold text-lg">{t.year}</div>
                      <div className="text-white font-heading font-semibold text-xl mt-1">{t.title}</div>
                      <p className="text-white/60 mt-2">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16">
        <div className="container">
          <div className="glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="250+" label="Projects delivered" />
            <Stat value="120+" label="Global clients" />
            <Stat value="40+" label="Senior specialists" />
            <Stat value="9" label="Countries served" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-16 md:py-24">
        <div className="container">
          <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">The Team</Badge></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Meet the </span><span className="text-gradient">humans behind the pixels.</span></h2></Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="group text-center">
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${m.grad} p-1 shadow-glow`}>
                    <div className="w-full h-full rounded-3xl bg-[#08061a] flex items-center justify-center">
                      <span className="font-heading font-bold text-5xl text-white/90">{m.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="mt-4 font-heading font-semibold text-white">{m.name}</div>
                  <div className="text-white/50 text-sm">{m.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-24">
        <div className="container">
          <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Core Values</Badge></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">What we </span><span className="text-gradient">stand for.</span></h2></Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full glass rounded-3xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow mb-5"><v.icon className="w-6 h-6 text-white" /></div>
                  <h4 className="font-heading font-bold text-xl text-white">{v.title}</h4>
                  <p className="text-white/60 mt-2">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-16">
        <div className="container">
          <Reveal><h3 className="font-heading font-bold text-2xl md:text-3xl text-center"><span className="text-gradient-soft">Certified &amp; </span><span className="text-gradient">trusted.</span></h3></Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Google Partner", "Meta Business Partner", "HubSpot Certified", "Shopify Partner", "AWS Partner", "ISO 27001"].map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <div className="glass rounded-2xl p-6 text-center">
                  <Award className="w-8 h-8 mx-auto text-brand-glow mb-3" />
                  <div className="text-white/80 text-sm font-medium">{c}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 text-center">
              <Trophy className="w-12 h-12 text-white/90 mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Let's build something worth talking about.</h2>
              <p className="mt-4 text-white/80 max-w-xl mx-auto text-lg">Free 30-minute strategy call. Zero pressure. Just clarity.</p>
              <div className="mt-8"><MagneticButton><Link href="/contact"><Button size="lg" className="bg-white text-purple-700 rounded-full h-14 px-8 font-semibold">Book a Call <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></MagneticButton></div>
            </div>
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}
