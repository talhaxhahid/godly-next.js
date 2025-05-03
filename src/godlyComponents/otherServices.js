"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React from "react";
import Link from "next/link";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import Services1 from "@/assets/otherservices1.webp";
import Services2 from "@/assets/otherservices2.webp";

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
      className="paper-bg-16 flex min-h-screen flex-col items-center justify-center justify-items-center gap-10 bg-[#ffecd6] bg-cover bg-center bg-no-repeat p-24 bg-blend-multiply"
    >
      <h4 className="w-4/5 py-10 text-center text-5xl font-normal tracking-wide text-[#191717]">
        enhance your cleaning with other services we offer in {city}
      </h4>

      <div className="grid w-full max-w-screen-xl gap-10 px-4 py-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              <div className="relative flex min-h-[250px] flex-col justify-between rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
                <Image
                  src={step.Image}
                  style={{ objectFit: "cover" }}
                  alt="window"
                ></Image>
                <p className="text-center text-base">{step.title}</p>
                <p className="text-center font-sans text-sm underline">
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
