import React from "react";
import WebsiteLayout from "./websiteLayout";
import ServicesHero from "./servicesHero";
import ServiceIncludes from "./serviceInculdes";
import OtherServices from "./otherServices";
import ChooseUs from "./chooseUs";
import EssentialService from "./serviceEssential";
import ServiceNearYou from "./serviceNearYou";
import Faq from "./faq";

export default function ServicesPage({ slug }) {
  return (
    <WebsiteLayout>
      <ServicesHero slug={slug} />
      <ServiceIncludes slug={slug} />
      <EssentialService slug={slug} />
      <ServiceNearYou slug={slug} />
      <ChooseUs />
      <Faq />
      <OtherServices />
    </WebsiteLayout>
  );
}
