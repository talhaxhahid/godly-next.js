import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
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
    <div
      id="promise"
      className="paper-bg-16 flex flex-col items-center justify-items-center gap-10 bg-[#FDE4C8] px-[86px] py-[150px]"
    >
      <div
        className="flex h-40 w-140 -rotate-2 flex-col items-center justify-center bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <h1 className="text-5xl font-normal tracking-wide text-[#191717]">
          old fashioned Values
        </h1>
        <h4 className="-mt-4 text-3xl font-normal text-[#191717]">
          <span className="&nbsp; underline">UNRIVALED</span>{" "}
          <span className="stroke stroke-white stroke-4 font-['luminaire-script'] text-6xl text-[#B0906E]">
            Quality
          </span>
        </h4>
      </div>
      <Story />
      <div className="py-10">
        <h1 className="text-center text-5xl font-normal tracking-wide text-[#191717]">
          Delivering
        </h1>
        <h4 className="text-center text-5xl font-normal tracking-wide text-[#191717]">
          <span className="text-[#61503E] underline">Trustworthy</span>{" "}
          <span className="text-5xl">Service</span>
        </h4>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-2 sm:px-4 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex w-full max-w-[350px] rounded-sm bg-size-[auto_10rem] bg-top-right bg-no-repeat p-2 ${
              index === 1
                ? "bg-[#E7E3E0] text-black"
                : "bg-[#201E1E] text-[#FFFFFF]"
            } `}
            style={{ backgroundImage: `url(${step.icon.src})` }}
          >
            <div className="relative z-10 flex min-h-65 flex-col items-start justify-between gap-15 rounded-md border border-dashed border-[#6A6464] p-4">
              <div className="flex flex-col gap-8">
                <h5 className="text-md font-normal">
                  <span className="">{step.number}</span>
                </h5>

                <div
                  className="max-w-[170px] text-left text-4xl"
                  style={{ marginBottom: "1rem" }}
                >
                  {step.title}
                </div>
              </div>

              <p
                className="text-left font-['satoshi-light'] text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <SectionButton />
    </div>
  );
};

export default Promise;

function Story() {
  return (
    <div className="flex w-full max-w-[1100px] gap-10 rounded-md bg-[#1F1D1D] p-4">
      <div className="flex-1">
        <div className="relative min-h-[200px] rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
          <Image src={windowCleaning} alt="window"></Image>
          <p className="text-center font-['luminaire-script'] text-base">
            Grandma & grandson
          </p>
          <div className="absolute top-2 -left-6 z-10 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
          <div className="absolute -right-6 bottom-2 z-10 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-[40px] p-3">
        <h1 className="text-6xl text-white">
          <span className="font-['marlton'] text-[#F3CA9E]">LOCAL &nbsp;</span>
          FAMILY OWNED
        </h1>
        <p className="text-justify font-['satoshi-light'] text-lg text-[#A4A4A4]">
          Godly is founded by{" "}
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">
            Perfectionist
          </span>
          looking to bridge the gaps between honest blue-collar work, modern
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">
            Craftsmanship
          </span>
          , and a fair price.
        </p>
        <p className="text-justifys font-['satoshi-light'] text-lg text-[#A4A4A4]">
          We want to &apos;reverse time&apos; back to when you
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">Trusted</span> the
          people working on your home or Business. Back to when the standard was
          to do exactly what you said you&apos;d do, rather than using it as
          merely a
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">Guideline </span>.
        </p>
      </div>
    </div>
  );
}
