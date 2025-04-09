import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import background from "../assets/texture.png";
import img1 from "@/assets/howitworks1.png";
import img2 from "@/assets/howitworks2.png";
import img3 from "@/assets/howitworks3.png";
import SectionButton from "@/components/sectionButton";


const HowItWorks = () => {


    const steps = [
        {
            number: "01",
            icon: <Image src={img1} alt="scrub" className="fourstepicon" />,
            title: "CALL US",
            text: "Call us or get a quote to get your free estimate and schedule your service",
        },
        {
            number: "02",
            icon: <Image src={img2} alt="squeegee" className="fourstepicon" />,
            title: "COUNT ON US",
            text: "We show up exactly as scheduled, honoring both our word and your time.",
        },
        {
            number: "03",
            icon: <Image src={img3} alt="detail" className="fourstepicon" />,
            title: "DONE RIGHT",
            text: "We deliver honest, quality work with a smile and won’t leave until you’re satisfied.",
        },

    ];

    return (
        <div
            className="flex p-16 flex-col justify-items-center items-center min-h-screen bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background.src})` }}>
            <h1 className="text-6xl font-normal text-[#191717]">HOW IT WORKS</h1>
            <h4 className="text-3xl mt-4 font-normal text-[#61503E]">IN 3 SIMPLE STEPS</h4>
            <div
                className="text-white pb-16 pt-16"
            // style={{ marginTop: "1rem", marginBottom: "3rem" }}
            >
                <div className="flex flex-wrap justify-center gap-6 sm:gap-2 md:gap-4 px-4 sm:px-4 md:px-8 relative z-10">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-[#e7e3e0] text-black p-6 rounded-md shadow relative z-10  w-80 ">
                                    <h5 className="text-xl font-normal text-[#AE9D8A]">#<span className="font-[Stencil]">{step.number}</span></h5>
                                    
                                    <div
                                        className="text-left  text-2xl mb-8"
                                        style={{ marginBottom: "1rem" }}
                                    >
                                        {step.title}
                                    </div>
                                    <div className="flex justify-center mb-4">{step.icon}</div>
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
            </div>
            <SectionButton/>

        </div>
    );

}

export default HowItWorks;