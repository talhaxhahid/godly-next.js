"use client";
import React, { useState } from "react";
import background from "../assets/texture.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState("item-1"); // Set default value to item-1

  const handleAccordionChange = (value) => {
    if (value) {
      setExpandedItem(value);
    }
  };

  return (
    <div
      id="faq"
      className="flex flex-col items-center bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat  px-6 py-12"
      style={{
        backgroundImage: `url(${background.src})`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="max-w-4xl w-full flex flex-col "
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1 className="text-[#191717] text-8xl font-black tracking-wide">
          FREQUENTLY
        </h1>
        <h4 className="text-[#191717] text-2xl font-semibold tracking-wide">
          ASKED{" "}
          <span className="text-[#61503E] text-[64px] font-['luminaire-script'] ml-3 font-medium">
            Questions
          </span>
        </h4>

        <div className="mt-10">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2"
            value={expandedItem}
            onValueChange={handleAccordionChange} // Handle change when an item is clicked
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="border-b border-[#332B2B21]"
              >
                <AccordionTrigger className="text-lg text-[#191717]">
                  Dolor ipsum amet?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#191717] font-normal font-sans">
                  The essence of pain and pleasure is a complex tapestry woven
                  into the fabric of our lives, where each thread represents our
                  experiences, emotions, and memories. Pain often serves as a
                  poignant reminder of our limitations and vulnerabilities,
                  while pleasure acts as a beacon of joy and fulfillment.
                  Together, they create a profound balance that shapes our
                  understanding of happiness and suffering.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
