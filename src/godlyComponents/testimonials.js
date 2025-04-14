
"use client";
import React from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {


  return (
    <div className="flex flex-col items-center bg-[#262424]  min-h-screen px-6 py-24 gap-20">
        <div>
        <div className="flex gap-2 items-end">
        <h1 className="text-[#FFFFFF] text-6xl  tracking-wide">TRUSTED</h1>
        <h4 className="text-[#FDE4C8] text-xl  tracking-wide ">BY </h4>
        </div>
        <h1 className="text-white text-5xl tracking-wide"><span className="text-[#FDE4C8] text-5xl font-['luminaire-script'] ">Your</span> neighbors</h1>
        </div>
        <QuoteCarousel/>
      
      
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
    const { className, onClick } = props;
    return (
      <Button onClick={onClick} className="!absolute bottom-[-70px] left-1/2 ml-6 z-10 rounded-full p-2 w-10 h-10 bg-white text-black hover:bg-[#dec9b4]">
        <ChevronRight />
      </Button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <Button onClick={onClick} className="!absolute bottom-[-70px] left-1/2 -ml-16 z-10 rounded-full p-2 w-10 h-10 bg-white text-black hover:bg-[#dec9b4]">
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
      <div className="w-full pt-0 py-12 px-6">
        <Slider {...settings}>
          {quotes.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-[#dec9b4] text-[#1c1c1c] rounded-md px-4 py-6 min-h-[200px]">
                <p className="text-sm leading-relaxed mb-4 font-sans font-normal">
                  <span className="font-semibold">We </span>
                  {item.quote.replace(/^We /, "")}
                </p>
                <p className="font-normal text-base">{item.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
}