import React from "react";

import background from "../assets/texture.png";
import map from "@/assets/map.png";
import SectionButton from "@/components/sectionButton";
import Image from "next/image";

const Location = () => {
  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-items-center bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply">
        <h4
          className="text-grain font-['Marlton'] text-2xl font-normal tracking-wider text-[#FDE4C8]"
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
          className="text-grain mt-3 text-2xl font-normal tracking-wider text-white"
          data-text="IN SOUTH FLORIDA"
        >
          <span className="text-xl">IN</span> SOUTH{" "}
          <span
            className="text-grain font-[luminaire-script] text-[32px] text-[#FDE4C8]"
            data-text="Florida"
          >
            Florida
          </span>
        </h4>
      </div>
      <div
        className="flex flex-col items-center justify-items-center gap-10 bg-[#efe5db] bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Image src={map} alt="map" className="h-full max-w-[1440px]" />

        <SectionButton>Get a Free Estimate</SectionButton>
      </div>
    </div>
  );
};

export default Location;
