"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import Shell from "@/components/site/shell";
import PageHero from "@/components/site/page-hero";
import { Reveal } from "@/components/site/fx";

const faqs = [
  { q: "How quickly do you respond to enquiries?", a: "Within 4 business hours. Every enquiry is triaged by a senior strategist, not a chatbot." },
  { q: "Do you work with startups or only large brands?", a: "Both. About 40% of our clients are early-stage startups and 60% are growth-stage or enterprise. We adapt engagement models to fit." },
  { q: "What is the minimum engagement size?", a: "Our smallest engagement is a ₹ 25,000/month single-service retainer. Full-stack engagements typically start at ₹1 lakh/month." },
  { q: "Do you sign NDAs?", a: "Yes — we sign mutual NDAs on every enquiry, before the first strategy call." },
  { q: "Where are you based?", a: "Headquartered in Bangalore, India, with delivery teams across India and satellite specialists in the UK, UAE and Singapore." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ name: form.name, email: form.email, message: `${form.company} | Budget: ${form.budget}\n${form.message}` }) });
      if (r.ok) { toast.success("Message sent! We'll reply within 4 business hours."); setSent(true); setForm({ name:"", email:"", company:"", budget:"", message:"" }); }
      else { const d = await r.json(); toast.error(d.error || "Something went wrong"); }
    } catch { toast.error("Network error"); }
    finally { setLoading(false); }
  };

  return (
    <Shell>
      <PageHero eyebrow="Contact" title="Let's build" gradientPart="something remarkable." subtitle="Reach out for new projects, partnerships or just to say hi. Every enquiry is answered by a senior strategist within 4 business hours." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="relative py-8"><div className="container grid lg:grid-cols-3 gap-6">
        {[
          { icon: Mail, title: "Email", value: "Info@digify4u.com", desc: "Best for detailed briefs" },
          { icon: Phone, title: "Phone", value: "+91 7347374706", desc: "Mon–Sat, 10am–19:00 IST" },
          { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", desc: "Fastest response" },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}><div className="glass rounded-3xl p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5"><c.icon className="w-6 h-6 text-white" /></div>
            <div className="text-xs uppercase tracking-widest text-white/50">{c.title}</div>
            <div className="mt-1 font-heading font-bold text-xl text-white">{c.value}</div>
            <div className="text-white/50 text-sm mt-1">{c.desc}</div>
          </div></Reveal>
        ))}
      </div></section>

      {/* Form + Info */}
      <section className="relative py-16"><div className="container grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-3">
          <div className="glass rounded-3xl p-8 md:p-10">
            <Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">Start a project</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">Tell us about your project.</h2>
            {sent ? (
              <div className="mt-10 text-center py-10"><CheckCircle2 className="w-16 h-16 text-brand-glow mx-auto mb-4" /><h3 className="font-heading font-bold text-2xl text-white">Message received!</h3><p className="text-white/60 mt-2">A senior strategist will reply within 4 business hours.</p></div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your name" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl px-5" />
                  <Input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Work email" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl px-5" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} placeholder="Company" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl px-5" />
                  <Input value={form.budget} onChange={e=>setForm({...form, budget:e.target.value})} placeholder="Budget (e.g. ₹1L–₹3L / month)" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl px-5" />
                </div>
                <Textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Tell us about your project, goals and timeline…" className="min-h-[160px] bg-white/5 border-white/10 text-white rounded-2xl p-5" />
                <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-brand h-14 rounded-full font-semibold shadow-glow">{loading ? "Sending…" : (<>Send Message <Send className="w-4 h-4 ml-2" /></>)}</Button>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2 space-y-6">
          <div className="glass rounded-3xl p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5"><MapPin className="w-6 h-6 text-white" /></div>
            <h3 className="font-heading font-bold text-xl text-white">Delhi HQ</h3>
            <p className="text-white/60 mt-2">Janakpuri <br />Delhi 110058<br />India</p>
          </div>
          <div className="glass rounded-3xl p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5"><Clock className="w-6 h-6 text-white" /></div>
            <h3 className="font-heading font-bold text-xl text-white">Business Hours</h3>
            <div className="text-white/60 mt-2 space-y-1 text-sm">
              <div className="flex justify-between"><span>Mon – Fri</span><span>10:00 – 19:00 IST</span></div>
              <div className="flex justify-between"><span>Saturday</span><span>10:00 – 15:00 IST</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-700">
            <div className="absolute inset-0 mesh-bg opacity-40" />
            <div className="absolute inset-0 grid-lines opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-6">
              <MapPin className="w-12 h-12 text-white/90 mb-3" />
              <div className="text-white font-heading font-bold text-lg">Find us on the map</div>
              <div className="text-white/70 text-sm mt-1">Google Maps integration coming soon</div>
            </div>
          </div>
        </Reveal>
      </div></section>

      {/* FAQ */}
      <section className="relative py-16 pb-24"><div className="container max-w-3xl">
        <Reveal><Badge className="bg-white/5 border-white/10 text-white/80 rounded-full px-4">FAQ</Badge><h2 className="mt-5 text-3xl md:text-5xl font-heading font-bold"><span className="text-gradient-soft">Common </span><span className="text-gradient">questions.</span></h2></Reveal>
        <Reveal delay={0.1}><Accordion type="single" collapsible className="mt-8 space-y-3">
          {faqs.map((f, i) => (<AccordionItem key={i} value={`i-${i}`} className="glass rounded-2xl border-white/10 px-6"><AccordionTrigger className="text-white text-left hover:no-underline font-heading text-lg">{f.q}</AccordionTrigger><AccordionContent className="text-white/70 leading-relaxed">{f.a}</AccordionContent></AccordionItem>))}
        </Accordion></Reveal>
      </div></section>
    </Shell>
  );
}
