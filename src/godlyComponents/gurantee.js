import background from "../assets/gurantee_bg.png";
import cardBg from "../assets/card_bg.png";
import React from "react";
import barcode from "../assets/barcode.png";
import Image from "next/image";

const Gurantee = () => {
  return (
    <div className="paper-bg-16">
      <div
        className="flex flex-col items-center  max-w-[1440px] mx-auto px-6 py-24 gap-30"
        style={{
          backgroundImage: `url(${background.src})`,
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex gap-2 item-start">
            <h4 className="text-[#FFFFFF] text-3xl  tracking-wide mb-4 mt-3 text-trim">
              THE
            </h4>
            <h1 className="text-[#F3CA9E] text-[102px]  tracking-wide text-trim">
              GODLY
            </h1>
          </div>
          <h1
            className="text-[#FFFFFF] text-[64px] font-['luminaire-script'] ml-22 -mt-6 text-trim"
            style={{
              WebkitTextStrokeWidth: "8px",
              strokeLinecap: "round",
              WebkitTextStrokeColor: "black",
              paintOrder: "stroke",
            }}
          >
            Guarantee
          </h1>
        </div>
        <div className="flex w-full flex-col items-center  bg-contain bg-center bg-no-repeat min-h-screen gap-40 ">
          <div className="h-60 min-w-[660px] relative">
            <div
              className="w-full h-full absolute -top-1 bg-cover bg-center bg-no-repeat rotate-10"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className=" min-w-[660px] rounded-md bg-[#CBB7A0]! paper-bg-8 p-2 shadow gurantee absolute top-0">
              <div className="flex border border-black rounded-md w-full h-full p-2 justify-between items-center">
                <div className="flex flex-col w-3/4 justify-between gap-6 ">
                  <h1
                    className="text-[#312E2C30] text-5xl card-number"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "#d5d5d5",
                      paintOrder: "stroke",
                    }}
                  >
                    01.
                  </h1>
                  <h4 className="text-black text-2xl font-['satoshi-bold']">
                    We respect your time
                  </h4>
                  <h5 className="font-['satoshi-regular'] text-2xl font-light  ">
                    Time is valuable and should never be taken for granted, we
                    show up on time and maintain steady communication from
                    booking to completion.
                  </h5>
                </div>
                <Image src={barcode} alt="barcode" className="w-1/5 h-full" />
              </div>
            </div>
          </div>

          <div className="h-50 w-[450px] relative">
            <div
              className="w-full h-full absolute -left-15 top-4 bg-cover bg-center bg-no-repeat -rotate-10"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="  rounded-md bg-[#CBB7A0] p-2 shadow gurantee absolute top-0">
              <div className="flex border border-black rounded-md w-full h-full items-center justify-between p-2">
                <div className="flex flex-col w-3/4 justify-between gap-6">
                  <h1
                    className="text-[#312E2C30] text-5xl card-number"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "#d5d5d5",
                      paintOrder: "stroke",
                    }}
                  >
                    02.
                  </h1>
                  <h4 className="text-black text-2xl font-['satoshi-bold']">
                    We keep our word
                  </h4>
                  <h5 className="font-['satoshi-regular'] text-2xl font-light  ">
                    If we say we&apos;re going to do something, we do it. Plain
                    and simple.
                  </h5>
                </div>

                <Image src={barcode} alt="barcode" className="w-1/4 h-full" />
              </div>
            </div>
          </div>

          <div className="h-50 min-w-[500px] relative ">
            <div
              className="w-full h-full absolute -top-2 right-5 bg-cover bg-center bg-no-repeat rotate-5"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className=" min-w-[470px] rounded-md bg-[#CBB7A0] p-2  shadow gurantee absolute top-0">
              <div className="flex border border-black rounded-md w-full h-full p-2">
                <div className="flex flex-col w-3/4 justify-between gap-6">
                  <h1
                    className="text-[#312E2C30] text-5xl card-number"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "#d5d5d5",
                      paintOrder: "stroke",
                    }}
                  >
                    03.
                  </h1>
                  <h4 className="text-black text-2xl font-['satoshi-bold'] card-heading">
                    We treat properties like our own
                  </h4>
                  <h5 className="font-['satoshi-regular'] text-2xl font-light card-description ">
                    We respect every inch of your property, and strive to leave
                    it better than we found it.
                  </h5>
                </div>

                <Image src={barcode} alt="barcode" className="w-1/4 h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gurantee;
