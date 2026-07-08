"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView } from "framer-motion";
import {
  Rocket, Sparkles, Layers, Code2, Search, Megaphone, Palette, Bot, Smartphone,
  ShoppingBag, Globe, PenTool, Mail, Users2, Zap, LineChart,
  Heart, GraduationCap, Plane, Building2, UtensilsCrossed, Landmark, Factory, Car, Store,
  Scissors, Scale, HandHeart, ArrowRight, ChevronRight,
  Menu, X, Star, Play, Check, Instagram, Facebook, Linkedin, Twitter, Youtube,
  Phone, MapPin, ArrowUpRight, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast, Toaster } from "sonner";

/* ------------------------ Cursor + Progress ------------------------ */
function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0, tx = 0, ty = 0;
    const move = (e) => { dx = e.clientX; dy = e.clientY; };
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      tx += (dx - tx) * 0.35;
      ty += (dy - ty) * 0.35;
      if (dotRef.current) dotRef.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    const over = (e) => {
      const t = e.target;
      if (t.closest && t.closest("a, button, [data-cursor='hover']")) ringRef.current?.classList.add("hover");
      else ringRef.current?.classList.remove("hover");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    loop();
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);
  return (<>
    <div ref={ringRef} className="cursor-ring" />
    <div ref={dotRef} className="cursor-dot" />
  </>);
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return <motion.div className="scroll-progress" style={{ scaleX, width: "100%" }} />;
}

/* ------------------------ Logo ------------------------ */
function Logo({ small = false }) {
  return (
    <a href="#home" className="flex items-center gap-2 group">
      <div className={`relative ${small ? "w-8 h-8" : "w-10 h-10"} rounded-xl bg-gradient-brand shadow-glow flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_60%)]" />
        <span className="relative font-heading font-bold text-white text-lg">D</span>
      </div>
      <div className="leading-tight">
        <div className={`font-heading font-bold ${small ? "text-base" : "text-xl"} text-white tracking-tight`}>
          Digify<span className="text-gradient">4u</span>
        </div>
        {!small && <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">IT · Digital Marketing</div>}
      </div>
    </a>
  );
}

/* ------------------------ Mega Menu data ------------------------ */
const serviceColumns = [
  {
    title: "Development",
    color: "from-fuchsia-500 to-purple-600",
    items: [
      { icon: Globe, name: "Website Development", desc: "Static · Dynamic · Corporate" },
      { icon: ShoppingBag, name: "Ecommerce Development", desc: "Shopify · WooCommerce · Custom" },
      { icon: Layers, name: "CMS Development", desc: "WordPress · Webflow · Headless" },
      { icon: Smartphone, name: "App Development", desc: "iOS · Android · Flutter" },
      { icon: Code2, name: "Custom Web Applications", desc: "SaaS · Portals · Dashboards" },
    ],
  },
  {
    title: "Marketing",
    color: "from-violet-500 to-indigo-600",
    items: [
      { icon: Search, name: "SEO", desc: "Local · Technical · Enterprise" },
      { icon: Megaphone, name: "Performance Marketing", desc: "Google · Meta · LinkedIn" },
      { icon: Users2, name: "Social Media Management", desc: "Content · Community · Growth" },
      { icon: Mail, name: "Email Marketing", desc: "Automation · Newsletters" },
      { icon: PenTool, name: "Content Marketing", desc: "Blogs · Copy · Strategy" },
    ],
  },
  {
    title: "Creative",
    color: "from-pink-500 to-rose-500",
    items: [
      { icon: Sparkles, name: "Branding", desc: "Identity · Guidelines · Voice" },
      { icon: Palette, name: "Graphic Design", desc: "Print · Digital · Campaigns" },
      { icon: Layers, name: "UI/UX Design", desc: "Product · Web · Mobile" },
      { icon: Play, name: "Video Production", desc: "Ads · Reels · Corporate" },
      { icon: PenTool, name: "Content Creation", desc: "Reels · Shoots · Copy" },
    ],
  },
  {
    title: "Growth & AI",
    color: "from-amber-400 to-purple-500",
    items: [
      { icon: Star, name: "Influencer Marketing", desc: "Micro · Macro · Celebrity" },
      { icon: Bot, name: "AI Automation", desc: "Chatbots · Workflows" },
      { icon: Users2, name: "CRM Solutions", desc: "HubSpot · Zoho · Custom" },
      { icon: Zap, name: "WhatsApp Automation", desc: "Broadcast · Bots · CRM" },
      { icon: LineChart, name: "Analytics & Reporting", desc: "GA4 · Looker · Dashboards" },
    ],
  },
];

const industriesList = [
  { icon: Heart, name: "Healthcare" }, { icon: GraduationCap, name: "Education" },
  { icon: Plane, name: "Travel" }, { icon: Building2, name: "Real Estate" },
  { icon: Building2, name: "Hospitality" }, { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Landmark, name: "Finance" }, { icon: Store, name: "Retail" },
  { icon: ShoppingBag, name: "Ecommerce" }, { icon: Scissors, name: "Fashion" },
  { icon: Factory, name: "Manufacturing" }, { icon: Car, name: "Automobile" },
  { icon: Building2, name: "Construction" }, { icon: Scale, name: "Law Firms" },
  { icon: HandHeart, name: "NGOs" }, { icon: Rocket, name: "Startups" },
];

/* ------------------------ Magnetic ------------------------ */
function MagneticButton({ children, strength = 0.35 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [strength]);
  return <div ref={ref} className="inline-block transition-transform duration-200 will-change-transform">{children}</div>;
}

/* ------------------------ Reveal ------------------------ */
function Reveal({ children, delay = 0, y = 40, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------ Counter ------------------------ */
function Counter({ from = 0, to, suffix = "", duration = 1.6 }) {
  const [val, setVal] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start; const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, from, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Stat({ value, label, mini = false }) {
  const parsed = value.match(/([\d.]+)(.*)/);
  const num = parsed ? parseFloat(parsed[1]) : null;
  const suffix = parsed ? parsed[2] : "";
  return (
    <div>
      <div className={`font-heading font-bold ${mini ? "text-2xl" : "text-4xl md:text-5xl"} text-white`}>
        {num !== null ? <Counter to={num} suffix={suffix} /> : value}
      </div>
      <div className={`${mini ? "text-xs" : "text-sm"} text-white/60 mt-1`}>{label}</div>
    </div>
  );
}

/* ------------------------ Navbar ------------------------ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = "relative text-sm font-medium text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
        onMouseLeave={() => setActive(null)}
      >
        <div className="container">
          <div className={`flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong shadow-2xl shadow-purple-900/20" : "bg-transparent"}`}>
            <Logo small={scrolled} />

            <nav className="hidden lg:flex items-center gap-1">
              <a href="#home" className={navItem} onMouseEnter={() => setActive(null)}>Home</a>
              <button className={`${navItem} flex items-center gap-1`} onMouseEnter={() => setActive("services")}>
                Services <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
              <button className={`${navItem} flex items-center gap-1`} onMouseEnter={() => setActive("industries")}>
                Industries <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
              <a href="#portfolio" className={navItem} onMouseEnter={() => setActive(null)}>Portfolio</a>
              <a href="#blog" className={navItem} onMouseEnter={() => setActive(null)}>Blog</a>
              <a href="#contact" className={navItem} onMouseEnter={() => setActive(null)}>Contact</a>
            </nav>

            <div className="flex items-center gap-2">
              <MagneticButton>
                <Button className="hidden md:inline-flex bg-gradient-brand hover:opacity-90 text-white font-semibold rounded-full px-5 shadow-glow">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </MagneticButton>
              <button className="lg:hidden p-2 text-white" onClick={() => setMobile(true)}><Menu /></button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="container mt-3"
              onMouseEnter={() => setActive(active)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="glass-strong rounded-3xl p-8 shadow-2xl shadow-purple-900/40 border-white/10">
                {active === "services" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {serviceColumns.map((col) => (
                      <div key={col.title}>
                        <div className={`text-xs font-heading font-bold uppercase tracking-widest mb-4 bg-gradient-to-r ${col.color} bg-clip-text text-transparent`}>
                          {col.title}
                        </div>
                        <ul className="space-y-1">
                          {col.items.map((it) => (
                            <li key={it.name}>
                              <a href="#services" className="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-white/5 transition">
                                <div className={`shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${col.color} flex items-center justify-center opacity-90 group-hover:opacity-100`}>
                                  <it.icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-white leading-tight">{it.name}</div>
                                  <div className="text-xs text-white/50 leading-snug">{it.desc}</div>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-700">
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
                      <Sparkles className="w-6 h-6 text-white/90 mb-3" />
                      <div className="text-white font-heading font-bold text-lg leading-snug">Need a Custom Solution?</div>
                      <div className="text-white/80 text-sm mt-1">Let's build something your competitors can't copy.</div>
                      <Button size="sm" className="mt-4 bg-white text-purple-700 hover:bg-white/90 rounded-full font-semibold">
                        Let's Talk <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {active === "industries" && (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {industriesList.map((it) => (
                        <a key={it.name} href="#industries" className="group flex items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition border border-transparent hover:border-white/10">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/40 to-indigo-500/30 border border-white/10 flex items-center justify-center group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all">
                            <it.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-sm font-medium text-white">{it.name}</div>
                        </a>
                      ))}
                    </div>
                    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-600">
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
                      <div className="text-xs uppercase tracking-widest text-white/70 font-heading">Industries We Help Grow</div>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <Stat value="120+" label="Brands" mini />
                        <Stat value="20+" label="Industries" mini />
                        <Stat value="9x" label="Avg ROI" mini />
                        <Stat value="4.9" label="Rating" mini />
                      </div>
                      <Button size="sm" className="mt-5 bg-white text-purple-700 hover:bg-white/90 rounded-full font-semibold">
                        Explore Industries <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween" }} className="fixed inset-0 z-[60] glass-strong lg:hidden">
            <div className="p-6 flex items-center justify-between">
              <Logo />
              <button onClick={() => setMobile(false)} className="p-2 text-white"><X /></button>
            </div>
            <div className="p-6 space-y-2">
              {["Home", "Services", "Industries", "Portfolio", "Blog", "Contact"].map((x) => (
                <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMobile(false)} className="block py-3 text-lg text-white/90 border-b border-white/10">{x}</a>
              ))}
              <Button className="w-full mt-6 bg-gradient-brand rounded-full">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------ Hero ------------------------ */
function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/30 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-fuchsia-500/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/25 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />

      <div className="container relative">
        <motion.div style={{ y: y1, opacity }} className="max-w-5xl mx-auto text-center">
          <Reveal delay={0.05}>
            <Badge className="mb-6 bg-white/5 border-white/10 text-white/80 backdrop-blur px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-glow" />
              A new era of digital agencies · Now onboarding for 2025
            </Badge>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              <span className="text-gradient-soft">We craft </span>
              <span className="text-gradient">digital experiences</span>
              <br />
              <span className="text-gradient-soft">that </span>
              <span className="relative inline-block">
                <span className="text-gradient">move markets.</span>
                <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <motion.path
                    d="M2 10 Q 150 -4 298 10"
                    stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.6 }}
                  />
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1"><stop stopColor="#B57BFF" /><stop offset="1" stopColor="#6F2DBD" /></linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Digify4u is a full-service <span className="text-white">IT & digital marketing agency</span> building brands, products and growth engines for the next generation of ambitious companies.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton>
                <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-white font-semibold rounded-full px-8 h-14 text-base shadow-glow group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-base text-white hover:bg-white/5 border border-white/10">
                  <Play className="w-4 h-4 mr-2 fill-white" /> Watch Showreel
                </Button>
              </MagneticButton>
            </div>
          </Reveal>

          <motion.div style={{ y: y2 }} className="relative mt-24 max-w-4xl mx-auto">
            <Reveal delay={0.65}>
              <div className="relative glass-strong rounded-3xl p-6 md:p-8 shadow-2xl shadow-purple-900/40">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-brand shadow-glow flex items-center justify-center animate-float">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl glass-strong flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <LineChart className="w-9 h-9 text-brand-glow" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Stat value="250+" label="Projects Delivered" />
                  <Stat value="120+" label="Happy Clients" />
                  <Stat value="9" label="Countries" />
                  <Stat value="99%" label="Retention Rate" />
                </div>
              </div>
            </Reveal>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------ Marquee ------------------------ */
function ClientMarquee() {
  const logos = ["Nova", "Aetheria", "Vortex", "Pulse", "Lumen", "Orbit", "Zenith", "Kairos", "Vireo", "Helix", "Sable", "Aurora"];
  const row = [...logos, ...logos];
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.02]">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-8">Trusted by high-growth brands worldwide</p>
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {row.map((l, i) => (
              <div key={i} className="font-heading font-bold text-3xl text-white/40 hover:text-white transition-colors">
                {l}<span className="text-brand-glow">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Services ------------------------ */
function Services() {
  const items = [
    { icon: Globe, title: "Web & App Development", desc: "Blazing-fast websites, PWAs, mobile apps and custom platforms built with Next.js, Flutter and React Native.", tags: ["Next.js", "React", "Flutter"] },
    { icon: Search, title: "SEO & Growth", desc: "Data-driven SEO that compounds. Technical, on-page and content strategy that dominates SERPs.", tags: ["Technical", "Content", "Local"] },
    { icon: Megaphone, title: "Performance Marketing", desc: "Google, Meta, LinkedIn and YouTube ads engineered for ROAS with full-funnel tracking.", tags: ["Google Ads", "Meta", "LinkedIn"] },
    { icon: Palette, title: "Branding & Design", desc: "Identities, guidelines and design systems that make your brand instantly recognizable.", tags: ["Identity", "UI/UX", "Systems"] },
    { icon: Bot, title: "AI Automation", desc: "Chatbots, WhatsApp automation, CRM workflows and AI agents that scale your team.", tags: ["GPT", "n8n", "CRM"] },
    { icon: Play, title: "Video & Content", desc: "Reels, ads, product shoots and drone videography that stops the scroll.", tags: ["Reels", "Ads", "Drone"] },
  ];
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="container relative">
        <div className="max-w-3xl mb-16">
          <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">What we do</Badge></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold leading-tight">
              <span className="text-gradient-soft">A full-stack agency</span><br />
              <span className="text-gradient">for the AI era.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/60 text-lg max-w-2xl">Six connected practices, one obsessed team. From identity to infrastructure, we handle every layer of your digital presence.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div data-cursor="hover" className="group relative h-full rounded-3xl p-8 glass hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-600/20 via-transparent to-fuchsia-500/10" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow mb-6 group-hover:scale-110 transition-transform">
                    <it.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">{it.title}</h3>
                  <p className="text-white/60 leading-relaxed">{it.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-brand-glow font-medium text-sm">
                    Learn more <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Industries ------------------------ */
function Industries() {
  const items = [
    { icon: Heart, name: "Healthcare", desc: "HIPAA-ready platforms" },
    { icon: GraduationCap, name: "Education", desc: "LMS & EdTech" },
    { icon: Plane, name: "Travel", desc: "Booking & tourism" },
    { icon: Building2, name: "Real Estate", desc: "Listings & CRM" },
    { icon: UtensilsCrossed, name: "Restaurants", desc: "Menus & delivery" },
    { icon: Landmark, name: "Finance", desc: "Fintech & compliance" },
    { icon: Store, name: "Retail", desc: "Omnichannel commerce" },
    { icon: ShoppingBag, name: "Ecommerce", desc: "D2C & marketplaces" },
    { icon: Scissors, name: "Fashion & Beauty", desc: "Luxury & lifestyle" },
    { icon: Factory, name: "Manufacturing", desc: "B2B lead engines" },
    { icon: Car, name: "Automobile", desc: "Dealer & OEM" },
    { icon: Rocket, name: "Startups", desc: "MVP to scale" },
  ];
  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Industries</Badge></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold leading-tight">
                <span className="text-gradient-soft">We speak </span>
                <span className="text-gradient">your industry.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-white/60 max-w-md">20+ industries, 250+ engagements. Deep vertical playbooks that shortcut you to what works.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.03}>
              <a href="#" data-cursor="hover" className="group relative block rounded-2xl glass p-6 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/25 to-transparent" />
                <div className="relative flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/40 to-indigo-500/30 border border-white/10 flex items-center justify-center group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all mb-4">
                    <it.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-white text-lg">{it.name}</h4>
                  <p className="text-white/50 text-sm mt-1">{it.desc}</p>
                  <ArrowUpRight className="w-4 h-4 text-white/40 mt-4 transition-all group-hover:text-brand-glow group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Process ------------------------ */
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
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold">
              <span className="text-gradient-soft">Built for </span>
              <span className="text-gradient">outcomes.</span>
            </h2>
          </Reveal>
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

/* ------------------------ Portfolio ------------------------ */
function Portfolio() {
  const items = [
    { title: "Aetheria Skincare", cat: "D2C · Ecommerce · Branding", grad: "from-fuchsia-500 via-purple-600 to-indigo-600" },
    { title: "Nova Fintech", cat: "SaaS · Web App · SEO", grad: "from-indigo-600 via-purple-700 to-fuchsia-500" },
    { title: "Pulse Fitness", cat: "Mobile App · Performance", grad: "from-purple-500 via-pink-500 to-orange-400" },
    { title: "Orbit Realty", cat: "Portal · Lead Gen · Meta Ads", grad: "from-blue-500 via-purple-600 to-fuchsia-600" },
  ];
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-14">
          <div>
            <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Selected work</Badge></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold">
                <span className="text-gradient-soft">Recent </span>
                <span className="text-gradient">obsessions.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-white/70 hover:text-white transition text-sm">
              View all projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <a href="#" data-cursor="hover" className="group relative block rounded-3xl overflow-hidden aspect-[4/3]">
                <div className={`absolute inset-0 bg-gradient-to-br ${it.grad}`} />
                <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 grid-lines opacity-30" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.9, opacity: 0.7 }} whileHover={{ scale: 1.05, opacity: 1 }} transition={{ duration: 0.6 }}
                >
                  <div className="w-40 h-40 rounded-3xl glass-strong flex items-center justify-center shadow-glow">
                    <span className="text-5xl font-heading font-bold text-white/90">{it.title.charAt(0)}</span>
                  </div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/70 mb-2">{it.cat}</div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">{it.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Testimonials ------------------------ */
function Testimonials() {
  const items = [
    { name: "Ananya Kapoor", role: "Founder, Aetheria", quote: "Digify4u re-imagined our entire brand and grew our D2C revenue 6x in 9 months. Rare combination of taste and execution.", rating: 5 },
    { name: "Rohan Mehta", role: "CMO, Nova Fintech", quote: "Their SEO and performance team is world-class. We hit 1M organic sessions and cut CAC by 40% in two quarters.", rating: 5 },
    { name: "Sara Iyer", role: "CEO, Pulse Fitness", quote: "It felt like hiring an in-house team, but 10x sharper. Every touchpoint of our app now feels premium.", rating: 5 },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Loved by founders</Badge></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold">
              <span className="text-gradient-soft">Words from </span>
              <span className="text-gradient">our clients.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full glass rounded-3xl p-8 hover:bg-white/[0.06] transition-all">
                <Quote className="w-8 h-8 text-brand-glow mb-4" />
                <p className="text-white/80 leading-relaxed text-lg">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.role}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, k) => (<Star key={k} className="w-4 h-4 fill-brand-glow text-brand-glow" />))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ CTA ------------------------ */
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
                <h2 className="mt-5 text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                  Ready to become the<br />brand everyone <em className="not-italic bg-white/20 px-3 rounded-xl">copies</em>?
                </h2>
                <p className="mt-5 text-white/80 text-lg max-w-lg">Book a free 30-minute strategy call. We'll audit your funnel and share three growth levers you can pull this week.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton>
                    <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 rounded-full h-14 px-8 font-semibold">
                      Book Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button size="lg" variant="ghost" className="rounded-full h-14 px-8 text-white border border-white/30 hover:bg-white/10">
                      <Phone className="w-4 h-4 mr-2" /> +91 98XXX XXXXX
                    </Button>
                  </MagneticButton>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["No lock-in contracts", "In-house senior team", "Full-funnel tracking", "Weekly reporting", "AI-powered playbooks", "24/7 support"].map((f) => (
                  <div key={f} className="glass-strong rounded-2xl p-5 border border-white/20">
                    <Check className="w-5 h-5 text-white mb-2" />
                    <div className="text-white font-medium">{f}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ Footer ------------------------ */
function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const r = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const d = await r.json();
      if (r.ok) { toast.success("You're subscribed! Welcome aboard."); setEmail(""); }
      else toast.error(d.error || "Something went wrong");
    } catch {
      toast.error("Network error");
    } finally { setLoading(false); }
  };
  return (
    <footer className="relative pt-24 pb-10 border-t border-white/5 bg-[#050318]">
      <div className="absolute inset-0 mesh-bg opacity-20 pointer-events-none" />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-2 space-y-5">
            <Logo />
            <p className="text-white/60 max-w-sm">Digify4u is a premium full-service digital marketing & IT solutions agency crafting brands, products and growth engines that dominate their markets.</p>
            <form onSubmit={submit} className="flex gap-2 max-w-sm">
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your@email.com" required className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-full h-12 px-5" />
              <Button type="submit" disabled={loading} className="bg-gradient-brand rounded-full h-12 px-6 font-semibold">{loading ? "..." : "Subscribe"}</Button>
            </form>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition"><Icon className="w-4 h-4 text-white/80" /></a>
              ))}
            </div>
          </div>
          {[
            { title: "Services", items: ["Web Development", "SEO", "Performance Marketing", "Branding", "AI Automation", "Video Production"] },
            { title: "Company", items: ["About", "Portfolio", "Case Studies", "Careers", "Blog", "Contact"] },
            { title: "Resources", items: ["Pricing", "Testimonials", "FAQ", "Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="font-heading font-semibold text-white mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.items.map((i) => (
                  <li key={i}><a href="#" className="text-white/60 hover:text-white transition text-sm">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} Digify4u. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white flex items-center gap-1"><MapPin className="w-4 h-4" /> India · Global</a>
            <a href="mailto:hello@digify4u.com" className="hover:text-white flex items-center gap-1"><Mail className="w-4 h-4" /> hello@digify4u.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------ WhatsApp float ------------------------ */
function FloatingWhatsApp() {
  return (
    <a href="#" data-cursor="hover" className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-2xl shadow-green-900/40 flex items-center justify-center hover:scale-110 transition-transform">
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/><path d="M12.014 2C6.483 2 2 6.483 2 12.014c0 1.755.462 3.472 1.34 4.983L2 22l5.145-1.324a10.017 10.017 0 0 0 4.869 1.234c5.53 0 10.014-4.483 10.014-10.014S17.545 2 12.014 2zm0 18.198a8.169 8.169 0 0 1-4.164-1.14l-.298-.174-3.095.797.828-3.02-.198-.322A8.16 8.16 0 0 1 3.832 12.014c0-4.517 3.665-8.182 8.182-8.182S20.196 7.497 20.196 12.014s-3.665 8.184-8.182 8.184z"/></svg>
    </a>
  );
}

/* ------------------------ App ------------------------ */
function App() {
  return (
    <div className="relative bg-[#08061a] text-white min-h-screen">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ClientMarquee />
        <Services />
        <Industries />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}

export default App;
