import React from 'react';
import WebsiteLayout from './websiteLayout';
import ServicesHero from './servicesHero';
import ServiceIncludes from './serviceInculdes';
import OtherServices from './otherServices';
import ChooseUs from './chooseUs';
import EssentialService from './serviceEssential';
import ServiceNearYou from './serviceNearYou';

export default function ServicesPage() {
  return (
   <WebsiteLayout>
    <ServicesHero/>
    <ServiceIncludes/>
    <EssentialService/>
    <ServiceNearYou/>
    <ChooseUs/>
    <OtherServices/>
   </WebsiteLayout>
  );
}
