"use client";

import React from "react";
import WebsiteLayout from "./websiteLayout";
import ServicesHero from "./servicesHero";
import ServiceIncludes from "./serviceInculdes";
import OtherServices from "./otherServices";
import ChooseUs from "./chooseUs";
import EssentialService from "./serviceEssential";
import ServiceNearYou from "./serviceNearYou";
// import Faq from "./faq";
import { useEffect } from "react";
import { useGodlyContext } from "@/context/godlyContext";

import { citiesMap } from "./header/CitiesPopup";

export default function ServicesPage({ slug, city }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (Object.keys(citiesMap).includes(city)) {
      const formattedCity = citiesMap[city];
      setCity(formattedCity);
    }
  }, [city, setCity]);
  return (
    <WebsiteLayout>
      <ServicesHero slug={slug} />
      <ServiceIncludes slug={slug} />
      <EssentialService slug={slug} />
      <ServiceNearYou slug={slug} />
      <ChooseUs />
      {/* <Faq /> */}
      <OtherServices />
    </WebsiteLayout>
  );
}
