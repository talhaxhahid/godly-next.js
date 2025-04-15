"use client";
import { useGodlyContext } from '@/context/godlyContext';
import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceButton from "@/components/servicebutton";
import Image from "next/image"
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
import exteriorWindowColor from "@/assets/homepageServices/exterior_window_color.png"
import interiorWindowColor from "@/assets/homepageServices/interior_window_color.png"
import gutterCleaningColor from "@/assets/homepageServices/gutter_cleaning_color.png"
import houseWashingColor from "@/assets/homepageServices/house_washing_color.png"
import roofWashingColor from "@/assets/homepageServices/roof_washing_color.png"
import pressureWashingColor from "@/assets/homepageServices/pressure_washing_color.png"
import highDustingColor from "@/assets/homepageServices/high_dusting_color.png"
import lightFixturesColor from "@/assets/homepageServices/light_fixture_color.png"
import screenCleansColor from "@/assets/homepageServices/screen_cleans_color.png"
import skylightsColor from "@/assets/homepageServices/sky_light_color.png"
import solarPanelsColor from "@/assets/homepageServices/solor_panels_color.png"
import sealCoatingColor from "@/assets/homepageServices/seal_coating_color.png"
import Cap from "@/assets/santaCap.png"
import SantaBg from "@/assets/santa_bg.png"



const Services = () => {

const { city} = useGodlyContext();
  return (
    <div>
    <div className="flex flex-col items-center bg-[#262424]  min-h-screen px-6 py-24 gap-20">
        <div>
        <h1 className="text-[#F3CA9E] text-center text-xl font-['luminaire-script']  -mt-4 underline">We are</h1>
        <div className="flex gap-2 items-end justify-center">
        <h4 className="text-[#FFFFFF] text-6xl  tracking-wide  ">MORE THAN</h4>
        <h1 className="text-[#FFFFFF] text-xl  tracking-wide">JUST</h1>
        </div>
        <h1 className="text-[#FFFFFF] text-6xl tracking-wide  text-center">WINDOW WASHERS</h1>
        <p className="font-sans text-lg text-[#FFFFFF94] text-center mt-6"> Godly can clean nearly all components of <br></br> your home or buildings exterior.</p>
        </div>
        <ServicesGrid/>
    </div>
    <div className="bg-[#262424] p-6 bg-cover bg-bottom bg-no-repeat bg-blend-soft-light" style={{ backgroundImage: `url(${SantaBg.src})` }}>
    <div className="mb-15">
        
        <div className="flex flex-col gap-2 items-center justify-center ">
        <h4 className="text-[#FDE4C8] text-7xl  tracking-wide relative  ">HOLIDAY Light <Image src={Cap} height={60} width={60} alt="cap" className="absolute -top-3 -left-10"></Image></h4>
        
        
        <h1 className="text-[#FDE4C8] text-7xl tracking-wide  text-center relative">Installation <span className="absolute text-sm -bottom-5 -rotate-5 bg-[#FDE4C8] text-black px-2 w-30">{city}</span></h1>
        <p className="font-sans text-lg text-[#FDE4C8] text-center mt-6 w-120"> Christmas light installation, done for you. Forget the ladder and the hassle of storing lights each year. Let us light up your home or business once, and you will never want to go back to doing it yourself.</p>
        <Button className="hover:bg-white cursor-pointer bg-white text-black font-sans rounded-sm py-2 mt-5 mb-25">What We Offer</Button>
        </div >
    </div>

    </div>
    </div>
  );
};

export default Services;


const services = [
  {
    name: "Exterior Windows",
    image: exteriorWindow,
    hoverImage: exteriorWindowColor,
    description: "It’s what we do best! Get rid of that nasty build-up of nature’s mildew and grime.",
  },
  {
    name: "Interior Windows",
    image: interiorWindow,
    hoverImage: interiorWindowColor,
    description: "Pet slobber, fingerprints, and so much more can leave residue that is tricky to get off.",
  },
  {
    name: "Gutter Cleaning",
    image: gutterCleaning,
    hoverImage: gutterCleaningColor,
    description: "A thorough cleaning that is guaranteed to keep them flowing freely.",
  },
  {
    name: "House Washing",
    image: houseWashing,
    hoverImage: houseWashingColor,
    description: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
  },
  {
    name: "Roof Washing",
    image: roofWashing,
    hoverImage: roofWashingColor,
    description: "Removing all the debris from your roof is the easiest way to increase its longevity.",
  },
  {
    name: "Pressure & Soft Washing",
    image: pressureWashing,
    hoverImage: pressureWashingColor,
    description: "Get rid of the slippery film and gunk on your driveway, walkways, porches, pool areas, and more.",
  },
  {
    name: "High Dusting",
    image: highDusting,
    hoverImage: highDustingColor,
    description: "Eliminate the cobwebs and dust in those hard to reach corners.",
  },
  {
    name: "Light Fixtures",
    image: lightFixtures,
    hoverImage: lightFixturesColor,
    description: "Keep both your interior and exterior lighting bright with thorough cleanings of your lanterns, sconces, and more.",
  },
  {
    name: "Screen Cleans",
    image: screenCleans,
    hoverImage: screenCleansColor,
    description: "Our special solution and professional equipment leaves window screens & pool screen enclosures looking brand new.",
  },
  {
    name: "Skylights",
    image: skylights,
    hoverImage: skylightsColor,
    description: "Nearly impossible and slightly dangerous to reach, leave it to Godly to keep your skylights in top-notch shape.",
  },
  {
    name: "Solar Panels",
    image: solarPanels,
    hoverImage: solarPanelsColor,
    description: "Dirty solar panels lead to less efficient energy absorption — keep them clean and running to their full potential.",
  },
  {
    name: "Seal Coating",
    image: sealCoating,
    hoverImage: sealCoatingColor,
    description: "Clean, sand, and seal your driveway/parking lot to protect against oils and other damaging elements.",
  },
];

  
  
  function ServicesGrid() {
    return (
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-20 sm:px-10">
        {services.map((service, idx) => (
          <Card
          key={idx}
          className="group hover:border-[#382f2d] hover:bg-[#382f2d] bg-[#E9E5E4] rounded-sm transition-transform duration-300 hover:rotate-[3deg] relative"
        >
          <CardContent className="p-4 flex flex-col gap-3">
          <div className="relative w-10 h-10">
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

            <h3 className="text-lg font-normal group-hover:text-white">{service.name}</h3>
            <p className="text-sm text-muted-foreground group-hover:text-white">{service.description}</p>
        
            <div className="absolute top-2 right-2 hidden group-hover:block">
              <ServiceButton />
            </div>
          </CardContent>
        </Card>
        
        
        ))}
      </div>
    )
  }