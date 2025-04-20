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
      <div className="flex min-h-screen flex-col items-center gap-20 bg-[#231f1f] px-6 py-24">
        <div>
          <h1 className="-mt-4 text-center font-['luminaire-script'] text-xl text-[#F3CA9E] underline">
            Why
          </h1>
          <h4 className="text-6xl tracking-wide text-[#FFFFFF]">Choose US</h4>
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
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:px-10 md:grid-cols-4 md:px-20">
      {services.map((service, idx) => (
        <Card key={idx} className="rounded-sm bg-[#d5cdcb]">
          <CardContent className="flex flex-col gap-3 p-4">
            <Image
              src={service.image}
              alt={service.name}
              width={40}
              height={40}
            />
            <h3 className="text-lg font-normal">{service.name}</h3>
            <p className="font-sans text-sm text-[#1F1D1D]">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
