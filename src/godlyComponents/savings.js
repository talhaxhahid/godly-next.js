"use client";
import React from "react";
import "@/styles/fourstepprocess.css";
import background from "../assets/texture.png";
import { Check, X } from "lucide-react";
import QuoteButton from "@/components/quoteButton";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm";

const Savings = () => {
  const steps = [
    {
      title: "Every Month",
      discount: "12% OFF ",
    },
    {
      title: "Every 3-4 Months",
      discount: "10% OFF",
    },
    {
      title: "Every 6 months",
      discount: "8% OFF",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-items-center bg-[#FDE4C8] bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-items-center bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply">
        <h1 className="text-6xl font-normal text-[#191717]">
          Huge Savings and{" "}
        </h1>
        <h1 className="mt-1 text-6xl font-normal text-[#191717]">
          always look great
        </h1>
        <div
          className="pt-16 pb-16 text-white"
          // style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          <div className="relative z-10 flex flex-wrap justify-center gap-10 px-4 sm:gap-15 sm:px-4 md:gap-25 md:px-8">
            {steps.map((step, index) => (
              <div key={index} className="">
                <div
                  className={
                    "relative z-10 flex w-70 flex-col items-center justify-center rounded-lg bg-[#1F1D1D] p-[48px] text-black shadow"
                  }
                >
                  <h5 className="mb-5 text-center text-xl font-normal text-[#FFFFFF]">
                    {step.title}
                  </h5>

                  <div
                    className="text-center font-sans text-5xl font-semibold text-[#FFFFFF]"
                    style={{ marginBottom: "1rem" }}
                  >
                    {step.discount}
                  </div>
                  <p className="text-center font-sans text-sm text-white">
                    per cleaning
                  </p>
                  <div className="mb-4 flex justify-center">
                    {FeatureList(index != 2)}
                  </div>
                  <QuoteButton onClick={() => setIsOpen(true)}>
                    Request a Quote
                  </QuoteButton>

                  <div className="absolute top-2 -left-6 z-10 h-4 w-15 -rotate-45 bg-[#F3CA9ECC]"></div>
                  <div className="absolute -right-6 bottom-2 z-10 h-4 w-15 -rotate-45 bg-[#F3CA9ECC]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FormPopup open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

export default Savings;

const FormPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle className="hidden">Contact Us</DialogTitle>
      </DialogHeader>
      <DialogContent className="top-80 z-[9999] max-h-[90vh] max-w-[180vw] overflow-y-auto border-none bg-transparent sm:max-w-[95vw] lg:max-w-[180vh]">
        <QuoteForm />
      </DialogContent>
    </Dialog>
  );
};

const FeatureList = (value) => {
  const features = [
    "FREE Mint Rainblock Tech",
    "7 day Rain Guarantee",
    "Free Hard Water removal",
  ];

  return (
    <div className="space-y-6 py-12 font-sans text-[#E8E6E3]">
      {features.map((text, index) => (
        <div key={index} className="flex items-center space-x-4">
          {value ? (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFEBD7]">
              <Check className="h-3 w-3 text-[#4B3A2F]" />
            </div>
          ) : (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EC6D62]">
              <X className="h-3 w-3 text-[#4B3A2F]" />
            </div>
          )}

          <span className="text-sm">{text}</span>
        </div>
      ))}
    </div>
  );
};
