import React from "react";

import map from "@/assets/map.png";
import SectionButton from "@/components/sectionButton";
import Image from "next/image";

const Location = () => {
  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-items-center bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply">
        <h4
          className="text-grain trim font-['Marlton'] text-2xl font-normal tracking-wider text-[#FDE4C8]"
          data-text="PROUDLY SERVING"
        >
          PROUDLY SERVING
        </h4>
        <h1
          className="text-grain text-[64px] font-normal tracking-wider text-white"
          data-text="THESE TOWNS"
        >
          THESE TOWNS
        </h1>
        <h4
          className="text-grain trim mt-3 text-2xl font-normal tracking-wider text-white"
          data-text="IN SOUTH FLORIDA"
        >
          <span className="trim text-xl">IN</span> SOUTH{" "}
          <span
            className="text-grain trim font-[luminaire-script] text-[32px] text-[#FDE4C8]"
            data-text="Florida"
          >
            Florida
          </span>
        </h4>
      </div>
      <div className="paper-bg-16 flex flex-col items-center justify-items-center gap-10 bg-[#ebded1] bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply">
        <Image src={map} alt="map" className="h-full max-w-[1140px]" />

        <SectionButton>Get a Free Estimate</SectionButton>
      </div>
    </div>
  );
};

export default Location;
