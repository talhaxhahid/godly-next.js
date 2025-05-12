/* eslint-disable @next/next/no-img-element */
"use client";
import pic1 from "@/assets/blue-collar/1.webp";
import pic2 from "@/assets/blue-collar/2.webp";
import pic3 from "@/assets/blue-collar/3.webp";
import pic4 from "@/assets/blue-collar/4.webp";
import pic5 from "@/assets/blue-collar/5.webp";
import pic6 from "@/assets/blue-collar/6.webp";
import pic7 from "@/assets/blue-collar/7.webp";
import pic8 from "@/assets/blue-collar/8.webp";
import pic9 from "@/assets/blue-collar/9.webp";
import pic10 from "@/assets/blue-collar/10.webp";

const teamImages = [
  { src: pic1, alt: "team", rotate: "-4.277deg" },
  { src: pic2, alt: "team", rotate: "0.856deg" },
  { src: pic3, alt: "team", rotate: "-3.93deg" },
  { src: pic4, alt: "team", rotate: "3.759deg" },
  { src: pic5, alt: "team", rotate: "-2.008deg" },
  { src: pic6, alt: "team", rotate: "1.392deg" },
  { src: pic7, alt: "team", rotate: "-2.008deg" },
  { src: pic8, alt: "team", rotate: "1.629deg" },
  { src: pic9, alt: "team", rotate: "-2.008deg" },
  { src: pic10, alt: "team", rotate: "-2.008deg" },
];

const TeamGallery = () => {
  return (
    <div className="paper-bg-16 flex flex-col items-center justify-center gap-[63px] bg-[#262424] py-[100px] md:gap-[70px] md:py-[150px]">
      <div className="flex flex-col items-center justify-center px-[40px]">
        <h1
          className="text-grain !bg-[#F3CA9E] text-center text-[48px] md:text-[102px] md:tracking-[9.18px]"
          data-text="BLUE COLLAR"
          style={{
            boxShadow:
              "0px 0px 8.5px rgba(243, 202, 158, 0.00), 0px 0px 8.5px rgba(243, 202, 158, 0.00), 0px 0px 8.5px rgba(243, 202, 158, 0.00), 0px 0px 8.5px rgba(243, 202, 158, 0.00), 0px 0px 8.5px rgba(243, 202, 158, 0.00), 0px 0px 8.5px rgba(243, 202, 158, 0.00), 0px 0px 8.5px rgba(243, 202, 158, 0.00), 0px 0px 8.5px rgba(243, 202, 158, 0.00)",
          }}
        >
          BLUE COLLAR
        </h1>
        <p
          style={{
            WebkitTextStrokeWidth: "5px",
            strokeLinecap: "round",
            WebkitTextStrokeColor: "#1F1D1D",
            paintOrder: "stroke",
          }}
          className="trim z-10 -mt-4 text-center font-['luminaire-script'] text-[27px] font-normal tracking-[2.419px] text-white md:-mt-8 md:text-[64px] md:tracking-[5.76px]"
        >
          Reimagimaded
        </p>
      </div>

      {/* Desktop grid - hidden on mobile */}
      <div className="hidden grid-cols-5 gap-[58px] md:grid">
        {teamImages.map((image, index) => (
          <div
            key={index}
            className="rounded-[2.395px] border-[1.2px] border-[rgba(106,100,100,0.12)] bg-white p-[7.2px] pb-[14.37px]"
            style={{
              boxShadow:
                "0px 2.395px 2.395px 0px rgba(0, 0, 0, 0.25), 0px 2.395px 2.395px 0px rgba(255, 255, 255, 0.30) inset",
              transform: `rotate(${image.rotate})`,
            }}
          >
            <img
              src={image.src.src}
              alt={image.alt}
              className="h-[230px] w-[180px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile carousel - only visible on mobile */}
      <div className="w-full overflow-hidden md:hidden">
        {/* Top row - moving left */}
        <div className="relative mb-8">
          <div className="animate-carousel-left flex">
            {/* First set of images */}
            <div className="flex gap-[25px]">
              {teamImages.slice(0, 5).map((image, index) => (
                <div
                  key={`top-a-${index}`}
                  className="shrink-0 rounded-[2.395px] border-[1.2px] border-[rgba(106,100,100,0.12)] bg-white p-[7.2px] pb-[14.37px]"
                  style={{
                    boxShadow:
                      "0px 2.395px 2.395px 0px rgba(0, 0, 0, 0.25), 0px 2.395px 2.395px 0px rgba(255, 255, 255, 0.30) inset",
                    transform: `rotate(${image.rotate})`,
                  }}
                >
                  <img
                    src={image.src.src}
                    alt={image.alt}
                    className="h-[160px] w-[120px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row - moving right */}
        <div className="relative">
          <div className="animate-carousel-right flex">
            {/* First set of images */}
            <div className="flex gap-[25px]">
              {teamImages.slice(5, 10).map((image, index) => (
                <div
                  key={`bottom-a-${index}`}
                  className="shrink-0 rounded-[2.395px] border-[1.2px] border-[rgba(106,100,100,0.12)] bg-white p-[7.2px] pb-[14.37px]"
                  style={{
                    boxShadow:
                      "0px 2.395px 2.395px 0px rgba(0, 0, 0, 0.25), 0px 2.395px 2.395px 0px rgba(255, 255, 255, 0.30) inset",
                    transform: `rotate(${image.rotate})`,
                  }}
                >
                  <img
                    src={image.src.src}
                    alt={image.alt}
                    className="h-[160px] w-[120px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes carousel-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 2));
            }
          }

          @keyframes carousel-right {
            0% {
              transform: translateX(calc(-100% / 2));
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-carousel-left {
            animation: carousel-left 30s linear infinite;
          }

          .animate-carousel-right {
            animation: carousel-right 30s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TeamGallery;
