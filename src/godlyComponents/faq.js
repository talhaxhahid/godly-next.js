"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionButton from "@/components/sectionButton";

const questions = [
  "How often should I seal coat my driveway?",
  "Can you seal coat commercial parking lots?",
  "How long does the seal coating process take?",
  "Will seal coating fix cracks in my driveway?",
  "How soon can I drive on my driveway after seal coating?",
];
const answers = [
  "We recommend seal coating every 2-3 years to maintain protection and appearance.",
  "Yes! We provide seal coating for both residential and commercial properties.",
  "Most jobs are completed in 4-6 hours, but drying time can take up to 24 hours before full use.",
  "Yes, it will fix cracks in your driveway. However, it may not be the best solution for all types of cracks.",
  "You can drive on your driveway immediately after seal coating.",
];

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
      className="paper-bg-16 flex flex-col items-center gap-[98px] bg-[#efe5db] bg-cover bg-center bg-no-repeat px-6 py-12"
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

        <div className="mt-10 w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2"
            value={expandedItem}
            onValueChange={handleAccordionChange}
          >
            {questions.map((question, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="border-b border-[#332B2B21]"
              >
                <AccordionTrigger className="text-lg text-[#191717]">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm font-normal text-[#191717]">
                  {answers[i]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <SectionButton>Get a Free Estimate</SectionButton>
    </div>
  );
};

export default Faq;
