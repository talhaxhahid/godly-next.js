"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useEffect } from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";

import ticketBg from "@/assets/ticket-bg.png";

import fam1 from "@/assets/fam-1.jpg";
import fam2 from "@/assets/fam-2.jpg";
import img1 from "@/assets/rocket.png";
import img2 from "@/assets/plant.png";
import img3 from "@/assets/eagle.png";
import SectionButton from "@/components/sectionButton";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
// import EstimateButton from "@/components/estimateButton";

const steps = [
  {
    number: "01",
    icon: img1,
    title: "QUICK ESTIMATES",
    text: (
      <>
        We offer free estimates within{" "}
        <span className="font-bold">24 hours</span> for all jobs.
      </>
    ),
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
      className="paper-bg-16 flex flex-col items-center justify-items-center gap-10 bg-[#ede0d2] px-[86px] py-[150px]"
    >
      <div
        className="relative flex h-[210px] w-[758px] -rotate-2 flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ticketBg.src})`,
        }}
      >
        <div className="flex -translate-y-7 flex-col items-center gap-4">
          <h1 className="text-trim -rotate-2 text-[64px] font-normal tracking-[5.76px] text-[#191717]">
            old fashioned Values
          </h1>
          <h4 className="absolute top-3/5 -mt-4 -rotate-2 text-3xl font-normal text-[#191717]">
            <span className="text-[32px] underline">UNRIVALED</span>{" "}
            <span
              className="text-trim quality-text font-['luminaire-script'] text-[80px] text-[#B0906E]"
              data-text="Quality"
            >
              Quality
            </span>
          </h4>
        </div>
      </div>
      <Story />
      <div className="py-10">
        <h1
          className="text-grain text-center text-[64px] font-normal tracking-wide text-[#191717]"
          data-text="Delivering"
        >
          Delivering
        </h1>
        <h4 className="-mt-6 text-center text-[64px] font-normal tracking-wide text-[#191717]">
          <span
            className="text-grain text-[#61503E] underline"
            data-text="Trustworthy"
          >
            Trustworthy
          </span>{" "}
          <span className="text-grain text-[64px]" data-text="Service">
            Service
          </span>
        </h4>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-2 sm:px-4 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`paper-bg-8 relative flex w-full max-w-[350px] rounded-[6px] p-2 ${
              index === 1
                ? "bg-[#E7E3E0] text-black"
                : "bg-[#201E1E] text-[#FFFFFF]"
            } `}
            style={{
              boxShadow:
                index === 1
                  ? "0px 3.015px 3.015px 0px rgba(255, 255, 255, 0.30) inset, 0px 3.015px 3.015px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset"
                  : "0px 3.015px 3.015px 0px rgba(255, 255, 255, 0.30) inset, 0px 3.015px 3.015px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset",
            }}
          >
            <img
              src={step.icon.src}
              alt={step.title}
              className="absolute top-0 right-0 h-[80%]"
            />
            <div className="relative z-10 flex min-h-65 flex-col items-start justify-between gap-15 rounded-md border border-dashed border-[#6A6464] p-4">
              <div className="flex flex-col gap-8">
                <h5 className="text-md font-normal">
                  <span
                    className="text-grain text-base"
                    data-text={step.number}
                  >
                    {step.number}
                  </span>
                </h5>

                <div
                  className="text-grain max-w-[170px] text-left text-4xl"
                  data-text={step.title}
                  style={{ marginBottom: "1rem" }}
                >
                  {step.title}
                </div>
              </div>

              <p
                className="text-grain text-left text-base"
                data-text={step.text}
                style={{ fontFamily: "Inter" }}
              >
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <SectionButton>Get a Free Estimate</SectionButton>
      {/* <EstimateButton /> */}
    </div>
  );
};

export default Promise;

function Story() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Setup event listeners for the carousel
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);
  return (
    <div
      className="mt-12 flex w-full max-w-[1100px] gap-10 rounded-[12px] bg-[#1F1D1D] p-4"
      style={{
        boxShadow:
          "0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset, 0px 3.015px 3.015px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="relative flex-1 overflow-visible">
        <div className="absolute top-2 -left-6 z-50 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
        <div className="absolute -right-6 bottom-8 z-50 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
        <Carousel
          className="carousel-dots pointer-none: w-full overflow-visible"
          setApi={setApi}
        >
          <CarouselContent className="overflow-visible">
            <CarouselItem className="overflow-visible">
              <div className="relative min-h-[200px] overflow-visible rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
                <Image
                  src={fam1}
                  alt="family"
                  className="h-contain bg-full h-full overflow-clip"
                />
                <p className="text-center font-['luminaire-script'] text-base">
                  Our family business
                </p>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="relative min-h-[200px] rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
                <Image src={fam2} alt="family" />
                <p className="text-center font-['luminaire-script'] text-base">
                  Quality service
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? "bg-[#F3CA9E]" : "bg-[#F3CA9E]/30"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-[40px] p-3">
        <h1 className="text-6xl text-white">
          <span
            className="text-grain font-['marlton'] text-[#F3CA9E]"
            data-text="LOCAL"
          >
            LOCAL
          </span>
          <span className="text-grain" data-text=" FAMILY OWNED">
            {" "}
            FAMILY OWNED
          </span>
        </h1>
        <p
          className="text-justify text-base tracking-wide text-[#A4A4A4]"
          style={{
            fontFamily: "var(--font-inter)",
          }}
        >
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
        <p
          className="text-justify text-base tracking-wide text-[#A4A4A4]"
          style={{
            fontFamily: "var(--font-inter)",
          }}
        >
          We want to ‘reverse time’ back to when you
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
