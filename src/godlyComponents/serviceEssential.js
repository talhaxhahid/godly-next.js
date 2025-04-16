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
                {Services[slug]['hero'][0]}&nbsp;{Services[slug]['hero'][1]}
                </h4>
                <h1 className="text-white text-center text-6xl font-['luminaire-script'] -mt-4">
                    Is Essential?
                </h1>
            </div>

            {/* Info Cards Section */}
            <div className="flex flex-wrap gap-8 justify-center ">
                {Services[slug]['essential'].map((point, index) => (
                    <div
                        key={index}
                        className="bg-[#CBB7A0] p-2 rounded-md shadow-md w-100 "
                    >
                        <div className="rounded-md border-solid border-[1.7px] border-[#2D2B2B] p-3 h-full">
                        <h2 className="text-[#312E2C30] text-4xl font-bold">{point.number}</h2>
                        <h3 className="text-[#2D2B2B]  text-md mt-2">{point.title}</h3>
                        <p className="text-black font-sans text-md mt-1 text-[#2D2B2B]">{point.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EssentialService;
