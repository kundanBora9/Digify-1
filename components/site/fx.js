"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import LogoImage from "../../assets/logo-new.png";
export function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0, tx = 0, ty = 0;
    const move = (e) => { dx = e.clientX; dy = e.clientY; };
    const loop = () => {
      rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18;
      tx += (dx - tx) * 0.35; ty += (dy - ty) * 0.35;
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
  return (<><div ref={ringRef} className="cursor-ring" /><div ref={dotRef} className="cursor-dot" /></>);
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return <motion.div className="scroll-progress" style={{ scaleX, width: "100%" }} />;
}

export function MagneticButton({ children, strength = 0.35 }) {
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

export function Reveal({ children, delay = 0, y = 40, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

export function Counter({ from = 0, to, suffix = "", duration = 1.6 }) {
  const [val, setVal] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start; const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, from, to, duration]);
  const display = Number.isInteger(to) ? Math.round(val) : val.toFixed(1);
  return <span ref={ref}>{display}{suffix}</span>;
}

export function Stat({ value, label, mini = false }) {
  const parsed = String(value).match(/([\d.]+)(.*)/);
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

export function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" data-cursor="hover" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-2xl shadow-green-900/40 flex items-center justify-center hover:scale-110 transition-transform">
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/><path d="M12.014 2C6.483 2 2 6.483 2 12.014c0 1.755.462 3.472 1.34 4.983L2 22l5.145-1.324a10.017 10.017 0 0 0 4.869 1.234c5.53 0 10.014-4.483 10.014-10.014S17.545 2 12.014 2zm0 18.198a8.169 8.169 0 0 1-4.164-1.14l-.298-.174-3.095.797.828-3.02-.198-.322A8.16 8.16 0 0 1 3.832 12.014c0-4.517 3.665-8.182 8.182-8.182S20.196 7.497 20.196 12.014s-3.665 8.184-8.182 8.184z"/></svg>
    </a>
  );
} 


export function Logo({ small = false }) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src={LogoImage}
        alt="Logo"
        className={small ? "h-24 w-auto" : "h-24 w-auto"}
        priority
      />
    </Link>
  );
}
