"use client";
import pic1 from "@/assets/p1.jpg";
import pic2 from "@/assets/p2.jpg";
import pic3 from "@/assets/p3.jpg";
import pic4 from "@/assets/p4.jpg";
import pic5 from "@/assets/p5.jpg";
import pic6 from "@/assets/p6.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";

const teamImages = [
  { src: pic1, alt: "team" },
  { src: pic2, alt: "team" },
  { src: pic3, alt: "team" },
  { src: pic4, alt: "team" },
  { src: pic5, alt: "team" },
  { src: pic6, alt: "team" },
];

const TeamGallery = () => {
  const autoplayRef = useRef(null);

  // This ensures the autoplay doesn't stop unexpectedly
  useEffect(() => {
    if (autoplayRef.current) {
      // Reset the plugin if it gets stopped for any reason
      const interval = setInterval(() => {
        if (!autoplayRef.current.isPlaying()) {
          autoplayRef.current.play();
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="paper-bg-16 flex flex-col items-center justify-center gap-[70px] bg-[#262424] px-[40px] py-[150px]">
      <div className="flex max-w-[566px] flex-col items-center justify-center gap-[52px]">
        <h1
          className="text-grain text-center text-[64px] tracking-[6px] text-white"
          data-text="Team Gallery"
        >
          Team Gallery
        </h1>
        <p className="text-center font-['satoshi-light'] text-[24px] leading-[115%] font-normal text-white/60">
          Godly can clean nearly all components of your home or building&apos;s
          exterior.
        </p>
      </div>

      <Carousel
        className="flex h-full min-h-[270px] w-full max-w-[1200px] items-center justify-between"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          inViewThreshold: 0,
          slidesToScroll: 1,
          skipSnaps: true,
          speed: 1000, // Slower speed for smoother motion
        }}
        plugins={[
          Autoplay({
            delay: 700,
            stopOnInteraction: false, // Don't stop on user interaction
            playOnInit: true,
            stopOnMouseEnter: false, // Don't stop when mouse enters
            stopOnLastSnap: false, // Don't stop at the last snap
            rootNode: (emblaRoot) => emblaRoot.parentElement, // Better event handling
          }),
        ]}
      >
        <CarouselContent className="flex h-full min-h-[270px] w-full max-w-[1200px] items-center justify-between gap-[25px]">
          {/* Triplicate images for smoother looping experience */}
          {[...teamImages, ...teamImages, ...teamImages].map((image, index) => (
            <CarouselItem key={index} className="basis-auto pl-[25px]">
              <div
                className={`flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center justify-start gap-[10px] rounded-[2px] border-[1px] border-white/20 bg-white px-[7px] pt-[7px] pb-[15px] transition-transform hover:scale-105 ${
                  index % 2 === 0 ? "rotate-[3.759deg]" : "rotate-[-4.277deg]"
                }`}
              >
                <img
                  src={image.src.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TeamGallery;
