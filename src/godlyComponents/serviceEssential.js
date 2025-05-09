"use client";

import React, { useState } from "react";
import Services from "@/data/servicesData";
import { cn } from "@/lib/utils";

const EssentialService = ({ slug }) => {
  // Add state to track active card
  const [activeCard, setActiveCard] = useState(null);

  // Toggle function to handle touch interactions
  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <div className="paper-bg-16 flex flex-col items-center gap-20 bg-[#262424] px-6 py-24">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center gap-1 md:gap-5">
        <h4
          className="text-grain !bg-[#FFFFFF] text-center text-base tracking-[1.35px] md:text-xl md:tracking-wide"
          data-text="WHY KEEPING YOUR"
        >
          WHY KEEPING YOUR
        </h4>
        <h4
          className="text-grain trim !bg-[#F3CA9E] text-center text-[32px] tracking-wide md:text-7xl"
          data-text={
            Services[slug]["hero"][0] + " " + Services[slug]["hero"][1]
          }
        >
          {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
        </h4>
        <h1
          className="relative z-10 text-center font-['luminaire-script'] text-xl text-white md:-mt-7 md:text-6xl"
          style={{
            WebkitTextStrokeWidth: "5px",
            strokeLinecap: "round",
            WebkitTextStrokeColor: "#1F1D1D",
            paintOrder: "stroke",
          }}
        >
          Is Essential?
        </h1>
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-2 gap-3 md:gap-[24px]">
        {Services[slug]["essential"].map((point, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={index}
              className={cn(
                "paper-bg-8 min-h-[209px] rounded-[18px] p-2 shadow-md md:max-h-full md:w-100 md:min-w-[522px]",
                isActive ? "bg-[#E9E5E4]" : "bg-[#CBB7A0]",
                "hover:bg-[#E9E5E4]",
                index === Services[slug]["essential"].length - 1 &&
                  Services[slug]["essential"].length % 2 === 1 &&
                  "col-span-2 mx-auto max-w-1/2",
              )}
              onClick={() => toggleCard(index)}
            >
              <div className="flex h-full flex-grow flex-col gap-4 rounded-[12px] border-[1.7px] border-solid border-[#2D2B2B] px-3 py-3">
                <h2
                  className={cn(
                    "stroke! trim stroke-[#2D2B2B33] stroke-1! text-[40px] font-bold md:text-[64px]",
                    isActive ? "text-[#312E2C30]" : "text-[#312E2C30]",
                    "hover:text-[#312E2C30]!",
                  )}
                >
                  {point.number}
                </h2>
                <h3 className="trim font-['satoshi-bold'] text-sm text-[#2D2B2B] md:mt-2 md:text-[24px]">
                  {point.title}
                </h3>
                <p className="trim font-[satoshi-medium] text-sm text-[#2D2B2B] md:mt-1 md:text-[20px]">
                  {point.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EssentialService;
