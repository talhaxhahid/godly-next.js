import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import background from "../assets/texture.png";
import headingBg from "../assets/headingBg.png";
import windowCleaning from "@/assets/windowCleaning.png";
import img1 from "@/assets/rocket.png";
import img2 from "@/assets/plant.png";
import img3 from "@/assets/eagle.png";
import SectionButton from "@/components/sectionButton";

    const steps = [
        {
            number: "01",
            icon: img1,
            title: "QUICK ESTIMATES",
            text: "We offer free estimates within 24 hours for all jobs.",
        },
        {
            number: "02",
            icon: img2,
            title: "FULLY INSURED",
            text: "No need to worry, we are insured up to $2M plus workers comp.",
        },
        {
            number: "03",
            icon: img3,
            title: "BUILT ON INTEGRITY",
            text: "If you’re ever dissatisfied with our service, we won’t stop until we’ve made it right.",
        },

    ];


const Promise = () => {



    return (
        <div id="promise"
            className="flex gap-10 p-24 flex-col justify-items-center items-center min-h-screen bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background.src})` }}>
            
            <div className="-rotate-2 flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat h-40 w-140" style={{ backgroundImage: `url(${headingBg.src})` }}>
            <h1 className="text-5xl font-normal text-[#191717] tracking-wide">old fashioned Values</h1>
            <h4 className="text-3xl -mt-4 font-normal text-[#191717]"><span className="underline &nbsp;">UNRIVALED</span> <span className="text-[#B0906E] text-6xl font-['luminaire-script']">Quality</span></h4>
            </div>
            <Story/>
            <div className="py-10">
            <h1 className="text-5xl font-normal text-[#191717] tracking-wide text-center">Delivering</h1>
            <h4 className="text-5xl  font-normal text-[#191717] tracking-wide text-center"><span className="underline text-[#61503E] ">Trustworthy</span> <span className=" text-5xl ">Service</span></h4>
            </div>
            
            <div className=" py-5 flex flex-wrap justify-center gap-6 sm:gap-2 md:gap-4 px-4 sm:px-4 md:px-8 relative z-10">
                    {steps.map((step, index) => (
                        <div key={index} className={`  rounded-sm p-2 bg-size-[auto_10rem] bg-top-right bg-no-repeat ${index === 1 ? "bg-[#E7E3E0] text-black" : "bg-[#201E1E] text-[#FFFFFF]"} `} style={{ backgroundImage: `url(${step.icon.src})` }}>
                            <div className="flex flex-col justify-between items-start border-[#6A6464]  p-6 rounded-md border border-dashed  relative z-10  w-70 min-h-65 gap-15 ">
                                   <div>
                                    <h5 className="text-md font-normal "><span className="">{step.number}</span></h5>
                                    
                                    <div
                                        className="text-left  text-2xl mb-8"
                                        style={{ marginBottom: "1rem" }}
                                    >
                                        {step.title}
                                    </div>
                                    </div>
                                    
                                    <p
                                        className="text-left text-sm "
                                        style={{ fontFamily: "sans-serif" }}
                                    >
                                        {step.text}
                                    </p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            <SectionButton/>
            

        </div>
    );

}

export default Promise;


function Story(){
    return(

        <div className="bg-[#1F1D1D] rounded-md  w-full flex  p-4 gap-10 ">
            <div className="flex-1 ">
            <div className="bg-[#e7e3df] text-[#1c1c1c] rounded-sm p-2 min-h-[200px] relative">
                <Image src={windowCleaning}  alt="window"></Image>
                <p className="font-['luminaire-script'] text-base text-center">Grandma & grandson</p>
                <div className="h-3 w-18 -rotate-45 bg-[#F3CA9ECC] absolute top-2 -left-6 z-10"></div>
                <div className="h-3 w-18 -rotate-45 bg-[#F3CA9ECC] absolute bottom-2 -right-6 z-10"></div>
              </div>
            </div>
            <div className="flex-1 p-3 ">
                <h1 className="text-white text-4xl mb-3"><span className="text-[#F3CA9E]">LOCAL &nbsp;</span>FAMILY OWNED</h1>
                <p className="text-[#A4A4A4] font-sans">Godly is founded by <span className="text-[#F3CA9E] bg-[#2D2B2B] px-1">Perfectionist</span>  looking to bridge the gaps between honest blue-collar work, modern <span className="text-[#F3CA9E] bg-[#2D2B2B] px-1">Craftsmanship</span>, and a fair price.</p>
                <br/>
                <p className="text-[#A4A4A4] font-sans">We want to ‘reverse time’ back to when you <span className="text-[#F3CA9E] bg-[#2D2B2B] px-1">Trusted</span> the people working on your home or Business. Back to when the standard was to do exactly what you said you’d do, rather than using it as merely a <span className="text-[#F3CA9E] bg-[#2D2B2B] px-1">Guideline </span>.</p>

            </div>

        </div>


    );
}

