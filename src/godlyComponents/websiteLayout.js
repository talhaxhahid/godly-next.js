import React from 'react';
import Header from './header';
import Footer from './footer';
import Faq from './faq';


export default function WebsiteLayout({ children }) {
  return (
    <div className="websiteLayout">
        <Header/>
        {children}
        <Faq/>
        <Footer/>
    </div>
  );
}
