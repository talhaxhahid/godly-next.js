import React from "react";

import background from "../assets/texture.png";
import map from "@/assets/map.png";
import SectionButton from "@/components/sectionButton";


const Location = () => {




    return (
        <div>
            <div className="flex p-16 flex-col justify-items-center items-center min-h-[40vh] bg-[#262424] bg-blend-multiply bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background.src})` }}>
                <h4 className="text-[#FDE4C8] text-xl font-normal tracking-wider">PROUDLY SERVING</h4>
                <h1 className="text-white text-6xl font-normal tracking-wider">THESE TOWNS</h1>
                <h4 className="text-white text-2xl mt-3 font-normal tracking-wider"><span className="text-xl">IN</span> SOUTH <span className="text-[#FDE4C8] font-[luminaire-script]">Florida</span></h4>




            </div>
            <div className="flex flex-col gap-10 justify-items-center items-center min-h-[100vh] p-16 bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background.src})` }}>
                <div className="w-600 h-100 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${map.src})` }}></div>
                <SectionButton/>
            </div>
            
        </div>
    );

}

export default Location;