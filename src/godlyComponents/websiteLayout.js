import React from 'react';
import Header from './header';
import FourStepProcess from './fourStepProcess';
import HowItWorks from './howitworks';
import Location from './location';
import Footer from './footer';
import Faq from './faq';
import Gurantee from './gurantee';

export default function WebsiteLayout() {
  return (
    <div className="websiteLayout">
        <Header/>
        <FourStepProcess/>
        <HowItWorks/>
        <Location/>
        <Gurantee/>
        <Faq/>
        <Footer/>
      
    </div>
  );
}
