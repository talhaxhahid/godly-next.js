import React from "react";
import Header from "./header";
import Footer from "./footer";
import Faq from "./faq";

export default function WebsiteLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#1e1c1b] antialiased">
      <Header />
      {children}
      <Faq />
      <Footer />
    </div>
  );
}
