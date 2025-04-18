"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React from "react";
import Link from "next/link";
import "@/styles/fourstepprocess.css";
import background from "../assets/texture.png";
import Image from "next/image";
import Services1 from "@/assets/otherservices1.png";
import Services2 from "@/assets/otherservices2.png";

const steps = [
  {
    number: "01",
    title: "Screen Cleaning",
    link: "screen_cleans",
    Image: Services1,
  },
  {
    number: "02",
    title: "Exterior Window Cleaning",
    link: "exterior_windows",
    Image: Services2,
  },
  {
    number: "03",
    title: "SKYLIGHT CLEANING",
    link: "skylights",
    Image: Services2,
  },
  {
    number: "04",
    title: "HIGH DUSTING",
    link: "high_dusting",
    Image: Services2,
  },
];

const OtherServices = () => {
  const { city } = useGodlyContext();

  return (
    <div
      id="promise"
      className="flex gap-10 p-24 flex-col justify-items-center justify-center items-center min-h-screen bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <h4 className="text-5xl py-10 font-normal text-[#191717] tracking-wide text-center w-4/5">
        enhance your cleaning with other services we offer in {city}
      </h4>

      <div className="py-5 grid gap-10 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-screen-xl ">
        {steps.map((step, index) => (
          <Link href={"/services/" + step.link} key={index}>
            <div
              key={index}
              className={`transform transition-transform duration-300 ${
                index % 2 === 0
                  ? "rotate-[3deg] hover:rotate-0"
                  : "-rotate-[3deg] hover:rotate-0"
              }`}
            >
              <div className="bg-[#e7e3df] flex flex-col justify-between text-[#1c1c1c] rounded-sm p-2 min-h-[250px] relative">
                <Image
                  src={step.Image}
                  style={{ objectFit: "cover" }}
                  alt="window"
                ></Image>
                <p className=" text-base text-center">{step.title}</p>
                <p className="underline font-sans text-sm text-center">
                  What We Offer
                </p>

                <div className="h-3 w-13 -rotate-45 bg-[#F3CA9ECC] absolute top-1 -left-5 z-10"></div>
                <div className="h-3 w-13 -rotate-45 bg-[#F3CA9ECC] absolute bottom-1 -right-5 z-10"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
