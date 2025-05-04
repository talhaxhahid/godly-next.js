"use client";
import React, { useState, useEffect } from "react";

// Import the new components (adjust paths if necessary)
import Logo from "./header/Logo";
import MobileMenuToggle from "./header/MobileMenuToggle";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import CitySelector from "./header/CitySelector";
import PhoneNumber from "./header/PhoneNumber";
import ServicePopup from "./header/ServicePopup";
import CitiesPopup from "./header/CitiesPopup";
import FormPopup from "./header/FormPopup";
import HeaderButton from "@/components/HeaderButton"; // Keep this import

// Keep data definitions or move to a separate file
import exteriorWindow from "@/assets/homepageServices/exterior_window.webp";
import interiorWindow from "@/assets/homepageServices/interior_window.webp";
import gutterCleaning from "@/assets/homepageServices/gutter_cleaning.webp";
import houseWashing from "@/assets/homepageServices/house_washing.webp";
import roofWashing from "@/assets/homepageServices/roof_washing.webp";
import pressureWashing from "@/assets/homepageServices/pressure_washing.webp";
import highDusting from "@/assets/homepageServices/high_dusting.webp";
import lightFixtures from "@/assets/homepageServices/light_fixtures.webp";
import screenCleans from "@/assets/homepageServices/screen_cleans.webp";
import skylights from "@/assets/homepageServices/sky_light.webp";
import solarPanels from "@/assets/homepageServices/solar_panels.webp";
import sealCoating from "@/assets/homepageServices/seal_coating.webp";

const services = [
  {
    name: "Exterior Windows",
    link: "exterior_windows",
    image: exteriorWindow,
    description:
      "It’s what we do best! Get rid of that nasty build-up of nature’s mildew and grime.",
  },
  {
    name: "Interior Windows",
    link: "interior_windows",
    image: interiorWindow,
    description:
      "Pet slobber, fingerprints, and so much more can leave residue that is tricky to get off.",
  },
  {
    name: "Gutter Cleaning",
    link: "gutter_cleaning",
    image: gutterCleaning,
    description:
      "A thorough cleaning that is guaranteed to keep them flowing freely.",
  },
  {
    name: "House Washing",
    link: "house_washing",
    image: houseWashing,
    description:
      "Wash away years of pollen, mold, rust, and dirt – bringing that shine back to your property’s exterior.",
  },
  {
    name: "Roof Washing",
    link: "roof_washing",
    image: roofWashing,
    description:
      "Removing all the debris from your roof is the easiest way to increase its longevity.",
  },
  {
    name: "Pressure & Soft Washing",
    link: "pressure_washing",
    image: pressureWashing,
    description:
      "Get rid of the slippery film and gunk on your driveway, walkways, porches, pool areas, and more.",
  },
  {
    name: "High Dusting",
    link: "high_dusting",
    image: highDusting,
    description:
      "Eliminate the cobwebs and dust in those hard to reach corners.",
  },
  {
    name: "Light Fixtures",
    link: "light_fixtures",
    image: lightFixtures,
    description:
      "Keep both your interior and exterior lighting bright with thorough cleanings of your lanterns, sconces, and more.",
  },
  {
    name: "Screen Cleans",
    link: "screen_cleans",
    image: screenCleans,
    description:
      "We’ll happily remove, clean, and even replace your screens if necessary.",
  },
  {
    name: "Skylights",
    link: "skylights",
    image: skylights,
    description:
      "Nearly impossible and slightly dangerous to reach, leave it to Godly to keep your skylights in top-notch shape.",
  },
  {
    name: "Solar Panels",
    link: "solar_panels",
    image: solarPanels,
    description:
      "Dirty solar panels lead to less efficient energy absorption – keep them clean and running to their full potential. ",
  },
  {
    name: "Seal Coating",
    link: "seal_coating",
    image: sealCoating,
    description:
      "Add a protective coating to your driveway/parking lot that protects against water, oils, and other damaging elements.",
  },
];
const cities = [
  "LAUDERDALE-BY-THE-SEL",
  "WELLINGTON",
  "PEMBROKE PINES",
  "WORTH PALM BEACH",
  "COGNIT CRESK",
  "POUNDED BEACH",
  "BOTAL PALM BEACH",
  "MARGATE",
  "TANJOLIC",
  "NIPPTER",
  "ROYAL PALM BEACH",
  "OAKLAND PARK",
  "SUNRISE",
  "CORALLIGHTROUSE POINT SPRINGS",
  "ROPE A BATCH",
  "LUNDERNAL",
  "PLANTATION",
  "JOHN HOSSE POWN",
  "WESTON",
  "PALM BEACH GARDENS",
  "HIRAJAR",
  "CORAL SPRINGS",
  "WEST PALM BEACH",
  "PEMBROKE PINES",
  "SOUTH FLORIDA",
];

const Header = () => {
  // Keep state definitions
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formPopupOpen, setFormPopupOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Define handlers to pass down
  const handleServicesClick = () => {
    setServicesOpen(true);
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  const handleCitiesClick = () => {
    setCitiesOpen(true);
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  const handleQuoteClick = () => {
    setFormPopupOpen(true);
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div
        className="godlyheader w-full bg-[#252323] p-4 text-white md:px-6 md:py-0"
        style={{ position: "fixed", top: "0", zIndex: "100" }}
      >
        <div className="flex w-full flex-col items-center justify-between gap-4 bg-[#252323] md:flex-row">
          {/* Left side: Logo, Mobile Toggle, Desktop Nav */}
          <div className="flex w-full items-center justify-between bg-[#252323] md:max-h-[80px] md:w-auto md:justify-start md:gap-[30px]">
            <Logo />
            <MobileMenuToggle
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
              hidden={mobileMenuOpen}
            />
            <DesktopNav onServicesClick={handleServicesClick} />
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <>
              <MobileNav
                onServicesClick={handleServicesClick}
                onCitiesClick={handleCitiesClick}
                onQuoteClick={handleQuoteClick}
                onLinkClick={handleMobileLinkClick}
              />
              <MobileMenuToggle
                isOpen={mobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </>
          )}

          {/* Right side: Desktop Contact Info & Quote Button */}
          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center gap-1">
              {/* Use CitySelector component */}
              <CitySelector onClick={handleCitiesClick} />
              {/* Use PhoneNumber component */}
              <PhoneNumber />
            </div>
            {/* Use HeaderButton component */}
            <HeaderButton onClick={handleQuoteClick} />
          </div>
        </div>
      </div>

      {/* Render Popups */}
      <ServicePopup
        open={servicesOpen}
        onOpenChange={setServicesOpen}
        services={services}
      />
      <CitiesPopup
        open={citiesOpen}
        onOpenChange={setCitiesOpen}
        cities={cities}
      />
      <FormPopup open={formPopupOpen} onOpenChange={setFormPopupOpen} />
    </>
  );
};

export default Header;
