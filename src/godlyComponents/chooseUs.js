"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import shield from "@/assets/shieldPlus.png";
import paintBox from "@/assets/paintBox.png";
import waterDrop from "@/assets/waterDrop.png";
import verifiedBadge from "@/assets/verifiedBadge.png";

const ChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-[#231f1f]  min-h-screen px-6 py-24 gap-20">
        <div>
          <h1 className="text-[#F3CA9E] text-center text-xl font-['luminaire-script']  -mt-4 underline">
            Why
          </h1>
          <h4 className="text-[#FFFFFF] text-6xl  tracking-wide  ">
            Choose US
          </h4>
        </div>
        <ServicesGrid />
      </div>
    </div>
  );
};

export default ChooseUs;

const services = [
  {
    name: "Trained Professionals",
    image: shield,
    description:
      "Skilled in safely cleaning delicate solar panels without damage.",
  },
  {
    name: "Fully Insured & Equipped",
    image: paintBox,
    description: "Industry-grade tools ensure a thorough and safe clean.",
  },
  {
    name: "Eco-Friendly Cleaning Solutions",
    image: waterDrop,
    description: "Non-abrasive and safe for your panels and surrounding areas.",
  },
  {
    name: "Satisfaction Guarantee",
    image: verifiedBadge,
    description: "If you’re not happy, we’ll make it right.",
  },
];

function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:px-20 sm:px-10">
      {services.map((service, idx) => (
        <Card key={idx} className="  bg-[#d5cdcb] rounded-sm ">
          <CardContent className="p-4 flex flex-col gap-3">
            <Image
              src={service.image}
              alt={service.name}
              width={40}
              height={40}
            />
            <h3 className="text-lg font-normal ">{service.name}</h3>
            <p className="text-sm font-sans text-[#1F1D1D] ">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
