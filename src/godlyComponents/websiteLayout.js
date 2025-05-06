"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
import Faq from "./faq";

export default function WebsiteLayout({ children }) {
  const pathname = usePathname();
  const isBlogsPage = pathname === "/blogs" || pathname.startsWith("/blog/");

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#1e1c1b] antialiased">
      <Header />
      {children}
      {!isBlogsPage && <Faq />}
      <Footer />
    </div>
  );
}
