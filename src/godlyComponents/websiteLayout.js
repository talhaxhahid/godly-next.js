"use client";
import React from "react";
// import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
// import Faq from "./faq";
// import Services from "@/data/servicesData";

export default function WebsiteLayout({ children }) {
  // const pathname = usePathname();
  // const isBlogsPage = pathname === "/blogs" || pathname.startsWith("/blog/");
  // const servicesKeys = Object.keys(Services);
  // const isServicePage = servicesKeys.some((key) =>
  //   pathname.includes(`/${key}`),
  // );

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#1e1c1b] antialiased">
      <Header />
      {children}
      {/* {!isBlogsPage && !isServicePage && <Faq />} */}
      <Footer />
    </div>
  );
}
