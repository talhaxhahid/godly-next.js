import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import scrub from "../assets/scrub.png";
import shield from "../assets/shield.png";
import squeegee from "../assets/squeegee.png";
import detail from "../assets/detail.png";
import spark from "../assets/spark.png";

const FourStepProcess = () => {
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
        <div className="flex flex-col items-center justify-center gap-44">
          <div className="heading relative flex flex-col gap-0">
            <h1 className="tracking-[4px] p-0 m-0 text-trim">
              OUR 4 STEP PROCESS
            </h1>
            <h4
              className="  transform rotate-[-11deg] font-light"
              style={{
                color: "#FDE4C8",
                fontSize: "42px",
                marginTop: "-30px",
                marginBottom: "-30px",
                fontFamily: "luminaire-script",
                WebkitTextStrokeWidth: "2px",
                strokeLinecap: "round",
                WebkitTextStrokeColor: "black",
                paintOrder: "stroke",
              }}
            >
              With
            </h4>
            <h1 className="tracking-[4px]">RAINSHIELD TECH</h1>
          </div>

          <div className="text-white pt-4 w-full flex flex-col gap-3">
            <div className="text-white">
              <div className="flex justify-center items-center relative z-10">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <div className="text-[#E7C6A4]  text-2xl mb-2">
                        {step.number}
                      </div>
                    </div>

                    {/* Add the dotted line unless it's the last element */}
                    {index !== steps.length - 1 && (
                      <div
                        className="h-0.5 w-65 border-t-2 border-dashed border-[#E7C6A4] "
                        style={{ margin: "0px 15px" }}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex min-w-full flex-wrap justify-center gap-6 sm:gap-8 md:gap-8 px-4 sm:px-6 md:px-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="paper-bg-8 text-black p-3 rounded shadow relative z-10  w-64 stepcontainer">
                    <div className="px-2 border-2 border-black flex flex-col gap-4 items-center justify-center min-h-[285px]">
                      <div className="flex justify-center">{step.icon}</div>
                      <div className="text-center font-['satoshi-black'] font-bold text-xl">
                        {step.title}
                      </div>
                      <p className="text-center font-['satoshi-regular'] text-base">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 p-8">
            <Badge text="7 day Sparkle Guarantee" className="lowercase" />
            <Badge text="hard water stain removal" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ text }) => (
  <div
    style={{ padding: "24px 16px" }}
    className="flex items-center gap-2 bg-neutral-800 text-white lowercase px-4 py-2 rounded-md w-fit hover:rotate-[-10deg] rotate-2 transition-transform duration-300 cursor-pointer"
  >
    <span className="text-yellow-400 h-7 w-7 flex item-center justify-center transform rotate-[-115deg]">
      <Image alt="spark" src={spark}></Image>
    </span>
    <h6 className="text-4xl lowercase !text-transform-lowercase ">
      <span
        className="text-[#E7C6A4] text-4xl"
        style={{ marginRight: "0.5rem", textDecoration: "underline" }}
      >
        FREE
      </span>
      {text.toLowerCase()}
    </h6>
  </div>
);
export default FourStepProcess;
