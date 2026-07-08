"use client";
import { useEffect, useRef, useState, Suspense } from "react";
import { usePathname } from "next/navigation";

function NavLoaderInner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(null);
  const startTimeRef = useRef(0);

  // When pathname changes — complete the loader
  useEffect(() => {
    if (visible) {
      setProgress(100);
      const t1 = setTimeout(() => setVisible(false), 350);
      const t2 = setTimeout(() => setProgress(0), 700);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Intercept link clicks
  useEffect(() => {
    const onClick = (e) => {
      // Ignore if modifier keys (open in new tab)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const link = e.target?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href");
      const target = link.getAttribute("target");
      if (!href) return;
      if (target === "_blank") return;
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return;
      // Skip if same route
      const currentPath = window.location.pathname;
      if (href === currentPath) return;

      targetRef.current = href;
      startTimeRef.current = Date.now();
      setVisible(true);
      setProgress(15);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Simulated progress
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 88) return p;
        // Ease-out increments
        return p + Math.max(1, (88 - p) * 0.12);
      });
    }, 220);
    // Safety timeout so it doesn't hang if navigation gets cancelled
    const safety = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setVisible(false), 350);
    }, 12000);
    return () => { clearInterval(interval); clearTimeout(safety); };
  }, [visible]);

  return (
    <>
      <div
        className="nav-loader-bar"
        style={{ width: `${progress}%`, opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
      {visible && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9998] pointer-events-none">
          <div className="flex items-center gap-2.5 glass-strong rounded-full px-4 py-2 text-sm text-white border border-white/10 shadow-2xl shadow-purple-900/40">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-brand-glow border-t-transparent animate-spin" />
            <span className="font-medium tracking-wide">Loading…</span>
          </div>
        </div>
      )}
    </>
  );
}

export default function NavLoader() {
  return (
    <Suspense fallback={null}>
      <NavLoaderInner />
    </Suspense>
  );
}
