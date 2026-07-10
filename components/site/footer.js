"use client";
import { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Logo } from "@/components/site/fx";

export default function Footer() {
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
    } catch { toast.error("Network error"); }
    finally { setLoading(false); }
  };
  const socials = [
    { Icon: Instagram, href: "https://www.instagram.com/digify4u?utm_source=qr&igsh=bDZuZWwyb2x3bTNp", label: "Instagram" },
    { Icon: Facebook, href: "https://www.facebook.com/your-page", label: "Facebook" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/your-company", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com/your-handle", label: "Twitter" },
    { Icon: Youtube, href: "https://www.youtube.com/@your-channel", label: "YouTube" },
  ];
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
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition">
                  <Icon className="w-4 h-4 text-white/80" />
                </a>
              ))}
            </div>
          </div>
          {[
            { title: "Services", items: [["Web Development", "/services/website-development"], ["SEO", "/services/seo"], ["Performance Marketing", "/services/performance-marketing"], ["Branding", "/services/branding"], ["AI Automation", "/services/ai-automation"], ["Video Production", "/services/video-production"]] },
            { title: "Company", items: [["About", "/about"], ["Portfolio", "/portfolio"], ["Case Studies", "/case-studies"], ["Careers", "/careers"], ["Blog", "/blog"], ["Contact", "/contact"]] },
            { title: "Resources", items: [["Pricing", "/pricing"], ["Industries", "/industries"], ["All Services", "/services"], ["FAQ", "/contact"], ["Privacy Policy", "#"], ["Terms of Service", "#"]] },
          ].map((col) => (
            <div key={col.title}>
              <div className="font-heading font-semibold text-white mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.items.map(([name, href]) => (
                  <li key={name}><Link href={href} className="text-white/60 hover:text-white transition text-sm">{name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} Digify4u. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> India · Global</span>
            <a href="mailto:info@digify4u.com" className="hover:text-white flex items-center gap-1"><Mail className="w-4 h-4" /> info@digify4u.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
