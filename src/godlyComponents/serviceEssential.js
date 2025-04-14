import React from "react";

const EssentialService = () => {
    const points = [
        {
            number: "01.",
            title: "Increases Energy Efficiency",
            description: "Clean panels absorb more sunlight, boosting power output.",
        },
        {
            number: "02.",
            title: "Extends Panel Lifespan",
            description: "Prevents damage caused by dirt buildup and environmental debris.",
        },
        {
            number: "03.",
            title: "Reduces Energy Costs",
            description: "Higher efficiency means better savings on your electricity bill.",
        },
        {
            number: "04.",
            title: "Protects Your Warranty",
            description: "Many manufacturers require regular cleaning for warranty compliance.",
        },
    ];

    return (
        <div className="flex flex-col items-center bg-[#262424] min-h-screen px-6 py-24 gap-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {points.map((point, index) => (
                    <div
                        key={index}
                        className="bg-[#CBB7A0] p-3 rounded-md shadow-md flex-1 sm:w-[360px]"
                    >
                        <div className="rounded-md border-solid border-[1.7px] border-black p-3">
                        <h2 className="text-[#312E2C30] text-4xl font-bold">{point.number}</h2>
                        <h3 className="text-black  text-md mt-2">{point.title}</h3>
                        <p className="text-black font-sans text-sm mt-1 text-[#2D2B2B]">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EssentialService;
