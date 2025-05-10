/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alex from "@/assets/alex.webp";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <div className="paper-bg-16 bg-[#262424] md:pb-40">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-6 pb-[120px] md:px-6 md:py-25">
        <div className="flex w-full flex-col gap-[63px] md:relative md:flex-row md:items-end md:justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-end gap-6">
              <h1 className="trim md:text-trim text-[32px] tracking-wider text-[#FFFFFF] md:text-[86px]">
                TRUSTED
              </h1>
              <h4 className="trim md:text-trim text-[22px] tracking-wider text-[#FDE4C8] md:text-3xl">
                BY
              </h4>
            </div>
            <h1 className="-mt-5 md:-mt-9">
              <span
                className="text-grain !bg-[#FDE4C8] font-['luminaire-script'] text-base md:mr-4 md:text-[64px] md:before:inset-0"
                data-text="Your"
              >
                Your
              </span>{" "}
              <span
                className="text-grain text-trim !bg-[#FFFFFF] text-[32px] tracking-wider md:text-[86px]"
                data-text="NEIGHBORS"
              >
                NEIGHBORS
              </span>
            </h1>
          </div>
          <Link
            className="flex justify-end text-base md:absolute md:right-0 md:block md:text-2xl"
            href="#"
          >
            <span className="text-white underline">SEE MORE REVIEWS</span>
          </Link>
        </div>
        <QuoteCarousel />
        {/* Mobile Carousel */}
        <div className="w-full md:hidden">
          {" "}
          {/* Ensure container takes width */}
          <Carousel
            opts={{
              align: "start", // Align items to the start
              loop: true, // Enable looping
            }}
            className="w-full" // Carousel takes full width of its container
          >
            <CarouselContent className="-ml-4">
              {" "}
              {/* Use negative margin to help reveal next item */}
              {quotes.map(
                (
                  item,
                  index, // Use actual quotes data
                ) => (
                  <CarouselItem key={index} className="basis-5/6 pl-4">
                    {" "}
                    {/* Set item basis to less than full width and add padding */}
                    {/* Replicate the quote card structure from the desktop version */}
                    <div className="paper-bg-8 flex h-full flex-col gap-6 rounded-md bg-[#dec9b4] p-6 text-[#1c1c1c]">
                      {" "}
                      {/* Ensure card takes height if needed */}
                      <div className="w-ful flex flex-col items-center justify-between gap-3">
                        {/* <div
                          className="trim ribbon text-grain bg-[#2D2B2B] px-[5.64px] py-[2.82px] text-sm font-medium tracking-wide text-white"
                          data-text="SUNRISE"
                        >
                          SUNRISE
                        </div> */}
                        <div className="ribbon">SUNRISE</div>
                        <div className="flex w-full items-center gap-[10px]">
                          <img
                            src={alex.src}
                            alt="alex"
                            className="size-[47px] rounded-full bg-[#D9D9D9] object-cover"
                          />
                          <div className="flex flex-col gap-2.5">
                            <p className="trim text-base font-normal">
                              {item.author}
                            </p>
                            <div className="flex items-center gap-1.5">
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="mb-4 font-sans text-sm leading-relaxed font-normal">
                        <span className="font-semibold">We </span>
                        {item.quote.replace(/^We /, "")}
                      </p>
                    </div>
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
            {/* Position navigation buttons below the carousel */}
            <div className="relative mt-16 h-16">
              {" "}
              {/* Container for buttons */}
              <CarouselPrevious className="absolute left-1/2 size-[60px] -translate-x-[calc(100%+1.25rem)] transform rounded-full bg-white text-black" />
              <CarouselNext className="absolute left-1/2 size-[60px] translate-x-[1.25rem] transform rounded-full bg-white text-black" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const quotes = new Array(6).fill({
  quote:
    "We want to ‘reverse time’ back to when you trusted the people working on your home or business. Back to when the standard was to do exactly what you said you’d do, rather than using it as merely a guideline.",
  author: "ANDREW GARFIELD",
});

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      className="!absolute bottom-[-70px] left-1/2 z-10 ml-3 h-10 w-10 rounded-full bg-white p-2 text-black hover:bg-[#dec9b4]"
    >
      <ChevronRight />
    </Button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      className="!absolute bottom-[-70px] left-1/2 z-10 -ml-13 h-10 w-10 rounded-full bg-white p-2 text-black hover:bg-[#dec9b4]"
    >
      <ChevronLeft />
    </Button>
  );
}

function QuoteCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="hidden w-full pt-0 md:block">
      <Slider {...settings}>
        {quotes.map((item, idx) => (
          <div key={idx} className="max-w-fit md:px-2">
            <div className="flex max-w-[284px] flex-col items-center gap-6 rounded-md bg-[#dec9b4] p-6 text-[#1c1c1c] md:min-h-[200px] md:max-w-full md:px-4 md:py-6">
              <div className="ribbon">SUNRISE</div>
              <div className="flex w-full items-center gap-[10px] md:gap-4">
                <img
                  src={alex.src}
                  alt="alex"
                  className="size-[47px] rounded-full bg-[#D9D9D9] object-cover"
                />
                <div className="flex flex-col gap-2.5">
                  <p className="trim text-base font-normal">{item.author}</p>
                  <div className="flex items-center gap-1.5">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
              <p className="mb-4 font-sans text-sm leading-relaxed font-normal">
                <span className="font-semibold">We </span>
                {item.quote.replace(/^We /, "")}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M4.71103 15.7816L5.88103 10.7236L1.95703 7.32156L7.14103 6.87156L9.15703 2.10156L11.173 6.87156L16.357 7.32156L12.433 10.7236L13.603 15.7816L9.15703 13.0996L4.71103 15.7816Z"
        fill="black"
      />
    </svg>
  );
};
