import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
// import near1 from "@/assets/near1.png";
// import near2 from "@/assets/near2.png";
import near3 from "@/assets/near3.png";
import near4 from "@/assets/near4.png";
import near5 from "@/assets/near5.png";
import Services from "@/data/servicesData";
const ServiceNearYou = ({ slug }) => {
  // const steps1 = [
  //   {
  //     number: "01",
  //     icon: (
  //       <Image
  //         src={near1}
  //         height={40}
  //         width={40}
  //         alt="scrub"
  //         className="fourstepicon"
  //       />
  //     ),
  //     title: "Scrub",
  //     text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
  //   },
  //   {
  //     number: "02",
  //     icon: (
  //       <Image
  //         src={near2}
  //         height={40}
  //         width={40}
  //         alt="squeegee"
  //         className="fourstepicon"
  //       />
  //     ),
  //     title: "Squeegee",
  //     text: "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
  //   },
  // ];
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
          <h1 className="text-center text-6xl text-[#FDE4C8]">
            {Services[slug]["hero"][0]}&nbsp;{Services[slug]["hero"][1]}
          </h1>
          <h4 className="-mt-3 text-center font-['luminaire-script'] text-4xl text-white">
            Near You
          </h4>
        </div>

        <div
          className="pt-20 pb-16 text-white"
          // style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          <div className="relative z-10 flex flex-wrap justify-center gap-6 px-4 py-5 sm:gap-8 sm:px-6 md:gap-12 md:px-8">
            {Services[slug]["nearyou"].slice(0, 2).map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative z-10 min-h-60 w-64 rounded-md bg-[#CDB9A2] p-3 text-black">
                  <div className="flex h-full flex-col items-center justify-between rounded-md border-[1.5px] border-dashed border-[#2D2B2B] p-2 text-[#2D2B2B]">
                    <div>
                      <div className="mb-4 flex justify-center">
                        {steps2[index].icon}
                      </div>
                      <div
                        className="mb-8 text-center text-xl"
                        style={{ marginBottom: "1rem" }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <p className="text-center font-sans text-sm">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative z-10 flex flex-wrap justify-center gap-6 px-4 py-5 sm:gap-8 sm:px-6 md:gap-12 md:px-8">
            {Services[slug]["nearyou"].slice(2, 5).map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative z-10 min-h-60 w-64 rounded-md bg-[#CDB9A2] p-3 text-black">
                  <div className="flex h-full flex-col items-center justify-between rounded-md border-[1.5px] border-dashed border-[#2D2B2B] p-2 text-[#2D2B2B]">
                    <div>
                      <div className="mb-4 flex justify-center">
                        {steps2[index].icon}
                      </div>
                      <div
                        className="mb-8 text-center text-xl"
                        style={{ marginBottom: "1rem" }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <p className="text-center font-sans text-sm">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="w-120 text-center text-3xl font-normal tracking-wide text-white">
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
