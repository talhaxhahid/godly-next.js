"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import { Star } from "lucide-react";
import FreeQuoteButton from "@/components/freeQuote";
import Services from "@/data/servicesData";

const ServicesHero = ({ slug }) => {
  const { city } = useGodlyContext();
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-10 bg-[#262424] p-16">
      <div>
        <div className="flex items-center justify-center gap-1">
          <h1 className="mr-2 text-[#FDE4C8]">TOP RATED </h1>
          <Star size={12} color="#FFAC33" fill="#FFAC33" />
          <Star size={12} color="#FFAC33" fill="#FFAC33" />
          <Star size={12} color="#FFAC33" fill="#FFAC33" />
          <Star size={12} color="#FFAC33" fill="#FFAC33" />
          <Star size={12} color="#FFAC33" fill="#FFAC33" />
        </div>
        <h1 className="text-center text-6xl tracking-wide text-white">
          {" "}
          {Services[slug]["hero"][0]}
        </h1>
        <h1 className="-mt-5 text-center tracking-wide">
          <span className="font-['luminaire-script'] text-6xl text-[#FDE4C8]">
            {Services[slug]["hero"][1]} &nbsp;
          </span>{" "}
          <span className="text-[#FDE4C8]">{city}</span>
        </h1>
      </div>
      <div className="relative min-h-[200px] rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
        <Image src={Services[slug]["hero"][2]} alt="window"></Image>
        <p className="text-center font-['luminaire-script'] text-base">
          {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
        </p>
        <div className="absolute top-2 -left-6 z-10 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
        <div className="absolute -right-6 bottom-2 z-10 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
      </div>
      <div className="w-150 text-center font-sans text-[#FFFFFF94]">
        <p>{Services[slug]["hero"][3]}</p>
      </div>
      <FreeQuoteButton />
    </div>
  );
};

export default ServicesHero;
