"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React, { useState } from "react";
import Link from "next/link";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import { citiesMap } from "./header/CitiesPopup";

import service10 from "@/assets/serviceData/service10.webp";
import service12 from "@/assets/serviceData/service12.webp";
import service2 from "@/assets/serviceData/service2.webp";
import service9 from "@/assets/serviceData/service9.webp";

const steps = [
  {
    number: "01",
    title: "Screen Cleaning",
    link: "screen_cleans",
    Image: service10,
  },
  {
    number: "02",
    title: "Exterior Window Cleaning",
    link: "exterior_windows",
    Image: service2,
  },
  {
    number: "03",
    title: "SKYLIGHT CLEANING",
    link: "skylights",
    Image: service9,
  },
  {
    number: "04",
    title: "HIGH DUSTING",
    link: "high_dusting",
    Image: service12,
  },
];

const OtherServices = () => {
  const { city } = useGodlyContext();
  const [activeCard, setActiveCard] = useState(null);

  const cityKey = Object.keys(citiesMap).find((key) => citiesMap[key] === city);

  const handleCardClick = (index, e) => {
    if (activeCard !== index) {
      e.preventDefault();
      setActiveCard(index);
    } else {
      setActiveCard(null);
    }
  };

  return (
    <div
      id="promise"
      className="paper-bg-16 flex flex-col items-center justify-center justify-items-center gap-10 bg-[#ebded1] bg-cover bg-center bg-no-repeat p-4 pb-24 bg-blend-multiply md:p-24 md:pt-0 md:pb-42"
    >
      <h4 className="trim py-10 text-center text-[32px] leading-tight font-normal tracking-wide text-[#191717] md:max-w-[1200px] md:text-[64px]">
        enhance your cleaning with other services we offer in {city}
      </h4>

      <div className="grid w-full max-w-screen-xl grid-cols-2 gap-10 px-4 py-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((step, index) => (
          <Link
            href={`/${cityKey}/${step.link}`}
            key={index}
            onClick={(e) => handleCardClick(index, e)}
          >
            <div
              key={index}
              className={`transform transition-transform duration-300 ${
                index % 2 === 0
                  ? activeCard === index
                    ? "rotate-0"
                    : "rotate-[3deg] hover:rotate-0"
                  : activeCard === index
                    ? "rotate-0"
                    : "-rotate-[3deg] hover:rotate-0"
              }`}
            >
              <div className="relative flex flex-col justify-between gap-3 rounded-sm bg-[#e7e3df] p-[6.5] pb-[13px] text-[#1c1c1c] md:min-h-[250px] md:gap-4 md:p-2.5 md:pb-[18px]">
                <Image
                  src={step.Image}
                  style={{ objectFit: "cover" }}
                  alt="window"
                  width={500}
                  height={500}
                  className="h-full max-h-[145px] min-h-[145px] w-full object-cover md:max-h-[223px] md:min-h-[223px]"
                />
                <p className="trim text-center text-sm md:text-[22px]">
                  {step.title}
                </p>
                <p className="trim text-center font-sans text-xs underline md:text-base">
                  What We Offer
                </p>

                <div className="absolute top-1 -left-5 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]"></div>
                <div className="absolute -right-5 bottom-1 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
