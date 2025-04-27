/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alex from "@/assets/alex.jpg";

const Testimonials = () => {
  return (
    <div className="paper-bg-16 bg-[#262424] pb-40">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-6 py-25">
        <div className="relative flex w-full items-end justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-end gap-6">
              <h1 className="text-trim text-[86px] tracking-wider text-[#FFFFFF]">
                TRUSTED
              </h1>
              <h4 className="text-trim text-3xl tracking-wider text-[#FDE4C8]">
                BY
              </h4>
            </div>
            <h1 className="-mt-9">
              <span
                className="text-grain mr-4 font-['luminaire-script'] text-[64px] text-[#FDE4C8] before:inset-0"
                data-text="Your"
              >
                Your
              </span>{" "}
              <span
                className="text-grain text-trim text-[86px] tracking-wider text-[#FFFFFF]"
                data-text="NEIGHBORS"
              >
                NEIGHBORS
              </span>
            </h1>
          </div>
        </div>
        <QuoteCarousel />
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
    <div className="w-full pt-0">
      <Slider {...settings}>
        {quotes.map((item, idx) => (
          <div key={idx} className="px-2">
            <div className="flex min-h-[200px] flex-col gap-6 rounded-md bg-[#dec9b4] px-4 py-6 text-[#1c1c1c]">
              <div className="flex items-center gap-4">
                {/* <div className="size-[46px] rounded-full bg-[#D9D9D9]" /> */}
                <img
                  src={alex.src}
                  alt="alex"
                  className="size-[47.047px] rounded-full bg-[#D9D9D9] object-cover"
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
