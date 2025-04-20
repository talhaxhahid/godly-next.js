import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import scrub from "../assets/scrub.png";
import shield from "../assets/shield.png";
import squeegee from "../assets/squeegee.png";
import detail from "../assets/detail.png";
import spark from "../assets/spark.png";
import { cn } from "@/lib/utils";

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
            <h1 className="text-trim m-0 p-0 tracking-[4px]">
              OUR 4 STEP PROCESS
            </h1>
            <h4
              className="rotate-[-11deg] transform font-light"
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

          <div className="flex w-full flex-col gap-3 pt-4 text-white">
            <div className="text-white">
              <div className="relative z-10 flex items-center justify-center">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <div className="mb-2 text-2xl text-[#E7C6A4]">
                        {step.number}
                      </div>
                    </div>

                    {/* Add the dotted line unless it's the last element */}
                    {index !== steps.length - 1 && (
                      <div
                        className="h-0.5 w-65 border-t-2 border-dashed border-[#E7C6A4]"
                        style={{ margin: "0px 15px" }}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="relative z-10 flex min-w-full flex-wrap justify-center gap-6 px-4 sm:gap-8 sm:px-6 md:gap-8 md:px-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="paper-bg-8 stepcontainer relative z-10 w-64 rounded p-3 text-black shadow">
                    <div className="flex min-h-[285px] flex-col items-center justify-center gap-4 border-2 border-black px-2">
                      <div className="flex justify-center">{step.icon}</div>
                      <div className="text-center font-['satoshi-black'] text-xl font-bold">
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

          <div className="relative flex flex-col items-center justify-center gap-2 p-8">
            <Badge
              text="7 day Sparkle Guarantee"
              className="z-20 lowercase shadow-lg"
            />
            <Badge
              text="hard water stain removal"
              className="rotate-[-10deg]!"
            />
            <div className="absolute right-0 bottom-5 -rotate-5">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ text, className }) => (
  <div
    style={{ padding: "24px 16px" }}
    className={cn(
      "flex w-fit rotate-2 cursor-pointer items-center gap-2 rounded-md bg-neutral-800 px-4 py-2 text-white lowercase transition-transform duration-300 hover:rotate-[-10deg]",
      className,
    )}
  >
    <span className="item-center flex h-7 w-7 rotate-[-115deg] transform justify-center text-yellow-400">
      <Image alt="spark" src={spark}></Image>
    </span>
    <h6 className="!text-transform-lowercase text-4xl lowercase">
      <span
        className="text-4xl text-[#E7C6A4]"
        style={{ marginRight: "0.5rem", textDecoration: "underline" }}
      >
        FREE
      </span>
      <span className="font-sans font-bold">{text.toLowerCase()}</span>
    </h6>
  </div>
);
export default FourStepProcess;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="74"
    height="79"
    viewBox="0 0 74 79"
    fill="none"
  >
    <g filter="url(#filter0_d_2667_506)">
      <path
        d="M25.4858 59.5258C23.9975 58.4708 21.8135 56.0799 18.4259 53.3001C16.5077 51.79 12.1165 49.146 10.5545 47.5701C9.49265 46.6464 8.86534 45.3208 8.82438 43.914C8.67908 41.2596 10.5299 38.9111 13.1447 38.4319C15.2193 38.2345 17.3063 38.6507 19.1465 39.6288C20.4162 40.2616 21.631 40.9991 22.7784 41.8335C23.6222 42.4144 23.8679 42.6746 24.823 43.3473C25.7781 44.02 26.5035 44.7621 25.7659 43.5641C24.9199 41.7303 23.4896 38.6523 21.9718 35.9767C20.8152 33.9442 20.5963 33.6343 19.6398 32.1263C18.6833 30.6184 17.9992 29.3207 16.935 27.5945C15.9236 25.8883 15.0024 24.1301 14.1754 22.3272C12.9666 20.0669 12.5637 17.4623 13.033 14.9423C13.9911 13.2801 15.8536 12.3556 17.7569 12.5974C19.8201 13.334 21.6032 14.6941 22.859 16.4892C24.6027 18.6387 26.0499 21.0125 27.1618 23.547C28.9302 27.1915 31.8047 32.4242 32.1897 33.5614C31.7621 32.1445 30.5926 29.2385 30.4561 27.8173C30.3 26.3399 30.9212 24.8872 32.0972 23.9795C33.132 23.2854 34.3147 22.8426 35.5509 22.6864C36.8131 22.5763 38.0708 22.9418 39.0774 23.7112C40.6389 25.6775 41.8469 27.9001 42.6476 30.2798C42.1152 28.1449 41.8465 25.9528 41.8475 23.7526C42.2153 22.6578 42.9536 21.7257 43.935 21.117C45.1312 20.5035 46.4286 20.1119 47.7644 19.9613C48.9073 19.995 50.0129 20.3753 50.9347 21.0518C52.3586 22.8379 53.4967 24.8342 54.3084 26.9694C54.4702 27.5055 54.1258 25.395 54.5637 23.8005C54.6093 22.3686 55.4152 21.0699 56.678 20.3934C57.9408 19.7169 59.4685 19.7655 60.6857 20.5208C61.903 21.2762 62.6248 22.6235 62.5792 24.0554C63.3305 26.5445 63.2958 26.4296 63.8043 28.1145C64.3129 29.7995 64.7636 31.2929 65.1912 32.7098C65.728 34.9928 66.093 37.3128 66.2831 39.6503C66.2028 41.7934 65.8313 43.9156 65.1787 45.9585C63.9434 48.5874 63.1123 51.3879 62.7136 54.265C62.8043 55.6073 63.064 56.9327 63.4864 58.21C63.8416 59.4007 64.3537 60.5388 65.0092 61.5944C63.4935 62.2324 61.9147 62.7089 60.299 63.0159C58.7362 63.2369 55.9966 60.8047 55.2214 60.0359C54.8262 59.6168 54.2279 59.4571 53.6764 59.6236C53.1249 59.79 52.7148 60.254 52.6175 60.8218C52.2142 62.5313 51.1352 65.7398 49.8795 66.286C47.4062 67.3667 42.0292 68.6552 37.8552 69.915C37.8552 69.915 37.3887 65.8776 35.4026 64.9728C33.4165 64.0681 31.3227 62.9452 29.812 62.2312L25.4858 59.5258Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.4858 59.5258C23.9975 58.4708 21.8135 56.0799 18.4259 53.3001C16.5077 51.79 12.1165 49.146 10.5545 47.5701C9.49265 46.6464 8.86534 45.3208 8.82438 43.914C8.67908 41.2596 10.5299 38.9111 13.1447 38.4319C15.2193 38.2345 17.3063 38.6507 19.1465 39.6288C20.4162 40.2616 21.631 40.9991 22.7784 41.8335C23.6222 42.4144 23.8679 42.6746 24.823 43.3473C25.7781 44.02 26.5034 44.7621 25.7659 43.5641C24.9199 41.7303 23.4896 38.6523 21.9718 35.9767C20.8152 33.9442 20.5963 33.6343 19.6398 32.1263C18.6833 30.6184 17.9992 29.3207 16.935 27.5945C15.9236 25.8883 15.0024 24.1301 14.1754 22.3272C12.9666 20.0669 12.5637 17.4623 13.033 14.9423C13.9911 13.2801 15.8536 12.3556 17.7569 12.5974C19.8201 13.334 21.6032 14.6941 22.859 16.4892C24.6027 18.6387 26.0499 21.0125 27.1618 23.547C28.9302 27.1915 31.8047 32.4242 32.1897 33.5614C31.7621 32.1445 30.5926 29.2385 30.4561 27.8173C30.3 26.3399 30.9212 24.8872 32.0972 23.9795C33.132 23.2854 34.3147 22.8426 35.5509 22.6864C36.8131 22.5763 38.0708 22.9418 39.0774 23.7112C40.6389 25.6775 41.8469 27.9001 42.6476 30.2798C42.1152 28.1449 41.8465 25.9528 41.8475 23.7526C42.2153 22.6578 42.9536 21.7257 43.935 21.117C45.1312 20.5035 46.4286 20.1119 47.7644 19.9613C48.9073 19.995 50.0129 20.3753 50.9347 21.0518C52.3586 22.8379 53.4967 24.8342 54.3084 26.9694C54.4702 27.5055 54.1258 25.395 54.5637 23.8005C54.6093 22.3686 55.4152 21.0699 56.678 20.3934C57.9408 19.7169 59.4685 19.7655 60.6857 20.5208C61.903 21.2762 62.6248 22.6235 62.5792 24.0554C63.3305 26.5445 63.2958 26.4296 63.8043 28.1145C64.3129 29.7995 64.7636 31.2929 65.1912 32.7098C65.728 34.9928 66.093 37.3128 66.2831 39.6503C66.2028 41.7934 65.8313 43.9156 65.1787 45.9585C63.9434 48.5874 63.1123 51.3879 62.7136 54.265C62.8043 55.6073 63.064 56.9327 63.4864 58.21C63.8416 59.4007 64.3537 60.5388 65.0092 61.5944C63.4935 62.2324 61.9147 62.7089 60.299 63.0159C58.7362 63.2369 55.9966 60.8047 55.2214 60.0359C54.8262 59.6168 54.2279 59.4571 53.6764 59.6236C53.1249 59.79 52.7148 60.254 52.6175 60.8218C52.2142 62.5313 51.1352 65.7398 49.8795 66.286C47.4062 67.3667 42.0292 68.6552 37.8552 69.915C37.8552 69.915 37.3887 65.8776 35.4026 64.9728C33.4165 64.0681 31.3227 62.9452 29.812 62.2312L25.4858 59.5258Z"
        stroke="#202125"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.5946 51.8192L54.6052 38.601C54.3664 37.8098 53.5299 37.3624 52.7368 37.6018C51.9437 37.8411 51.4944 38.6766 51.7332 39.4678L55.7225 52.686C55.9613 53.4772 56.7978 53.9246 57.5909 53.6852C58.384 53.4459 58.8333 52.6104 58.5946 51.8192Z"
        fill="#202125"
      />
      <path
        d="M51.0056 54.1018L46.9376 40.8999C46.6948 40.1119 45.8562 39.6709 45.0645 39.9148C44.2728 40.1587 43.8278 40.9952 44.0706 41.7831L48.1386 54.9851C48.3814 55.773 49.22 56.214 50.0117 55.9701C50.8034 55.7262 51.2484 54.8897 51.0056 54.1018Z"
        fill="#202125"
      />
      <path
        d="M36.4224 44.1075L40.4822 57.2821C40.7273 58.0776 41.5678 58.5246 42.3595 58.2806C43.1511 58.0366 43.5942 57.194 43.3491 56.3985L39.2893 43.2239C39.0442 42.4285 38.2037 41.9814 37.412 42.2254C36.6204 42.4694 36.1773 43.3121 36.4224 44.1075Z"
        fill="#202125"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2667_506"
        x="4.11641"
        y="11.0586"
        width="66.8648"
        height="67.5555"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="1.6" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2667_506"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2667_506"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
