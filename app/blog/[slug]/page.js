"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Twitter, Linkedin, Facebook, Quote, Sparkles } from "lucide-react";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal } from "@/components/site/fx";
import { getBlogContent, blogs } from "@/lib/site-data";
import { getBlogImage } from "@/lib/media";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

function Block({ b }) {
  if (b.type === "h2") return <h2 id={b.id} className="scroll-mt-32 font-heading font-bold text-2xl md:text-3xl text-white mt-10 mb-4">{b.text}</h2>;
  if (b.type === "p") return <p className="text-white/75 leading-relaxed text-lg mb-4">{b.text}</p>;
  if (b.type === "quote") return (<blockquote className="my-8 pl-6 border-l-4 border-brand-glow bg-white/5 rounded-r-2xl p-6"><Quote className="w-6 h-6 text-brand-glow mb-2" /><p className="text-xl italic text-white font-heading">{b.text}</p><cite className="block mt-3 text-white/50 not-italic">— {b.author}</cite></blockquote>);
  if (b.type === "list") return (<ul className="my-6 space-y-2">{b.items.map((x, i) => (<li key={i} className="flex items-start gap-3 text-white/75 text-lg"><span className="mt-3 w-1.5 h-1.5 rounded-full bg-brand-glow shrink-0" /><span>{x}</span></li>))}</ul>);
  if (b.type === "callout") return (<div className="my-8 rounded-2xl p-6 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/10 border border-brand-glow/30"><div className="flex items-center gap-2 text-brand-glow font-heading font-semibold mb-2"><Sparkles className="w-5 h-5" /> Pro Tip</div><p className="text-white/80">{b.text}</p></div>);
  if (b.type === "code") return (<pre className="my-6 rounded-2xl bg-black/50 border border-white/10 p-6 overflow-x-auto text-sm text-brand-glow font-mono"><code>{b.text}</code></pre>);
  return null;
}

export default function BlogPost({ params }) {
  const { slug } = use(params);
  const b = getBlogContent(slug);
  if (!b) return notFound();
  const image = getBlogImage(slug);
  const related = blogs.filter((x) => x.slug !== slug && x.category === b.category).slice(0, 3);
  if (related.length < 3) related.push(...blogs.filter((x) => x.slug !== slug && !related.includes(x)).slice(0, 3 - related.length));
  const idx = blogs.findIndex((x) => x.slug === slug);
  const prev = blogs[idx - 1];
  const next = blogs[idx + 1];

  return (
    <Shell>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: b.title }]),
        articleSchema(b, image),
        faqSchema(b.faqs),
      ]} />

      <PageHero eyebrow={`Blog · ${b.category}`} title={b.title} subtitle={b.excerpt} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: b.title.slice(0, 40) + "\u2026" }]} />

      {/* Meta bar */}
      <section className="relative py-4"><div className="container flex flex-wrap items-center gap-6 text-sm text-white/60">
        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {b.author}</span>
        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {b.date}</span>
        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {b.read}</span>
        <span className="flex items-center gap-2"><Share2 className="w-4 h-4" /><a href="#" aria-label="twitter" className="hover:text-white"><Twitter className="w-4 h-4" /></a><a href="#" aria-label="linkedin" className="hover:text-white"><Linkedin className="w-4 h-4" /></a><a href="#" aria-label="facebook" className="hover:text-white"><Facebook className="w-4 h-4" /></a></span>
      </div></section>

      {/* Featured image */}
      <section className="relative py-4"><div className="container">
        <div className="relative aspect-[16/7] rounded-3xl overflow-hidden">
          <img src={image} alt={b.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-transparent to-fuchsia-600/15 mix-blend-overlay" />
        </div>
      </div></section>

      {/* Content + Sticky TOC */}
      <section className="relative py-12"><div className="container grid lg:grid-cols-[240px_1fr] gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Table of Contents</div>
            <ul className="space-y-2">{b.toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-white/60 hover:text-white text-sm block py-1 border-l-2 border-transparent hover:border-brand-glow pl-3 transition">{t.label}</a></li>))}</ul>
          </div>
        </aside>
        <article className="max-w-3xl">
          {b.body.map((block, i) => (<Block key={i} b={block} />))}

          <div className="mt-10 flex flex-wrap gap-2">{b.tags.map((t) => (<Badge key={t} className="bg-white/5 border-white/10 text-white/70 rounded-full">#{t}</Badge>))}</div>

          <h2 id="faq" className="scroll-mt-32 font-heading font-bold text-2xl md:text-3xl text-white mt-12 mb-4">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {b.faqs.map((f, i) => (<AccordionItem key={i} value={`i-${i}`} className="glass rounded-2xl border-white/10 px-6"><AccordionTrigger className="text-white text-left hover:no-underline font-heading text-lg">{f.q}</AccordionTrigger><AccordionContent className="text-white/70 leading-relaxed">{f.a}</AccordionContent></AccordionItem>))}
          </Accordion>

          <div className="mt-14 glass rounded-3xl p-6 flex gap-5 items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center shrink-0"><span className="font-heading font-bold text-white text-2xl">{b.author.charAt(0)}</span></div>
            <div><div className="font-heading font-semibold text-white text-lg">{b.author}</div><div className="text-white/50 text-sm">Senior specialist at Digify4u. Writes about {b.category.toLowerCase()} and growth playbooks based on 250+ engagements.</div></div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {prev ? <Link href={`/blog/${prev.slug}`} className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition group"><div className="text-xs text-white/40 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous</div><div className="mt-1 font-heading font-semibold text-white line-clamp-2 group-hover:text-brand-glow">{prev.title}</div></Link> : <div />}
            {next ? <Link href={`/blog/${next.slug}`} className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition text-right group"><div className="text-xs text-white/40 flex items-center gap-1 justify-end">Next <ArrowRight className="w-3 h-3" /></div><div className="mt-1 font-heading font-semibold text-white line-clamp-2 group-hover:text-brand-glow">{next.title}</div></Link> : <div />}
          </div>
        </article>
      </div></section>

      {/* Related */}
      <section className="relative py-16 pb-24"><div className="container">
        <h3 className="text-2xl md:text-3xl font-heading font-bold"><span className="text-gradient-soft">Related </span><span className="text-gradient">articles.</span></h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((r) => (
            <Link key={r.slug} href={`/blog/${r.slug}`} className="group block glass rounded-3xl overflow-hidden hover:bg-white/[0.06] transition">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={getBlogImage(r.slug)} alt={r.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6"><Badge className="bg-white/5 border-white/10 text-white/70 text-xs rounded-full">{r.category}</Badge><h4 className="mt-3 font-heading font-bold text-lg text-white line-clamp-2">{r.title}</h4></div>
            </Link>
          ))}
        </div>
      </div></section>
    </Shell>
  );
}
