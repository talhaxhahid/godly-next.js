import React from "react";
import FourStepProcess from "./fourStepProcess";
import HowItWorks from "./howitworks";
import Location from "./location";
import Gurantee from "./gurantee";
import Services from "./services";
import Savings from "./savings";
import Testimonials from "./testimonials";
import Promise from "./promise";
import Hero from "./hero";
import WebsiteLayout from "./websiteLayout";
import TeamGallery from "./teamGallery";

export default function GodlyHome() {
  return (
    <WebsiteLayout>
      <Hero />
      <FourStepProcess />
      <Services />
      <Promise />
      <Gurantee />
      <TeamGallery />
      <Testimonials />
      <HowItWorks />
      <Savings />
      <Location />
    </WebsiteLayout>
  );
}
