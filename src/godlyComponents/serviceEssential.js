import React from "react";
import Services from "@/data/servicesData";
const EssentialService = ({ slug }) => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-20 bg-[#231f1f] px-6 py-24">
      {/* Heading Section */}
      <div>
        <h4 className="text-center text-xl tracking-wide text-[#FFFFFF]">
          WHY KEEPING YOUR
        </h4>
        <h4 className="text-center text-7xl tracking-wide text-[#F3CA9E]">
          {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
        </h4>
        <h1 className="-mt-4 text-center font-['luminaire-script'] text-6xl text-white">
          Is Essential?
        </h1>
      </div>

      {/* Info Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {Services[slug]["essential"].map((point, index) => (
          <div
            key={index}
            className="w-100 rounded-md bg-[#CBB7A0] p-2 shadow-md"
          >
            <div className="h-full rounded-md border-[1.7px] border-solid border-[#2D2B2B] p-3">
              <h2 className="text-4xl font-bold text-[#312E2C30]">
                {point.number}
              </h2>
              <h3 className="text-md mt-2 text-[#2D2B2B]">{point.title}</h3>
              <p className="text-md mt-1 font-sans text-[#2D2B2B]">
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
