"use client";
import React from "react";
import "@/styles/fourstepprocess.css";
import background from "../assets/heroBanner.png";
import { Star } from "lucide-react";
import QuoteForm from "./quoteForm";
import { useGodlyContext } from "@/context/godlyContext";

const Hero = () => {
  const { city } = useGodlyContext();

  return (
    <div className="relative overflow-x-clip bg-[#1F1D1D] ">
      <div
        className="absolute top-[50px] left-0 w-full h-1/2 bg-[url('/path-to-image.jpg')] bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#1F1D1D]/0 to-[#1F1D1D] absolute top-0 left-0"></div>
      </div>

      <div className="relative z-10 px-14  pb-32 max-w-[1440px] mx-auto">
        <div className=" min-h-[650px] flex flex-col justify-end gap-3 pb-10">
          <div className="flex items-center justify-start gap-3">
            <h1 className="text-[#FDE4C8] text-[20px] tracking-[2px] font-marlton leading-normal p-0 m-0 text-box-trim-[trim-start]">
              TOP RATED
            </h1>
            <div className="flex items-center">
              <Star size={12} color="#FFAC33" fill="#FFAC33" />
              <Star size={12} color="#FFAC33" fill="#FFAC33" />
              <Star size={12} color="#FFAC33" fill="#FFAC33" />
              <Star size={12} color="#FFAC33" fill="#FFAC33" />
              <Star size={12} color="#FFAC33" fill="#FFAC33" />
            </div>
          </div>
          <h1 className="text-7xl text-white tracking-[6px]">
            Window cleaning{" "}
            <span className="font-['luminaire-script'] text-2xl text-center text-[#FDE4C8]">
              And
            </span>{" "}
            pressure Washing services In {city}
          </h1>
          <p className="text-white font-sans text-xl font-light ">
            we specialize in window washing, home washing, pressure washing,
            paver sealing and more.
          </p>
        </div>
        <div className=" pt-14">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
