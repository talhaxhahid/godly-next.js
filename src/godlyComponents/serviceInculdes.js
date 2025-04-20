import React from "react";
import "@/styles/fourstepprocess.css";
import background from "../assets/texture.png";
import Services from "@/data/servicesData";

const ServiceIncludes = ({ slug }) => {
  return (
    <div
      id="promise"
      className="flex min-h-screen flex-col items-center justify-items-center gap-10 bg-[#FDE4C8] bg-cover bg-center bg-no-repeat p-24 bg-blend-multiply"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="py-10">
        <h4 className="w-150 text-center text-5xl font-normal tracking-wide text-[#191717]">
          WHAT <span className="text-[#AB8459]">INCLUDED</span>{" "}
          <span className="text-5xl"> IN OUR SOLAR PANEL CLEANING Service</span>
        </h4>
      </div>

      <div className="flex w-full max-w-screen-xl flex-wrap justify-center gap-6 px-4 py-5">
        {Services[slug]["included"].map((step, index) => (
          <div
            key={index}
            className={`rounded-sm bg-size-[auto_10rem] bg-top-right p-2 ${Services[slug]["included"].length == 5 ? "w-65" : Services[slug]["included"].length == 3 ? "w-70" : "w-60"} min-h-60 bg-no-repeat ${index === 1 ? "bg-[#E7E3E0] text-black" : "bg-[#201E1E] text-[#FFFFFF]"} `}
          >
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-between gap-15 rounded-md border border-dashed border-[#6A6464] p-6">
              <div>
                <h5 className="text-md text-center font-normal">
                  <span className="">{step.number}</span>
                </h5>

                <div className="mb-3 text-center text-2xl">{step.title}</div>
              </div>

              <p
                className="text-center text-sm"
                style={{ fontFamily: "sans-serif" }}
              >
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceIncludes;
