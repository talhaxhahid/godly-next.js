import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import near1 from "@/assets/near1.png";
import near2 from "@/assets/near2.png";
import near3 from "@/assets/near3.png";
import near4 from "@/assets/near4.png";
import near5 from "@/assets/near5.png";
import Services from "@/data/servicesData";
const ServiceNearYou = ({ slug }) => {
  const steps1 = [
    {
      number: "01",
      icon: (
        <Image
          src={near1}
          height={40}
          width={40}
          alt="scrub"
          className="fourstepicon"
        />
      ),
      title: "Scrub",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
    {
      number: "02",
      icon: (
        <Image
          src={near2}
          height={40}
          width={40}
          alt="squeegee"
          className="fourstepicon"
        />
      ),
      title: "Squeegee",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
  ];
  const steps2 = [
    {
      number: "03",
      icon: (
        <Image
          src={near3}
          height={40}
          width={40}
          alt="detail"
          className="fourstepicon"
        />
      ),
      title: "Detail",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
    {
      number: "04",
      icon: (
        <Image
          src={near4}
          height={40}
          width={40}
          alt="shield"
          className="fourstepicon"
        />
      ),
      title: "RainShield Tech",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
    {
      number: "04",
      icon: (
        <Image
          src={near5}
          height={40}
          width={40}
          alt="shield"
          className="fourstepicon"
        />
      ),
      title: "RainShield Tech",
      text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
    },
  ];
  return (
    <div className="fourstepprocess bg-[#262424]">
      <div className="fourstepprocess-inner">
        <div className="">
          <h1 className=" text-[#FDE4C8] text-center text-6xl">
            {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
          </h1>
          <h4 className=" font-['luminaire-script'] text-4xl text-center text-white -mt-3 ">
            Near You
          </h4>
        </div>

        <div
          className="text-white pb-16 pt-20"
          // style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 relative z-10 py-5">
            {Services[slug]["nearyou"].slice(0, 2).map((step, index) => (
              <div key={index} className="flex flex-col items-center ">
                <div className="bg-[#CDB9A2] text-black p-3 rounded-md  relative z-10  w-64 min-h-60 ">
                  <div className=" border-[1.5px] border-dashed text-[#2D2B2B] border-[#2D2B2B] rounded-md p-2 h-full flex flex-col items-center justify-between">
                    <div>
                      <div className="flex justify-center mb-4">
                        {steps2[index].icon}
                      </div>
                      <div
                        className="text-center  text-xl mb-8"
                        style={{ marginBottom: "1rem" }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <p className="text-center font-sans text-sm ">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 relative z-10 py-5">
            {Services[slug]["nearyou"].slice(2, 5).map((step, index) => (
              <div key={index} className="flex flex-col items-center ">
                <div className="bg-[#CDB9A2] text-black p-3 rounded-md  relative z-10  w-64 min-h-60 ">
                  <div className=" border-[1.5px] border-dashed text-[#2D2B2B] border-[#2D2B2B] rounded-md p-2 h-full flex flex-col items-center justify-between">
                    <div>
                      <div className="flex justify-center mb-4">
                        {steps2[index].icon}
                      </div>
                      <div
                        className="text-center  text-xl mb-8"
                        style={{ marginBottom: "1rem" }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <p className="text-center font-sans text-sm ">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-white font-normal text-3xl tracking-wide w-120 text-center">
          Maximize energy{" "}
          <span className="font-['luminaire-script'] text-[#F3CA9E]">
            Efficiency
          </span>{" "}
          with our professional solar panel cleaning services.
        </h1>
      </div>
    </div>
  );
};

export default ServiceNearYou;
