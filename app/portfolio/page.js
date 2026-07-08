"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal } from "@/components/site/fx";
import { portfolio } from "@/lib/site-data";
import { getPortfolioImage } from "@/lib/media";

const categories = ["All", "Website Design", "Ecommerce", "Branding", "Social Media", "SEO", "Video Production", "UI UX", "Marketing Campaigns"];

export default function PortfolioPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? portfolio : portfolio.filter((p) => p.cats.includes(cat));
  return (
    <Shell>
      <PageHero eyebrow="Portfolio" title="Selected work." gradientPart="Serious outcomes." subtitle="A curated slice of 250+ engagements delivered across 20+ industries and 9 countries. Every project below moved a real metric \u2014 revenue, rankings, retention or leads." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />

      <section className="relative py-8">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <Button key={c} onClick={() => setCat(c)} variant={cat === c ? "default" : "ghost"} className={`rounded-full h-11 px-5 ${cat === c ? "bg-gradient-brand text-white" : "text-white/70 border border-white/10 hover:bg-white/5"}`}>{c}</Button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 pb-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((it, i) => {
            const img = getPortfolioImage(it.slug).hero;
            return (
              <Reveal key={it.slug} delay={Math.min(i, 6) * 0.06}>
                <Link href={`/portfolio/${it.slug}`} data-cursor="hover" className="group relative block rounded-3xl overflow-hidden aspect-[4/3]">
                  <img src={img} alt={`${it.title} – ${it.category}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className={`absolute inset-0 opacity-25 mix-blend-overlay bg-gradient-to-br ${it.grad}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/70 mb-2">{it.category}</div>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">{it.title}</h3>
                      <p className="mt-2 text-white/80 text-sm max-w-md">{it.tagline}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"><ArrowUpRight className="w-5 h-5 text-white" /></div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </Shell>
  );
}
