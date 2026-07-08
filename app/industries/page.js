"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal } from "@/components/site/fx";
import { industriesList } from "@/lib/site-data";

export default function IndustriesPage() {
  return (
    <Shell>
      <PageHero eyebrow="Industries" title="20+ verticals." gradientPart="250+ proven playbooks." subtitle="Digify4u operates as an industry-specialist agency. Every vertical below has a dedicated senior team, category playbook and reference case studies." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />

      <section className="relative py-16">
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industriesList.map((it, i) => (
            <Reveal key={it.slug} delay={Math.min(i, 8) * 0.03}>
              <Link href={`/industries/${it.slug}`} data-cursor="hover" className="group relative block rounded-2xl glass p-6 hover:bg-white/[0.08] transition duration-500 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/25 to-transparent" />
                <div className="relative flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/40 to-indigo-500/30 border border-white/10 flex items-center justify-center group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all mb-4"><it.icon className="w-6 h-6 text-white" /></div>
                  <h4 className="font-heading font-semibold text-white text-lg">{it.name}</h4>
                  <ArrowUpRight className="w-4 h-4 text-white/40 mt-4 transition-all group-hover:text-brand-glow group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Shell>
  );
}
