import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Digify4u — IT Solutions & Digital Marketing Agency",
  description:
    "Digify4u is a premium full-service digital marketing and IT solutions agency. We craft world-class websites, brands, campaigns and growth systems for ambitious companies.",
  keywords: [
    "Digify4u",
    "Digital Marketing Agency",
    "IT Solutions",
    "SEO",
    "Web Development",
    "Performance Marketing",
    "Branding",
    "AI Automation",
  ],
  openGraph: {
    title: "Digify4u — IT Solutions & Digital Marketing",
    description:
      "Premium full-service digital agency crafting brands, websites and growth engines.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Digify4u" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
