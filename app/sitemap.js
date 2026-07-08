import { services, industriesList, portfolio, blogs } from "@/lib/site-data";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://digify4u.com";

export default function sitemap() {
  const now = new Date();
  const staticPages = [
    { path: "", pri: 1.0, freq: "weekly" },
    { path: "/about", pri: 0.9, freq: "monthly" },
    { path: "/services", pri: 0.95, freq: "weekly" },
    { path: "/industries", pri: 0.9, freq: "monthly" },
    { path: "/portfolio", pri: 0.9, freq: "weekly" },
    { path: "/case-studies", pri: 0.85, freq: "weekly" },
    { path: "/blog", pri: 0.9, freq: "daily" },
    { path: "/pricing", pri: 0.8, freq: "monthly" },
    { path: "/contact", pri: 0.7, freq: "yearly" },
  ];
  const entries = [
    ...staticPages.map((p) => ({ url: `${BASE}${p.path}`, lastModified: now, changeFrequency: p.freq, priority: p.pri })),
    ...services.map((s) => ({ url: `${BASE}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })),
    ...industriesList.map((i) => ({ url: `${BASE}/industries/${i.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.75 })),
    ...portfolio.map((p) => ({ url: `${BASE}/portfolio/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })),
    ...blogs.map((b) => ({ url: `${BASE}/blog/${b.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.7 })),
  ];
  return entries;
}
