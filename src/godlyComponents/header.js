"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "@/styles/header.css";
import { Phone } from "lucide-react";
import Link from 'next/link';
import HeaderButton from "@/components/HeaderButton";
import background from "../assets/texture.png";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import exteriorWindow from "@/assets/homepageServices/exterior_window.png"
import interiorWindow from "@/assets/homepageServices/interior_window.png"
import gutterCleaning from "@/assets/homepageServices/gutter_cleaning.png"
import houseWashing from "@/assets/homepageServices/house_washing.png"
import roofWashing from "@/assets/homepageServices/roof_washing.png"
import pressureWashing from "@/assets/homepageServices/pressure_washing.png"
import highDusting from "@/assets/homepageServices/high_dusting.png"
import lightFixtures from "@/assets/homepageServices/light_fixtures.png"
import screenCleans from "@/assets/homepageServices/screen_cleans.png"
import skylights from "@/assets/homepageServices/sky_light.png"
import solarPanels from "@/assets/homepageServices/solar_panels.png"
import sealCoating from "@/assets/homepageServices/seal_coating.png"

const services = [
  {
    name: "Exterior Windows",
    image: exteriorWindow,
    description: "It’s what we do best! Get rid of that nasty build-up of nature’s mildew and grime.",
  },
  {
    name: "Interior Windows",
    image: interiorWindow,
    description: "Pet slobber, fingerprints, and so much more can leave residue that is tricky to get off.",
  },
  {
    name: "Gutter Cleaning",
    image: gutterCleaning,
    description: "A thorough cleaning that is guaranteed to keep them flowing freely.",
  },
  {
    name: "House Washing",
    image: houseWashing,
    description: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
  },
  {
    name: "Roof Washing",
    image: roofWashing,
    description: "Removing all the debris from your roof is the easiest way to increase its longevity.",
  },
  {
    name: "Pressure & Soft Washing",
    image: pressureWashing,
    description: "Get rid of the slippery film and gunk on your driveway, walkways, porches, pool areas, and more.",
  },
  {
    name: "High Dusting",
    image: highDusting,
    description: "Eliminate the cobwebs and dust in those hard to reach corners.",
  },
  {
    name: "Light Fixtures",
    image: lightFixtures,
    description: "Keep both your interior and exterior lighting bright with thorough cleanings of your lanterns, sconces, and more.",
  },
  {
    name: "Screen Cleans",
    image: screenCleans,
    description: "Our special solution and professional equipment leaves window screens & pool screen enclosures looking brand new.",
  },
  {
    name: "Skylights",
    image: skylights,
    description: "Nearly impossible and slightly dangerous to reach, leave it to Godly to keep your skylights in top-notch shape.",
  },
  {
    name: "Solar Panels",
    image: solarPanels,
    description: "Dirty solar panels lead to less efficient energy absorption — keep them clean and running to their full potential.",
  },
  {
    name: "Seal Coating",
    image: sealCoating,
    description: "Clean, sand, and seal your driveway/parking lot to protect against oils and other damaging elements.",
  },
];

const ServicePopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>

    <DialogTitle className="hidden">Our Services</DialogTitle>
  
</DialogHeader>
      <DialogContent className=" max-h-[90vh] overflow-y-auto  max-w-[180vw] sm:max-w-[95vw] lg:max-w-[180vh] z-[9999] top-80 bg-[#FDE4C8] bg-blend-overlay bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background.src})` }}>
        
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 border-b-2 border-[#312E2C80]  p-4 py-1  transition-all"
            >
              <div className="flex items-center justify-start gap-3">
              <Image
                src={service.image}
                alt={service.name}
                width={20}
                height={20}
              />
              <h3 className="text-sm font-normal leading-tight">
                {service.name}
              </h3>
              </div>
              <p className="text-xs text-muted-foreground font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="p-4 text-white godlyheader w-full" style={{ position: 'fixed', top: '0', zIndex: '100' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-[30px]">
          <div className="header-logo mb-2 md:mb-0">
            <Link href="/">
            <Image src={logo} alt="Logo" className="header-logo" />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-x-6 text-[#F3C99D] ">
              <li>
                <button
                  onClick={() => setServicesOpen(true)}
                  className="hover:text-gray-300 text-md text-[#F3C99D]"
                >
                  SERVICES
                </button>
              </li>
              <li>
              <Link href="/#about" className="hover:text-gray-300 text-md text-[#F3C99D]">
               
                  ABOUT US
                
              </Link>
              </li>
              <li>
              <Link href="/#promise" className="hover:text-gray-300 text-md text-[#F3C99D]">
                  OUR PROMISE
                </Link>
              </li>
              <li>
              <Link href="/#process" className="hover:text-gray-300 text-md text-[#F3C99D]">
                  OUR PROCESS
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-4 px-4 py-2 text-[#F3C99D]">
            <div className="p-2 iconbox bg-[#1e1c1b] rounded-md">
              <Phone className="text-[#F3C99D] w-6 h-10" />
            </div>
            <div>
              <p className="text-xs font-semibold leading-none">CALL US</p>
              <p className="text-lg font-bold ">(954) 852 - 5236</p>
            </div>
          </div>
          <HeaderButton />
        </div>
      </div>

      {/* Services Popup */}
      <ServicePopup open={servicesOpen} onOpenChange={setServicesOpen} />
    </div>
  );
};

export default Header;
