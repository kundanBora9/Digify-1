"use client";
import { Toaster } from "sonner";
import Navbar from "@/components/site/nav";
import Footer from "@/components/site/footer";
import { CursorGlow, ScrollProgress, FloatingWhatsApp } from "@/components/site/fx";

export default function Shell({ children }) {
  return (
    <div className="relative bg-[#08061a] text-white min-h-screen">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}
