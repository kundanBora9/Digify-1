"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/fx";
import { Badge } from "@/components/ui/badge";

export default function PageHero({ eyebrow, title, gradientPart, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/25 blur-3xl animate-blob" />
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-fuchsia-500/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="container relative">
        {breadcrumbs.length > 0 && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/50">
              {breadcrumbs.map((b, i) => (
                <span key={b.href || b.label} className="flex items-center gap-2">
                  {b.href ? <Link href={b.href} className="hover:text-white transition">{b.label}</Link> : <span className="text-white/80">{b.label}</span>}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="w-3.5 h-3.5" />}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <div className="max-w-4xl">
          {eyebrow && <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">{eyebrow}</Badge></Reveal>}
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              <span className="text-gradient-soft">{title}</span>{gradientPart && <> <span className="text-gradient">{gradientPart}</span></>}
            </h1>
          </Reveal>
          {subtitle && <Reveal delay={0.2}><p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">{subtitle}</p></Reveal>}
        </div>
      </div>
    </section>
  );
}
