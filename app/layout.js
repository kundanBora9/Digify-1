import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://digify4u.com";

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Digify4u — IT Solutions & Digital Marketing Agency",
    template: "%s · Digify4u",
  },
  description:
    "Digify4u is a premium full-service digital marketing and IT solutions agency. We craft world-class websites, brands, campaigns and growth systems for ambitious companies.",
  keywords: ["Digify4u", "Digital Marketing Agency", "IT Solutions", "SEO Agency India", "Web Development", "Performance Marketing", "Branding", "AI Automation", "Shopify Development", "WordPress Development", "Meta Ads", "Google Ads"],
  authors: [{ name: "Digify4u" }],
  creator: "Digify4u",
  publisher: "Digify4u",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Digify4u",
    title: "Digify4u — IT Solutions & Digital Marketing Agency",
    description: "Premium full-service digital agency crafting brands, websites and growth engines.",
    url: BASE,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digify4u — Premium Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digify4u — IT Solutions & Digital Marketing",
    description: "Premium full-service digital agency crafting brands, websites and growth engines.",
    images: ["/og-image.jpg"],
    creator: "@digify4u",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body>{children}</body>
    </html>
  );
}
