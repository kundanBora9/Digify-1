"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Rocket, Sparkles, ArrowRight, Star, Play, Check, ArrowUpRight, Quote,
  Globe, Search, Megaphone, Palette, Bot, LineChart,
  Heart, GraduationCap, Plane, Building2, UtensilsCrossed, Landmark, Store, ShoppingBag,
  Scissors, Factory, Car, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Shell from "@/components/site/shell";
import { MagneticButton, Reveal, Stat } from "@/components/site/fx";
import { testimonials, portfolio } from "@/lib/site-data";
import { getPortfolioImage } from "@/lib/media";

const Hero3D = dynamic(() => import("@/components/site/hero-3d"), { ssr: false, loading: () => null });

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Layer 1: 3D Canvas absolute background */}
      <div className="absolute inset-0 pointer-events-none">
        <Hero3D />
      </div>
      {/* Layer 2: Subtle mesh overlay to blend */}
      <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-25 pointer-events-none" />
      {/* Radial dark vignette so text pops */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,6,26,0.6)_65%,rgba(8,6,26,0.9)_100%)]" />

      <div className="container relative z-10">
        <motion.div style={{ y: y1, opacity }} className="max-w-5xl mx-auto text-center">
          <Reveal delay={0.05}>
            <Badge className="mb-6 bg-white/10 border-white/20 text-white/90 backdrop-blur px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-glow" />
              A new era of digital agencies · Now onboarding for 2025
            </Badge>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight drop-shadow-2xl">
              <span className="text-gradient-soft">We craft </span>
              <span className="text-gradient">digital experiences</span><br />
              <span className="text-gradient-soft">that </span>
              <span className="relative inline-block">
                <span className="text-gradient">move markets.</span>
                <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <motion.path d="M2 10 Q 150 -4 298 10" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.6 }} />
                  <defs><linearGradient id="g1" x1="0" x2="1"><stop stopColor="#B57BFF" /><stop offset="1" stopColor="#6F2DBD" /></linearGradient></defs>
                </svg>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Digify4u is a full-service <span className="text-white">IT & digital marketing agency</span> building brands, products and growth engines for the next generation of ambitious companies.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton><Link href="/contact">
                <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-white font-semibold rounded-full px-8 h-14 text-base shadow-glow group">
                  Start Your Project<ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link></MagneticButton>
              <MagneticButton><Link href="/portfolio">
                <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-base text-white hover:bg-white/5 border border-white/20 backdrop-blur">
                  <Play className="w-4 h-4 mr-2 fill-white" /> Watch Showreel
                </Button>
              </Link></MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="relative mt-20 max-w-4xl mx-auto">
              <div className="relative glass-strong rounded-3xl p-6 md:p-8 shadow-2xl shadow-purple-900/40">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-brand shadow-glow flex items-center justify-center animate-float"><Rocket className="w-10 h-10 text-white" /></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl glass-strong flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}><LineChart className="w-9 h-9 text-brand-glow" /></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Stat value="250+" label="Projects Delivered" />
                  <Stat value="120+" label="Happy Clients" />
                  <Stat value="9" label="Countries" />
                  <Stat value="99%" label="Retention Rate" />
                </div>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

function ClientMarquee() {
  const logos = ["Nova", "Aetheria", "Vortex", "Pulse", "Lumen", "Orbit", "Zenith", "Kairos", "Vireo", "Helix", "Sable", "Aurora"];
  const row = [...logos, ...logos];
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.02]">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-8">Trusted by high-growth brands worldwide</p>
        <div className="overflow-hidden"><div className="flex gap-16 animate-marquee whitespace-nowrap">
          {row.map((l, i) => (<div key={i} className="font-heading font-bold text-3xl text-white/40 hover:text-white transition-colors">{l}<span className="text-brand-glow">.</span></div>))}
        </div></div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Globe, title: "Web & App Development", desc: "Blazing-fast websites, PWAs, mobile apps and custom platforms built with Next.js, Flutter and React Native.", tags: ["Next.js", "React", "Flutter"], href: "/services/website-development" },
    { icon: Search, title: "SEO & Growth", desc: "Data-driven SEO that compounds. Technical, on-page and content strategy that dominates SERPs.", tags: ["Technical", "Content", "Local"], href: "/services/seo" },
    { icon: Megaphone, title: "Performance Marketing", desc: "Google, Meta, LinkedIn and YouTube ads engineered for ROAS with full-funnel tracking.", tags: ["Google Ads", "Meta", "LinkedIn"], href: "/services/performance-marketing" },
    { icon: Palette, title: "Branding & Design", desc: "Identities, guidelines and design systems that make your brand instantly recognizable.", tags: ["Identity", "UI/UX", "Systems"], href: "/services/branding" },
    { icon: Bot, title: "AI Automation", desc: "Chatbots, WhatsApp automation, CRM workflows and AI agents that scale your team.", tags: ["GPT-4o", "n8n", "CRM"], href: "/services/ai-automation" },
    { icon: Play, title: "Video & Content", desc: "Reels, ads, product shoots and drone videography that stops the scroll.", tags: ["Reels", "Ads", "Drone"], href: "/services/video-production" },
  ];
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="container relative">
        <div className="max-w-3xl mb-16">
          <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">What we do</Badge></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold leading-tight"><span className="text-gradient-soft">A full-stack agency</span><br /><span className="text-gradient">for the AI era.</span></h2></Reveal>
          <Reveal delay={0.2}><p className="mt-5 text-white/60 text-lg max-w-2xl">Six connected practices, one obsessed team. From identity to infrastructure, we handle every layer of your digital presence.</p></Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <Link href={it.href} data-cursor="hover" className="group relative block h-full rounded-3xl p-8 glass hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-600/20 via-transparent to-fuchsia-500/10" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow mb-6 group-hover:scale-110 transition-transform"><it.icon className="w-7 h-7 text-white" /></div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">{it.title}</h3>
                  <p className="text-white/60 leading-relaxed">{it.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{it.tags.map((t) => (<span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{t}</span>))}</div>
                  <div className="mt-6 flex items-center gap-2 text-brand-glow font-medium text-sm">Learn more <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center"><Link href="/services"><Button size="lg" className="bg-gradient-brand rounded-full px-8 h-12 font-semibold shadow-glow">Explore All Services <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></div>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    { icon: Heart, name: "Healthcare", slug: "healthcare", desc: "HIPAA-ready platforms" },
    { icon: GraduationCap, name: "Education", slug: "education", desc: "LMS & EdTech" },
    { icon: Plane, name: "Travel", slug: "travel", desc: "Booking & tourism" },
    { icon: Building2, name: "Real Estate", slug: "real-estate", desc: "Listings & CRM" },
    { icon: UtensilsCrossed, name: "Restaurants", slug: "restaurants", desc: "Menus & delivery" },
    { icon: Landmark, name: "Finance", slug: "finance", desc: "Fintech & compliance" },
    { icon: Store, name: "Retail", slug: "retail", desc: "Omnichannel commerce" },
    { icon: ShoppingBag, name: "Ecommerce", slug: "ecommerce", desc: "D2C & marketplaces" },
    { icon: Scissors, name: "Fashion & Beauty", slug: "fashion", desc: "Luxury & lifestyle" },
    { icon: Factory, name: "Manufacturing", slug: "manufacturing", desc: "B2B lead engines" },
    { icon: Car, name: "Automobile", slug: "automobile", desc: "Dealer & OEM" },
    { icon: Rocket, name: "Startups", slug: "startups", desc: "MVP to scale" },
  ];
  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Industries</Badge></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold leading-tight"><span className="text-gradient-soft">We speak </span><span className="text-gradient">your industry.</span></h2></Reveal>
          </div>
          <Reveal delay={0.2}><p className="text-white/60 max-w-md">20+ industries, 250+ engagements. Deep vertical playbooks that shortcut you to what works.</p></Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.03}>
              <Link href={`/industries/${it.slug}`} data-cursor="hover" className="group relative block rounded-2xl glass p-6 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/25 to-transparent" />
                <div className="relative flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/40 to-indigo-500/30 border border-white/10 flex items-center justify-center group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all mb-4"><it.icon className="w-6 h-6 text-white" /></div>
                  <h4 className="font-heading font-semibold text-white text-lg">{it.name}</h4>
                  <p className="text-white/50 text-sm mt-1">{it.desc}</p>
                  <ArrowUpRight className="w-4 h-4 text-white/40 mt-4 transition-all group-hover:text-brand-glow group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center"><Link href="/industries"><Button size="lg" variant="ghost" className="rounded-full px-8 h-12 text-white border border-white/20 hover:bg-white/5">See all Industries <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Discover", desc: "Deep-dive audits, competitor mapping and stakeholder interviews to align on a north star." },
    { n: "02", title: "Design", desc: "Strategy, IA, wireframes and pixel-perfect design systems shaped around your users." },
    { n: "03", title: "Develop", desc: "Modular, scalable engineering with Next.js, headless CMS and cloud-native infrastructure." },
    { n: "04", title: "Deploy", desc: "Launch playbooks, QA, SEO safeguards and instant analytics dashboards from day one." },
    { n: "05", title: "Grow", desc: "Continuous experimentation across SEO, ads, content and AI to compound results monthly." },
  ];
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="container relative">
        <div className="text-center mb-16">
          <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Our process</Badge></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold"><span className="text-gradient-soft">Built for </span><span className="text-gradient">outcomes.</span></h2></Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl glass p-6 hover:bg-white/[0.06] transition-all group">
                <div className="text-6xl font-heading font-bold text-gradient opacity-30 group-hover:opacity-100 transition">{s.n}</div>
                <h4 className="mt-2 font-heading font-bold text-xl text-white">{s.title}</h4>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  const items = portfolio.slice(0, 4);
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-14">
          <div>
            <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Selected work</Badge></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold"><span className="text-gradient-soft">Recent </span><span className="text-gradient">obsessions.</span></h2></Reveal>
          </div>
          <Reveal delay={0.2}><Link href="/portfolio" className="hidden md:inline-flex items-center gap-2 text-white/70 hover:text-white transition text-sm">View all projects <ArrowUpRight className="w-4 h-4" /></Link></Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => {
            const img = getPortfolioImage(it.slug).hero;
            return (
              <Reveal key={it.title} delay={i * 0.08}>
                <Link href={`/portfolio/${it.slug}`} data-cursor="hover" className="group relative block rounded-3xl overflow-hidden aspect-[4/3]">
                  <img src={img} alt={it.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className={`absolute inset-0 opacity-30 mix-blend-overlay bg-gradient-to-br ${it.grad}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/70 mb-2">{it.category}</div>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">{it.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"><ArrowUpRight className="w-5 h-5 text-white" /></div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Loved by founders</Badge></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold"><span className="text-gradient-soft">Words from </span><span className="text-gradient">our clients.</span></h2></Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full glass rounded-3xl p-8 hover:bg-white/[0.06] transition-all">
                <Quote className="w-8 h-8 text-brand-glow mb-4" />
                <p className="text-white/80 leading-relaxed text-lg">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between">
                  <div><div className="text-white font-semibold">{t.name}</div><div className="text-white/50 text-sm">{t.role}</div></div>
                  <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, k) => (<Star key={k} className="w-4 h-4 fill-brand-glow text-brand-glow" />))}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 shadow-2xl shadow-purple-900/50">
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-black/30 blur-3xl" />
            <div className="absolute inset-0 grid-lines opacity-20" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Badge className="bg-white/15 border-white/20 text-white rounded-full px-4">Let's build together</Badge>
                <h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold text-white leading-tight">Ready to become the<br />brand everyone <em className="not-italic bg-white/20 px-3 rounded-xl">copies</em>?</h2>
                <p className="mt-5 text-white/80 text-lg max-w-lg">Book a free 30-minute strategy call. We'll audit your funnel and share three growth levers you can pull this week.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton><Link href="/contact"><Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 rounded-full h-14 px-8 font-semibold">Book Strategy Call <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></MagneticButton>
                  <MagneticButton><a href="tel:+919999999999"><Button size="lg" variant="ghost" className="rounded-full h-14 px-8 text-white border border-white/30 hover:bg-white/10"><Phone className="w-4 h-4 mr-2" /> +91 98XXX XXXXX</Button></a></MagneticButton>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["No lock-in contracts", "In-house senior team", "Full-funnel tracking", "Weekly reporting", "AI-powered playbooks", "24/7 support"].map((f) => (
                  <div key={f} className="glass-strong rounded-2xl p-5 border border-white/20"><Check className="w-5 h-5 text-white mb-2" /><div className="text-white font-medium">{f}</div></div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Shell>
      <Hero />
      <ClientMarquee />
      <Services />
      <Industries />
      <Process />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </Shell>
  );
}
