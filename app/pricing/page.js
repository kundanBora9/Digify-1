"use client";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal, MagneticButton } from "@/components/site/fx";

const tracks = [
  {
    icon: Zap, name: "Website", tagline: "Static, dynamic and ecommerce websites built to convert.",
    tiers: [
      { name: "Starter", price: "₹75K", per: "one-time", features: ["5-page website", "Mobile responsive", "Basic SEO", "1-round revisions", "2-week delivery"] },
      { name: "Growth", price: "₹1.75L", per: "one-time", popular: true, features: ["10-page website", "CMS integration", "Advanced SEO", "3-round revisions", "Analytics setup", "3-week delivery"] },
      { name: "Enterprise", price: "Custom", per: "scoped", features: ["Unlimited pages", "Custom web app", "Headless CMS", "Multi-lingual", "Priority delivery", "Post-launch support"] },
    ],
  },
  {
    icon: Sparkles, name: "SEO", tagline: "Compound organic growth engines.",
    tiers: [
      { name: "Local", price: "₹25K", per: "month", features: ["1 location", "GBP optimization", "20 citations", "Local content", "Monthly report"] },
      { name: "National", price: "₹75K", per: "month", popular: true, features: ["100 keywords tracked", "Content + link building", "Technical audits", "Weekly report", "Looker dashboard"] },
      { name: "Enterprise", price: "₹3L+", per: "month", features: ["1000+ keywords", "Programmatic SEO", "Dev-support included", "QBRs", "Dedicated team"] },
    ],
  },
  {
    icon: Crown, name: "Social Media", tagline: "On-brand content that grows followers and revenue.",
    tiers: [
      { name: "Essential", price: "₹30K", per: "month", features: ["12 posts/month", "4 reels/month", "1 platform", "Community mgmt", "Monthly report"] },
      { name: "Growth", price: "₹75K", per: "month", popular: true, features: ["20 posts/month", "8 reels/month", "3 platforms", "Ad management", "Weekly report"] },
      { name: "Full-Stack", price: "₹1.5L+", per: "month", features: ["Unlimited content", "5 platforms", "Influencer campaigns", "UGC engine", "Dedicated team"] },
    ],
  },
  {
    icon: Zap, name: "Performance Marketing", tagline: "ROAS-focused paid media across every channel.",
    tiers: [
      { name: "Startup", price: "₹40K", per: "month", features: ["1 platform", "Up to ₹3L ad-spend", "Weekly optimization", "Basic dashboards"] },
      { name: "Scale", price: "₹1L", per: "month", popular: true, features: ["3 platforms", "Up to ₹20L ad-spend", "Creative testing", "Server-side tracking", "Weekly reviews"] },
      { name: "Enterprise", price: "% of spend", per: "custom", features: ["All platforms", "Unlimited ad-spend", "Dedicated team", "MMM & incrementality", "Executive QBRs"] },
    ],
  },
];

export default function PricingPage() {
  return (
    <Shell>
      <PageHero eyebrow="Pricing" title="Transparent packages." gradientPart="Custom quotes." subtitle="Fixed-scope, retainer or performance-based — we adapt to how you like to work. Every quote is bespoke, but here is where most engagements land." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />

      {tracks.map((tr, ti) => (
        <section key={tr.name} className="relative py-14"><div className="container">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center"><tr.icon className="w-6 h-6 text-white" /></div>
              <div><div className="text-xs uppercase tracking-widest text-white/50">{tr.name}</div><h2 className="font-heading font-bold text-2xl md:text-3xl text-white">{tr.tagline}</h2></div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tr.tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className={`relative h-full rounded-3xl p-8 ${t.popular ? "bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 shadow-glow border border-white/20" : "glass"}`}>
                  {t.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-purple-700 rounded-full px-4 py-1 border-0">Most Popular</Badge>}
                  <div className="text-sm uppercase tracking-widest text-white/60">{t.name}</div>
                  <div className="mt-4 flex items-baseline gap-2"><div className="font-heading font-bold text-4xl text-white">{t.price}</div><div className="text-white/60">/ {t.per}</div></div>
                  <ul className="mt-6 space-y-3">{t.features.map(f => (<li key={f} className="flex items-start gap-2 text-white/80"><Check className="w-5 h-5 text-brand-glow shrink-0 mt-0.5" /><span>{f}</span></li>))}</ul>
                  <Link href="/contact"><Button className={`mt-8 w-full h-12 rounded-full font-semibold ${t.popular ? "bg-white text-purple-700 hover:bg-white/90" : "bg-white/10 text-white hover:bg-white/20"}`}>Get Quote <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div></section>
      ))}

      {/* Comparison */}
      <section className="relative py-16"><div className="container">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Digify4u vs Alternatives</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">The honest </span><span className="text-gradient">comparison.</span></h2></Reveal>
        <div className="mt-10 glass rounded-3xl overflow-hidden">
          <div className="grid grid-cols-4 border-b border-white/10 text-sm font-heading font-semibold">
            <div className="p-5 text-white/60"></div><div className="p-5 text-brand-glow">Digify4u</div><div className="p-5 text-white/60">Freelancer</div><div className="p-5 text-white/60">Legacy Agency</div>
          </div>
          {[["Senior specialists","Yes, always","Sometimes","Junior AMs"],["Weekly reporting","Included","Rare","Monthly"],["Slack access","Included","Yes","Never"],["Live Looker dashboards","Included","No","Extra fee"],["Lock-in contracts","None","None","12 months+"],["Ownership of assets","100% yours","Depends","Locked to them"],["Turnaround time","Weekly sprints","Depends","4–6 weeks"]].map((r, i) => (
            <div key={i} className="grid grid-cols-4 border-b border-white/5 text-sm last:border-0"><div className="p-5 text-white/80 font-medium">{r[0]}</div><div className="p-5 text-white flex items-center gap-1"><Check className="w-4 h-4 text-brand-glow" /> {r[1]}</div><div className="p-5 text-white/60">{r[2]}</div><div className="p-5 text-white/60">{r[3]}</div></div>
          ))}
        </div>
      </div></section>

      {/* CTA */}
      <section className="relative py-24"><div className="container"><Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-indigo-800 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Need a custom quote?</h2>
          <p className="mt-4 text-white/80 text-lg">Every quote is bespoke. Send a brief and we'll send a proposal in 48 hours.</p>
          <div className="mt-8"><MagneticButton><Link href="/contact"><Button size="lg" className="bg-white text-purple-700 rounded-full h-14 px-8 font-semibold">Get Custom Quote <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></MagneticButton></div>
        </div>
      </Reveal></div></section>
    </Shell>
  );
}
