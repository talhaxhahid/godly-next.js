"use client";

import React, { useEffect } from "react";
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
import { useGodlyContext } from "@/context/godlyContext";

import { citiesMap } from "./header/CitiesPopup";

export default function GodlyHome({ city }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (Object.keys(citiesMap).includes(city)) {
      const formattedCity = citiesMap[city];
      setCity(formattedCity);
    }
  }, [city, setCity]);

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
