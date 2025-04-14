import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import scrub from "../assets/scrub.png";
import shield from "../assets/shield.png";
import squeegee from "../assets/squeegee.png";
import detail from "../assets/detail.png";
import spark from "../assets/spark.png";

const ServiceNearYou = () => {
  const steps = [
    {
      number: "01",
      icon: <Image src={scrub} alt="scrub" className="fourstepicon" />,
      title: "Scrub",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
    {
      number: "02",
      icon: <Image src={squeegee} alt="squeegee" className="fourstepicon" />,
      title: "Squeegee",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
    {
      number: "03",
      icon: <Image src={detail} alt="detail" className="fourstepicon" />,
      title: "Detail",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
    {
      number: "04",
      icon: <Image src={shield} alt="shield" className="fourstepicon" />,
      title: "RainShield Tech",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
  ];
  return (
    <div className="fourstepprocess" id="about">
      <div className="fourstepprocess-inner">
        <div className="">
          <h1 className=" text-[#FDE4C8] text-center text-6xl">Solar Panel</h1>
          <h4 className=" font-['luminaire-script'] text-4xl text-center text-white -mt-3 ">
            Near You
          </h4>
          
        </div>

        

        <div
          className="text-white pb-16 pt-20"
          // style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-[#CDB9A2] text-black p-3 rounded-md  relative z-10  w-64 ">
                  <div className=" border-2 border-dashed text-[#2D2B2B] border-[#2D2B2B] rounded-md p-2">
                    <div className="flex justify-center mb-4">{step.icon}</div>
                    <div
                      className="text-center  text-xl mb-8"
                      style={{ marginBottom: "1rem" }}
                    >
                      {step.title}
                    </div>
                    <p className="text-center font-sans text-md ">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default ServiceNearYou;
