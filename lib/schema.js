/* JSON-LD schema.org helpers for SEO */

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://digify4u.com";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: "Digify4u",
  alternateName: "Digify4u Digital Marketing & IT Solutions",
  url: BASE,
  logo: { "@type": "ImageObject", url: `${BASE}/logo.png`, width: 512, height: 512 },
  image: `${BASE}/og-image.jpg`,
  description: "Digify4u is a premium full-service digital marketing and IT solutions agency crafting brands, websites, campaigns and growth engines for ambitious companies.",
  foundingDate: "2018",
  slogan: "IT Solutions & Digital Marketing",
  sameAs: [
    "https://www.instagram.com/digify4u",
    "https://www.facebook.com/digify4u",
    "https://www.linkedin.com/company/digify4u",
    "https://twitter.com/digify4u",
    "https://www.youtube.com/@digify4u",
  ],
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+91-9999999999",
    contactType: "customer service",
    email: "hello@digify4u.com",
    areaServed: ["IN", "AE", "GB", "US", "SG"],
    availableLanguage: ["English", "Hindi"],
  }],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Indiranagar, 100 Feet Road",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560038",
    addressCountry: "IN",
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "Digify4u",
  url: BASE,
  publisher: { "@id": `${BASE}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
});

export const serviceSchema = (s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: s.name,
  name: s.name,
  description: s.desc,
  provider: { "@id": `${BASE}/#organization` },
  areaServed: ["Worldwide"],
  audience: { "@type": "Audience", audienceType: "Businesses & Founders" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: (s.pricing && s.pricing.starting) ? s.pricing.starting.replace(/[^\d]/g, "") || "25000" : "25000",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      price: (s.pricing && s.pricing.starting) || "\u20b925,000",
      valueAddedTaxIncluded: false,
    },
    availability: "https://schema.org/InStock",
  },
  url: `${BASE}/services/${s.slug}`,
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items
    .filter((i) => i && i.label)
    .map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: BASE + it.href } : {}),
    })),
});

export const articleSchema = (post, image) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  image: image ? [image] : undefined,
  author: { "@type": "Person", name: post.author },
  publisher: { "@id": `${BASE}/#organization` },
  datePublished: post.date,
  dateModified: post.date,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
  articleSection: post.category,
  keywords: (post.tags || []).join(", "),
});

export const industrySchema = (d) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: `Digital Marketing for ${d.name}`,
  name: `${d.name} Marketing & IT Solutions`,
  description: d.tagline,
  provider: { "@id": `${BASE}/#organization` },
  areaServed: ["Worldwide"],
  url: `${BASE}/industries/${d.slug}`,
});

export const caseStudySchema = (p, image) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: p.title,
  headline: p.tagline,
  description: p.challenge,
  image: image ? [image] : undefined,
  creator: { "@id": `${BASE}/#organization` },
  about: p.category,
  url: `${BASE}/portfolio/${p.slug}`,
});

export function JsonLd({ data }) {
  if (!data) return null;
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
