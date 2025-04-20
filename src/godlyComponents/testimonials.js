"use client";
import React from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  return (
    <div className="paper-bg-16">
      <div className="paper-bg-16 mx-auto flex max-w-[1440px] flex-col items-center gap-20 bg-[#262424] px-6 py-25">
        <div className="relative flex w-full items-end justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-end gap-2">
              <h1 className="text-trim text-6xl tracking-wide text-[#FFFFFF]">
                TRUSTED
              </h1>
              <h4 className="text-trim text-xl tracking-wide text-[#FDE4C8]">
                BY
              </h4>
            </div>
            <h1 className="text-6xl tracking-wide text-white">
              <span className="font-['luminaire-script'] text-5xl text-[#FDE4C8]">
                Your
              </span>{" "}
              neighbors
            </h1>
          </div>
          <div className="absolute right-0">
            <Button
              variant="link"
              className="see-more-reviews font-['marlton'] text-white underline"
            >
              See More Reviews
            </Button>
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
            <div className="min-h-[200px] rounded-md bg-[#dec9b4] px-4 py-6 text-[#1c1c1c]">
              <p className="mb-4 font-sans text-sm leading-relaxed font-normal">
                <span className="font-semibold">We </span>
                {item.quote.replace(/^We /, "")}
              </p>
              <p className="text-base font-normal">{item.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
