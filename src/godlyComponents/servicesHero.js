"use client";
import { useGodlyContext } from "@/context/godlyContext";
import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
// import { Star } from "lucide-react";
import FreeQuoteButton from "@/components/freeQuote";
import Services from "@/data/servicesData";

const ServicesHero = ({ slug }) => {
  const { city } = useGodlyContext();
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-20 bg-[#262424] px-[370px] py-[100px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-start gap-3">
          <h1 className="font-marlton trim text-[20.704px] tracking-[2.07px] text-[#FDE4C8]">
            TOP RATED
          </h1>
          <div className="trim flex items-center gap-[3.774px]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="relative flex items-end">
          <h1
            className="text-grain trim text-center text-[88px] tracking-[5.23px] text-white"
            data-text={Services[slug]["hero"][0]}
          >
            {Services[slug]["hero"][0]}
          </h1>
        </div>
        <div className="relative w-full">
          <div>
            <span className="absolute -top-5 -right-30 max-w-[100px] font-['marlton'] text-base font-[400] tracking-[2px] text-[#FDE4C8]">
              {city}
            </span>
          </div>
          <div className="relative flex w-full items-end">
            <h1 className="trim absolute top-9 left-3 z-10 w-full rotate-[-6.668deg] text-end tracking-wide">
              <span
                className="trim text-grain relative z-10 text-end font-['luminaire-script'] text-[88px] font-normal text-[#FDE4C8]"
                data-text={Services[slug]["hero"][1]}
                style={{
                  WebkitTextStrokeWidth: "2px",
                  strokeLinecap: "round",
                  WebkitTextStrokeColor: "#1F1D1D",
                  paintOrder: "stroke",
                }}
              >
                {Services[slug]["hero"][1]} &nbsp;
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="relative min-h-[200px] rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
        <Image src={Services[slug]["hero"][2]} alt="window"></Image>
        <p className="text-center font-['luminaire-script'] text-base">
          {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
        </p>
        <div className="absolute top-2 -left-6 z-10 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
        <div className="absolute -right-6 bottom-2 z-10 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
      </div>
      <div className="text-center font-['satoshi-regular'] leading-6 text-[#FFFFFF94]">
        <p>{Services[slug]["hero"][3]}</p>
      </div>
      <FreeQuoteButton>Get a Free Quote</FreeQuoteButton>
    </div>
  );
};

export default ServicesHero;

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
  >
    <g clipPath="url(#clip0_2048_27067)">
      <path
        d="M13.3724 16.3331C13.1818 16.3331 12.9922 16.2747 12.829 16.1581L8.99168 13.4062L5.1544 16.1581C4.99542 16.2725 4.80436 16.3337 4.60851 16.3331C4.41265 16.3324 4.22202 16.2698 4.06383 16.1544C3.90544 16.0396 3.7873 15.8778 3.72623 15.692C3.66517 15.5062 3.66429 15.3058 3.72374 15.1195L5.15487 10.5006L1.35203 7.82085C1.19442 7.70453 1.07738 7.54161 1.01745 7.35513C0.957516 7.16865 0.957732 6.96804 1.01806 6.78169C1.079 6.59587 1.19673 6.43386 1.35464 6.31851C1.51256 6.20316 1.7027 6.14029 1.89826 6.13876L6.60818 6.13169L8.10772 1.62743C8.1696 1.44187 8.28829 1.28049 8.44698 1.16613C8.60567 1.05177 8.79632 0.990234 8.99192 0.990234C9.18752 0.990234 9.37817 1.05177 9.53686 1.16613C9.69555 1.28049 9.81424 1.44187 9.87612 1.62743L11.3502 6.13169L16.0842 6.13876C16.28 6.13987 16.4705 6.20265 16.6286 6.3182C16.7867 6.43374 16.9044 6.59616 16.9649 6.7824C17.0254 6.96863 17.0257 7.16921 16.9658 7.35562C16.9058 7.54204 16.7886 7.70482 16.6309 7.82085L12.828 10.5006L14.2592 15.1195C14.3187 15.3058 14.3179 15.5061 14.2569 15.6919C14.1959 15.8777 14.0778 16.0396 13.9195 16.1544C13.7608 16.2707 13.5691 16.3333 13.3724 16.3331Z"
        fill="#FFAC33"
      />
    </g>
    <defs>
      <clipPath id="clip0_2048_27067">
        <rect
          width="16.9812"
          height="16.9812"
          fill="white"
          transform="translate(0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
