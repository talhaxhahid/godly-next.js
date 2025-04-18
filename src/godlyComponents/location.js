import React from "react";

import background from "../assets/texture.png";
import map from "@/assets/map.png";
import SectionButton from "@/components/sectionButton";
import Image from "next/image";

const Location = () => {
  return (
    <div className="paper-bg-16">
      <div
        className="flex p-16 flex-col max-w-[1440px] mx-auto justify-items-center items-center  bg-[#262424] bg-blend-multiply bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <h4 className="text-[#FDE4C8] text-2xl font-normal tracking-wider">
          PROUDLY SERVING
        </h4>
        <h1 className="text-white text-7xl font-normal tracking-wider">
          THESE TOWNS
        </h1>
        <h4 className="text-white text-4xl mt-3 font-normal tracking-wider">
          <span className="text-xl">IN</span> SOUTH{" "}
          <span className="text-[#FDE4C8] font-[luminaire-script]">
            Florida
          </span>
        </h4>
      </div>
      <div
        className="flex flex-col gap-10 justify-items-center items-center  p-16 bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Image src={map} alt="map" className="max-w-[1440px] h-full" />

        <SectionButton />
      </div>
    </div>
  );
};

export default Location;
