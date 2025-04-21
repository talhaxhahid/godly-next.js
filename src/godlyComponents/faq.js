"use client";
import React, { useState } from "react";
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
      className="paper-bg-16 flex flex-col items-center bg-[#FDE4C8] bg-cover bg-center bg-no-repeat px-6 py-12"
    >
      <div
        className="flex w-full max-w-4xl flex-col"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1
          className="text-grain text-8xl font-black tracking-wide text-[#191717]"
          data-text="FREQUENTLY"
        >
          FREQUENTLY
        </h1>
        <h4 className="text-2xl font-semibold tracking-wide text-[#191717]">
          <span>ASKED</span>{" "}
          <span
            className="text-grain ml-3 font-['luminaire-script'] text-[64px] font-medium text-[#61503E]"
            data-text="Questions"
          >
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
                <AccordionContent className="font-sans text-sm font-normal text-[#191717]">
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
