"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceButton from "@/components/servicebutton";
import Image from "next/image";
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
import exteriorWindowColor from "@/assets/homepageServices/exterior_window_color.png";
import interiorWindowColor from "@/assets/homepageServices/interior_window_color.png";
import gutterCleaningColor from "@/assets/homepageServices/gutter_cleaning_color.png";
import houseWashingColor from "@/assets/homepageServices/house_washing_color.png";
import roofWashingColor from "@/assets/homepageServices/roof_washing_color.png";
import pressureWashingColor from "@/assets/homepageServices/pressure_washing_color.png";
import highDustingColor from "@/assets/homepageServices/high_dusting_color.png";
import lightFixturesColor from "@/assets/homepageServices/light_fixture_color.png";
import screenCleansColor from "@/assets/homepageServices/screen_cleans_color.png";
import skylightsColor from "@/assets/homepageServices/sky_light_color.png";
import solarPanelsColor from "@/assets/homepageServices/solor_panels_color.png";
import sealCoatingColor from "@/assets/homepageServices/seal_coating_color.png";
import textWaveBg from "@/assets/text-bg-wave.png";
import Cap from "@/assets/santaCap.png";
import SantaBg from "@/assets/bg-sparkels.png";
import Santa from "@/assets/santa.png";

const Services = () => {
  const { city } = useGodlyContext();
  return (
    <div className="relative paper-bg-16 ">
      <div className="flex flex-col items-center  min-h-screen px-6 py-24 gap-20">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-[#FDE4C8] text-center text-xl font-['luminaire-script'] transform rotate-[-11deg]  underline">
            We are
          </h1>
          <div className="flex gap-2 items-center justify-center">
            <h4 className="text-[#FFFFFF] text-7xl text-center  tracking-[4px]   max-w-[600px]">
              MORE THAN <span className="text-xl">JUST</span> WINDOWS WASHERS
            </h4>
          </div>

          <p className="font-sans text-3xl text-[#FFFFFF94] text-center font-light ">
            Godly can clean nearly all components of <br /> your home or
            building&apos;s exterior.
          </p>
        </div>
        <ServicesGrid />
      </div>
      <div
        className="paper-bg-16 flex flex-col items-center justify-center gap-20 p-6 bg-bottom bg-no-repeat bg-contain bg-blend-soft-light"
        // style={{ backgroundImage: `url(${SantaBg.src})` }}
      >
        <Image
          className="absolute opacity-25 "
          src={SantaBg}
          height={"80%"}
          width={"80%"}
          alt="cap"
        />
        <div className="flex flex-col gap-9 items-center justify-center max-w-[942px] min-h-[70vh]">
          <div className="flex flex-col gap-9 items-center justify-center ">
            <div className="relative">
              <h4 className="text-[#FDE4C8] text-9xl text-center leading-tight font-['satoshi-black'] tracking-wide relative  ">
                Holiday Light Installation
              </h4>
              <Image
                src={Cap}
                height={102}
                width={102}
                alt="cap"
                className="absolute -top-8 -left-3 pointer-events-none"
              />

              <div className="absolute text-sm bottom-0 right-15 rounded-[] text-black px-2 text-nowrap">
                <div className="relative">
                  <Image
                    src={textWaveBg}
                    height={400}
                    width={400}
                    alt="cap"
                    className="w-[calc(100%_+_32px)] absolute left-0 top-1/2 -translate-y-1/2 z-10"
                  />
                  <p className="z-20 relative mx-2 -rotate-5 pb-0.5">{city}</p>
                </div>
              </div>
            </div>
            <p className="font-['satoshi-light'] font-light tracking-wide text-lg text-[#FDE4C8] text-center max-w-[600px]">
              {" "}
              Christmas light installation, done for you. Forget the ladder and
              the hassle of storing lights each year. Let us light up your home
              or business once, and you will never want to go back to doing it
              yourself.
            </p>
            <Button className="hover:bg-white cursor-pointer bg-white text-black font-sans rounded-sm py-2 mt-5 mb-25">
              What We Offer
            </Button>
          </div>
        </div>
      </div>
      <Image
        className="absolute bottom-0 pointer-events-none"
        src={Santa}
        height={"100%"}
        width={"100%"}
        alt="cap"
      ></Image>
    </div>
  );
};

export default Services;

const services = [
  {
    name: "Exterior Windows",
    image: exteriorWindow,
    hoverImage: exteriorWindowColor,
    description:
      "It’s what we do best! Get rid of that nasty build-up of nature’s mildew and grime.",
  },
  {
    name: "Interior Windows",
    image: interiorWindow,
    hoverImage: interiorWindowColor,
    description:
      "Pet slobber, fingerprints, and so much more can leave residue that is tricky to get off.",
  },
  {
    name: "Gutter Cleaning",
    image: gutterCleaning,
    hoverImage: gutterCleaningColor,
    description:
      "A thorough cleaning that is guaranteed to keep them flowing freely.",
  },
  {
    name: "House Washing",
    image: houseWashing,
    hoverImage: houseWashingColor,
    description:
      "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
  },
  {
    name: "Roof Washing",
    image: roofWashing,
    hoverImage: roofWashingColor,
    description:
      "Removing all the debris from your roof is the easiest way to increase its longevity.",
  },
  {
    name: "Pressure & Soft Washing",
    image: pressureWashing,
    hoverImage: pressureWashingColor,
    description:
      "Get rid of the slippery film and gunk on your driveway, walkways, porches, pool areas, and more.",
  },
  {
    name: "High Dusting",
    image: highDusting,
    hoverImage: highDustingColor,
    description:
      "Eliminate the cobwebs and dust in those hard to reach corners.",
  },
  {
    name: "Light Fixtures",
    image: lightFixtures,
    hoverImage: lightFixturesColor,
    description:
      "Keep both your interior and exterior lighting bright with thorough cleanings of your lanterns, sconces, and more.",
  },
  {
    name: "Screen Cleans",
    image: screenCleans,
    hoverImage: screenCleansColor,
    description:
      "Our special solution and professional equipment leaves window screens & pool screen enclosures looking brand new.",
  },
  {
    name: "Skylights",
    image: skylights,
    hoverImage: skylightsColor,
    description:
      "Nearly impossible and slightly dangerous to reach, leave it to Godly to keep your skylights in top-notch shape.",
  },
  {
    name: "Solar Panels",
    image: solarPanels,
    hoverImage: solarPanelsColor,
    description:
      "Dirty solar panels lead to less efficient energy absorption — keep them clean and running to their full potential.",
  },
  {
    name: "Seal Coating",
    image: sealCoating,
    hoverImage: sealCoatingColor,
    description:
      "Clean, sand, and seal your driveway/parking lot to protect against oils and other damaging elements.",
  },
];

function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:px-20 sm:px-10">
      {services.map((service, idx) => (
        <Card
          key={idx}
          className="group hover:border-[#382f2d] p-0 hover:bg-[#382f2d] bg-[#E9E5E4] rounded-sm transition-transform duration-300 hover:rotate-[3deg] relative"
        >
          <CardContent className="px-4 py-8 max-w-[360px] flex flex-col gap-4">
            <div className="relative w-12 h-12">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-contain group-hover:hidden"
              />
              <Image
                src={service.hoverImage}
                alt={`${service.name} color`}
                fill
                className="object-contain hidden group-hover:block"
              />
            </div>

            <h3 className="text-2xl font-bold text-[#1c1c1c] font-['satoshi-black'] group-hover:text-white">
              {service.name}
            </h3>
            <p className="text-base font-normal font-sans text-[#1f1d1d] group-hover:text-white">
              {service.description}
            </p>

            <div className="absolute top-2 right-2 hidden group-hover:block">
              <ServiceButton />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
