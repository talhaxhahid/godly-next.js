"use client";
import React, { useState, useEffect } from "react";
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

const ServicePopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle className="hidden">Our Services</DialogTitle>
      </DialogHeader>
      <DialogContent
        className="] top-75 z-[9999] w-full min-w-[1095px] overflow-y-auto bg-[#faedde] bg-cover bg-center bg-no-repeat bg-blend-multiply"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="grid w-full min-w-[1045px] grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              href={"/services/" + service.link}
              key={index}
              className="hover:bg-[#2D2B2B]"
            >
              <div
                key={index}
                className="group flex min-h-18 flex-row items-start gap-[6px] gap-y-0 border-b-[1.5px] border-[#8d8477] text-[#2D2B2B] transition-all hover:text-[#FDE4C8]"
              >
                <div className="flex items-center justify-start gap-[6px]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={27}
                    height={27}
                    className="group-hover:filter-[invert(1)]"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-sm leading-tight font-normal">
                    {service.name}
                  </h3>
                  <p className="font-['satoshi-light'] text-xs font-light">
                    {service.description}
                  </p>
                </div>
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
        className="top-65 z-[9999] max-h-[90vh] max-w-[180vw] overflow-y-auto bg-[#faedde] bg-cover bg-center bg-no-repeat bg-blend-multiply sm:max-w-[95vw] lg:max-w-[180vh]"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="grid w-full grid-cols-1 gap-1 gap-y-4 sm:grid-cols-4 lg:grid-cols-5">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col gap-1 border-b-1 border-[#8d8477] p-4 py-1 transition-all hover:bg-[#2D2B2B]"
              onClick={() => {
                setCity(city);
                onOpenChange(false);
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <MapPin className="group-hover:filter-[invert(1)]" size={20} />
                <h3 className="text-xs leading-tight font-normal text-[#2D2B2B] group-hover:text-[#FDE4C8]">
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

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className="godlyheader w-full p-4 text-white"
      style={{ position: "fixed", top: "0", zIndex: "100" }}
    >
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-[30px]">
          <div className="header-logo mb-2 md:mb-0">
            <Link href="/">
              <Image src={logo} alt="Logo" className="header-logo" />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-x-6 text-[#FDE4C8]">
              <li>
                <button
                  onClick={() => setServicesOpen(true)}
                  className="text-md flex cursor-pointer items-end gap-1 text-[#FDE4C8] hover:text-[#FFCA8F]"
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
                  className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/#promise"
                  className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
                >
                  OUR PROMISE
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
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
              className="text-md flex items-end gap-1 text-[#FDE4C8] hover:text-[#FFCA8F]"
            >
              <MapPinHouse strokeWidth={1.2} size={18} />
              <div className="border-b-1 border-solid border-[#FDE4C8] font-sans text-xs font-semibold">
                {city}
              </div>{" "}
              <span>
                <ChevronDown size={18} />
              </span>
            </button>
            <div className="flex items-center gap-4 px-4 py-2 text-[#F3C99D]">
              <div className="iconbox rounded-md border-2 border-solid border-[#403830] bg-[#1e1c1b] p-2">
                <Phone className="h-10 w-6 text-[#F3C99D]" strokeWidth={1.2} />
              </div>
              <div>
                <p className="text-xs leading-none font-normal">CALL US</p>
                <p className="text-lg font-normal">954-852-5236</p>
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
