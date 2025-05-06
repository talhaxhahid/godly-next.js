import React from "react";
import Services from "@/data/servicesData";
const EssentialService = ({ slug }) => {
  return (
    <div className="paper-bg-16 flex flex-col items-center gap-20 bg-[#262424] px-6 py-24">
      {/* Heading Section */}
      <div>
        <h4
          className="text-grain text-center text-base tracking-[1.35px] text-[#FFFFFF] md:text-xl md:tracking-wide"
          data-text="WHY KEEPING YOUR"
        >
          WHY KEEPING YOUR
        </h4>
        <h4
          className="text-grain text-center text-[32px] tracking-wide text-[#F3CA9E] md:text-7xl"
          data-text={
            Services[slug]["hero"][0] + " " + Services[slug]["hero"][1]
          }
        >
          {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
        </h4>
        <h1
          className="relative z-10 text-center font-['luminaire-script'] text-xl text-white md:-mt-2 md:text-6xl"
          style={{
            WebkitTextStrokeWidth: "5px",
            strokeLinecap: "round",
            WebkitTextStrokeColor: "#1F1D1D",
            paintOrder: "stroke",
          }}
        >
          Is Essential?
        </h1>
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-2 gap-8">
        {Services[slug]["essential"].map((point, index) => (
          <div
            key={index}
            className="paper-bg-8 w-100 rounded-md bg-[#E9E5E4] p-2 shadow-md"
          >
            <div className="h-full rounded-md border-[1.7px] border-solid border-[#2D2B2B] px-3 py-2">
              <h2 className="text-4xl font-bold text-[#312E2C30]">
                {point.number}
              </h2>
              <h3 className="text-md mt-2 font-[satoshi-bold] text-[#2D2B2B]">
                {point.title}
              </h3>
              <p className="text-md mt-1 font-[satoshi-medium] text-[#2D2B2B]">
                {point.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialService;
