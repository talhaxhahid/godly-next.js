import React from "react";
import Services from "@/data/servicesData";
const EssentialService = ({ slug }) => {

    return (
        <div className="flex flex-col items-center bg-[#231f1f] min-h-screen px-6 py-24 gap-20">
            {/* Heading Section */}
            <div>
                <h4 className="text-[#FFFFFF] text-xl text-center tracking-wide">
                    WHY KEEPING YOUR
                </h4>
                <h4 className="text-[#F3CA9E] text-7xl text-center tracking-wide">
                    SOLAR PANELS CLEAN
                </h4>
                <h1 className="text-white text-center text-6xl font-['luminaire-script'] -mt-4">
                    Is Essential?
                </h1>
            </div>

            {/* Info Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {Services[slug]['essential'].map((point, index) => (
                    <div
                        key={index}
                        className="bg-[#CBB7A0] p-2 rounded-md shadow-md  sm:w-[360px]"
                    >
                        <div className="rounded-md border-solid border-[1.7px] border-[#2D2B2B] p-3">
                        <h2 className="text-[#312E2C30] text-4xl font-bold">{point.number}</h2>
                        <h3 className="text-[#2D2B2B]  text-md mt-2">{point.title}</h3>
                        <p className="text-black font-sans text-sm mt-1 text-[#2D2B2B]">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EssentialService;
