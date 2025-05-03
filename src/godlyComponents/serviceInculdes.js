import React from "react";
import "@/styles/fourstepprocess.css";
import background from "../assets/texture.webp";
import Services from "@/data/servicesData";
import { cn } from "@/lib/utils";

const ServiceIncludes = ({ slug }) => {
  return (
    <div
      id="promise"
      className="flex flex-col items-center justify-items-center gap-16 bg-[#FDE4C8] bg-cover bg-center bg-no-repeat px-[150px] py-[100px] bg-blend-multiply"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="py-10">
        <h4 className="trim m-0 w-full max-w-[854px] p-0 text-center text-[64px] font-normal tracking-wide text-[#191717] before:inset-0">
          <span className="text-grain" data-text="WHAT'S">
            WHAT&apos;S
          </span>{" "}
          <span className="text-grain trim text-[#AB8459]" data-text="INCLUDED">
            INCLUDED
          </span>
          <span className="trim text-grain text-[64px]">
            {" "}
            IN OUR {Services[slug]["hero"][0]} CLEANING Service
          </span>
        </h4>
      </div>

      <div className="flex w-full justify-center gap-3 pb-20">
        {Services[slug]["included"].map((step, index) => (
          <div
            key={index}
            className={`paper-bg-16 group min-h-[290px] w-full max-w-[272px] rounded-sm bg-[#312E2C] bg-size-[auto_10rem] bg-top-right p-3 hover:bg-[transparent]`}
          >
            <div
              className={cn(
                "relative z-10 flex h-full w-full flex-col items-center justify-between rounded-md border-[#564839] p-6 text-white group-hover:border-[#6A6464] group-hover:text-[#2D2B2B]",
                index % 2 === 1 ? "border border-dashed" : "border-none",
              )}
            >
              <div className="flex flex-col items-center justify-center gap-[32px]">
                <h5 className="text-md text-center font-normal">
                  <span className="trim">{step.number}</span>
                </h5>

                <p className="trim text-grain text-center text-2xl text-white group-hover:text-[#2D2B2B] before:uppercase">
                  {step.title}
                </p>
              </div>

              <p className="trim text-center text-base">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceIncludes;
