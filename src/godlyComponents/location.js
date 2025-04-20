import React from "react";

import background from "../assets/texture.png";
import map from "@/assets/map.png";
import SectionButton from "@/components/sectionButton";
import Image from "next/image";

const Location = () => {
  return (
    <div className="paper-bg-16">
      <div
        className="mx-auto flex max-w-[1440px] flex-col items-center justify-items-center bg-[#262424] bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <h4 className="text-2xl font-normal tracking-wider text-[#FDE4C8]">
          PROUDLY SERVING
        </h4>
        <h1 className="text-7xl font-normal tracking-wider text-white">
          THESE TOWNS
        </h1>
        <h4 className="mt-3 text-4xl font-normal tracking-wider text-white">
          <span className="text-xl">IN</span> SOUTH{" "}
          <span className="font-[luminaire-script] text-[#FDE4C8]">
            Florida
          </span>
        </h4>
      </div>
      <div
        className="flex flex-col items-center justify-items-center gap-10 bg-[#FDE4C8] bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Image src={map} alt="map" className="h-full max-w-[1440px]" />

        <SectionButton />
      </div>
    </div>
  );
};

export default Location;
