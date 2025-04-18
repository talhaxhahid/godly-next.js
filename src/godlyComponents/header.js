"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "@/styles/header.css";
import { Phone, ChevronDown, MapPinHouse, MapPin } from "lucide-react";
import Link from "next/link";
import HeaderButton from "@/components/HeaderButton";
import background from "../assets/texture.png";
import { useGodlyContext } from "@/context/godlyContext";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import exteriorWindow from "@/assets/homepageServices/exterior_window.png";
import interiorWindow from "@/assets/homepageServices/interior_window.png";
import gutterCleaning from "@/assets/homepageServices/gutter_cleaning.png";
import houseWashing from "@/assets/homepageServices/house_washing.png";
import roofWashing from "@/assets/homepageServices/roof_washing.png";
import pressureWashing from "@/assets/homepageServices/pressure_washing.png";
import highDusting from "@/assets/homepageServices/high_dusting.png";
import lightFixtures from "@/assets/homepageServices/light_fixtures.png";
import screenCleans from "@/assets/homepageServices/screen_cleans.png";
import skylights from "@/assets/homepageServices/sky_light.png";
import solarPanels from "@/assets/homepageServices/solar_panels.png";
import sealCoating from "@/assets/homepageServices/seal_coating.png";

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
      "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
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
      "Our special solution and professional equipment leaves window screens & pool screen enclosures looking brand new.",
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
      "Dirty solar panels lead to less efficient energy absorption — keep them clean and running to their full potential.",
  },
  {
    name: "Seal Coating",
    link: "seal_coating",
    image: sealCoating,
    description:
      "Clean, sand, and seal your driveway/parking lot to protect against oils and other damaging elements.",
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

const ServicePopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle className="hidden">Our Services</DialogTitle>
      </DialogHeader>
      <DialogContent
        className=" max-h-[90vh] overflow-y-auto  max-w-[180vw] sm:max-w-[95vw] lg:max-w-[180vh] z-[9999] top-75 bg-[#faedde] bg-blend-multiply bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {services.map((service, index) => (
            <Link href={"/services/" + service.link} key={index}>
              <div
                key={index}
                className="flex flex-col gap-1 border-b-[1.5px] gap-y-0 border-[#8d8477] p-4 py-0  transition-all min-h-18"
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
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
const CitiesPopup = ({ open, onOpenChange }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { city, setCity } = useGodlyContext();
  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle className="hidden">Our Services</DialogTitle>
      </DialogHeader>
      <DialogContent
        className=" max-h-[90vh] overflow-y-auto  max-w-[180vw] sm:max-w-[95vw] lg:max-w-[180vh] z-[9999] top-65 bg-[#faedde] bg-blend-multiply bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="grid w-full grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6 pt-6 gap-y-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 border-b-1 border-[#8d8477]  p-4 py-1  transition-all cursor-pointer"
              onClick={() => {
                setCity(city);
                onOpenChange(false);
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <MapPin size={20} />
                <h3 className="text-xs font-normal leading-tight text-[#2D2B2B]">
                  {city}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Header = () => {
  const { city } = useGodlyContext();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  return (
    <div
      className="p-4 text-white godlyheader w-full"
      style={{ position: "fixed", top: "0", zIndex: "100" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-[30px]">
          <div className="header-logo mb-2 md:mb-0">
            <Link href="/">
              <Image src={logo} alt="Logo" className="header-logo" />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-x-6 text-[#FDE4C8] ">
              <li>
                <button
                  onClick={() => setServicesOpen(true)}
                  className="hover:text-gray-300 text-md text-[#FDE4C8] flex gap-1 items-end"
                >
                  SERVICES{" "}
                  <span>
                    <ChevronDown size={18} />
                  </span>
                </button>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-gray-300 text-md text-[#FDE4C8]"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/#promise"
                  className="hover:text-gray-300 text-md text-[#FDE4C8]"
                >
                  OUR PROMISE
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="hover:text-gray-300 text-md text-[#FDE4C8]"
                >
                  OUR PROCESS
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCitiesOpen(true)}
              className="hover:text-gray-300 text-md text-[#FDE4C8] flex gap-1 items-end"
            >
              <MapPinHouse strokeWidth={1.2} size={18} />
              <div className="border-solid border-[#FDE4C8] border-b-1 font-sans text-xs font-semibold ">
                {city}
              </div>{" "}
              <span>
                <ChevronDown size={18} />
              </span>
            </button>
            <div className="flex items-center gap-4 px-4 py-2 text-[#F3C99D]">
              <div className="p-2 iconbox bg-[#1e1c1b] rounded-md border-solid border-[#403830] border-2">
                <Phone className="text-[#F3C99D] w-6 h-10" strokeWidth={1.2} />
              </div>
              <div>
                <p className="text-xs font-normal leading-none">CALL US</p>
                <p className="text-lg font-normal ">954-852-5236</p>
              </div>
            </div>
          </div>
          <HeaderButton />
        </div>
      </div>

      {/* Services Popup */}
      <ServicePopup open={servicesOpen} onOpenChange={setServicesOpen} />
      <CitiesPopup open={citiesOpen} onOpenChange={setCitiesOpen} />
    </div>
  );
};

export default Header;
