/* eslint-disable @next/next/no-img-element */
"use client";
import pic1 from "@/assets/blue-collar/1.png";
import pic2 from "@/assets/blue-collar/2.png";
import pic3 from "@/assets/blue-collar/3.png";
import pic4 from "@/assets/blue-collar/4.png";
import pic5 from "@/assets/blue-collar/5.png";
import pic6 from "@/assets/blue-collar/6.png";
import pic7 from "@/assets/blue-collar/7.png";
import pic8 from "@/assets/blue-collar/8.png";
import pic9 from "@/assets/blue-collar/9.png";
import pic10 from "@/assets/blue-collar/10.png";

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
    <div className="paper-bg-16 flex flex-col items-center justify-center gap-[70px] bg-[#262424] py-[150px]">
      <div className="flex flex-col items-center justify-center px-[40px]">
        <h1
          className="text-grain text-center text-[102px] tracking-[9.18px] text-[#F3CA9E]"
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
          className="trim z-10 -mt-8 text-center font-['luminaire-script'] text-[64px] font-normal tracking-[5.76px] text-white"
        >
          Reimagimaded
        </p>
      </div>
      <div className="grid grid-cols-5 gap-[58px]">
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
    </div>
  );
};

export default TeamGallery;
