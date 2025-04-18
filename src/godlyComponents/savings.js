import React from "react";
import "@/styles/fourstepprocess.css";
import background from "../assets/texture.png";
import { Check, X } from "lucide-react";
import QuoteButton from "@/components/quoteButton";

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

  return (
    <div
      className="flex p-16 flex-col justify-items-center items-center  bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="flex p-16 flex-col max-w-[1440px] mx-auto justify-items-center items-center  bg-blend-multiply bg-cover bg-center bg-no-repeat">
        <h1 className="text-6xl font-normal text-[#191717]">
          Huge Savings and{" "}
        </h1>
        <h1 className="text-6xl mt-1 font-normal text-[#191717]">
          always look great
        </h1>
        <div
          className="text-white pb-16 pt-16"
          // style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          <div className="flex flex-wrap justify-center gap-10 sm:gap-15 md:gap-25 px-4 sm:px-4 md:px-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="">
                <div
                  className={
                    "relative flex flex-col items-center justify-center text-black p-[48px] rounded-lg shadow z-10 w-70 bg-[#1F1D1D]"
                  }
                >
                  <h5 className=" text-center mb-5 text-xl font-normal text-[#FFFFFF]">
                    {step.title}
                  </h5>

                  <div
                    className="text-center text-[#FFFFFF] text-5xl  font-sans font-semibold"
                    style={{ marginBottom: "1rem" }}
                  >
                    {step.discount}
                  </div>
                  <p className="text-center text-white font-sans text-sm ">
                    per cleaning
                  </p>
                  <div className="flex justify-center mb-4">
                    {FeatureList(index != 2)}
                  </div>
                  <QuoteButton>Request a Quote</QuoteButton>
                  <div className="h-4 w-15 -rotate-45 bg-[#F3CA9ECC] absolute top-2 -left-6 z-10"></div>
                  <div className="h-4 w-15 -rotate-45 bg-[#F3CA9ECC] absolute bottom-2 -right-6 z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;

const FeatureList = (value) => {
  const features = [
    "FREE Mint Rainblock Tech",
    "7 day Rain Guarantee",
    "Free Hard Water removal",
  ];

  return (
    <div className=" text-[#E8E6E3] py-12 space-y-6 font-sans">
      {features.map((text, index) => (
        <div key={index} className="flex items-center space-x-4">
          {value ? (
            <div className="bg-[#FFEBD7] rounded-full w-5 h-5 flex items-center justify-center">
              <Check className="w-3 h-3 text-[#4B3A2F]" />
            </div>
          ) : (
            <div className="bg-[#EC6D62] rounded-full w-5 h-5 flex items-center justify-center">
              <X className="w-3 h-3 text-[#4B3A2F]" />
            </div>
          )}

          <span className="text-sm">{text}</span>
        </div>
      ))}
    </div>
  );
};
