"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo, MagneticButton, Stat } from "@/components/site/fx";
import { serviceMegaColumns, industriesList } from "@/lib/site-data";
export default function Navbar() {
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
    
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`} onMouseLeave={() => setActive(null)}>
        <div className="container">
          <div className={`flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong shadow-2xl shadow-purple-900/20" : "bg-transparent"}`}>
            <Logo small={scrolled} />
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className={navItem} onMouseEnter={() => setActive(null)}>Home</Link>
              <Link href="/about" className={navItem} onMouseEnter={() => setActive(null)}>About</Link>
              <button className={`${navItem} flex items-center gap-1`} onMouseEnter={() => setActive("services")}>
                Services <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
              <button className={`${navItem} flex items-center gap-1`} onMouseEnter={() => setActive("industries")}>
                Industries <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
              <Link href="/portfolio" className={navItem} onMouseEnter={() => setActive(null)}>Portfolio</Link>
              <Link href="/blog" className={navItem} onMouseEnter={() => setActive(null)}>Blog</Link>
              <Link href="/contact" className={navItem} onMouseEnter={() => setActive(null)}>Contact</Link>
            </nav>
            <div className="flex items-center gap-2">
              <MagneticButton>
                <Link href="/contact">
                  <Button className="hidden md:inline-flex bg-gradient-brand hover:opacity-90 text-white font-semibold rounded-full px-5 shadow-glow">
                    Get Started <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </MagneticButton>
              <button className="lg:hidden p-2 text-white" onClick={() => setMobile(true)} aria-label="Menu"><Menu /></button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.25 }}
              className="container mt-3" onMouseEnter={() => setActive(active)} onMouseLeave={() => setActive(null)}>
              <div className="glass-strong rounded-3xl p-8 shadow-2xl shadow-purple-900/40 border-white/10">
                {active === "services" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {serviceMegaColumns.map((col) => (
                      <div key={col.title}>
                        <div className={`text-xs font-heading font-bold uppercase tracking-widest mb-4 bg-gradient-to-r ${col.color} bg-clip-text text-transparent`}>{col.title}</div>
                        <ul className="space-y-1">
                          {col.items.map((it) => (
                            <li key={it.slug}>
                              <Link href={`/services/${it.slug}`} onClick={() => setActive(null)} className="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-white/5 transition">
                                <div className={`shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${col.color} flex items-center justify-center opacity-90 group-hover:opacity-100`}>
                                  <it.icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-white leading-tight">{it.name}</div>
                                  <div className="text-xs text-white/50 leading-snug">{it.desc}</div>
                                </div>
                              </Link>
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
                      <Link href="/contact"><Button size="sm" className="mt-4 bg-white text-purple-700 hover:bg-white/90 rounded-full font-semibold">Let's Talk <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
                    </div>
                  </div>
                )}
                {active === "industries" && (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {industriesList.map((it) => (
                        <Link key={it.slug} href={`/industries/${it.slug}`} onClick={() => setActive(null)} className="group flex items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition border border-transparent hover:border-white/10">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/40 to-indigo-500/30 border border-white/10 flex items-center justify-center group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all">
                            <it.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-sm font-medium text-white">{it.name}</div>
                        </Link>
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
                      <Link href="/industries"><Button size="sm" className="mt-5 bg-white text-purple-700 hover:bg-white/90 rounded-full font-semibold">Explore Industries <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
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
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween" }} className="fixed inset-0 z-[60] glass-strong lg:hidden overflow-y-auto">
            <div className="p-6 flex items-center justify-between">
              <Logo  />
              <button onClick={() => setMobile(false)} className="p-2 text-white" aria-label="Close"><X /></button>
            </div>
            <div className="p-6 space-y-1">
              {[["Home","/"],["About","/about"],["Services","/services"],["Industries","/industries"],["Portfolio","/portfolio"],["Case Studies","/case-studies"],["Pricing","/pricing"],["Blog","/blog"],["Contact","/contact"]].map(([x,h]) => (
                <Link key={x} href={h} onClick={() => setMobile(false)} className="block py-3 text-lg text-white/90 border-b border-white/10">{x}</Link>
              ))}
              <Link href="/contact" onClick={() => setMobile(false)}><Button className="w-full mt-6 bg-gradient-brand rounded-full">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
