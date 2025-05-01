import background from "../assets/gurantee_bg.png";
import cardBg from "../assets/card_bg.png";
import React from "react";
import barcode from "../assets/barcode.png";
import Image from "next/image";

const Gurantee = () => {
  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div
        className="mx-auto flex max-w-[1440px] flex-col items-center gap-30 px-6 py-[150px]"
        style={{
          backgroundImage: `url(${background.src})`,
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="item-start flex gap-2">
            <h4 className="text-trim mt-3 mb-4 text-3xl tracking-wide text-[#FFFFFF]">
              THE
            </h4>
            <h1
              className="text-trim text-grain text-[102px] tracking-wide text-[#F3CA9E]"
              data-text="GODLY"
            >
              GODLY
            </h1>
          </div>
          <h1
            className="text-trim relative z-10 -mt-6 ml-22 font-['luminaire-script'] text-[64px] text-[#FFFFFF]"
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
        <div className="flex min-h-screen w-full flex-col items-center gap-[250px] bg-contain bg-center bg-no-repeat">
          <div className="relative h-60 min-w-[660px]">
            <div
              className="absolute -top-1 h-full w-full rotate-[6deg] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="paper-bg-8 gurantee absolute top-0 min-w-[660px] rounded-md bg-[#CBB7A0]! p-2 shadow">
              <div className="flex h-full w-full items-center justify-between rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <h1
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    01.
                  </h1>
                  <h4 className="font-['satoshi-bold'] text-2xl text-black">
                    We respect your time
                  </h4>
                  <h5 className="font-['satoshi-regular'] text-2xl">
                    Time is valuable and should never be taken for granted, we
                    show up on time and maintain steady communication from
                    booking to completion.
                  </h5>
                </div>
                <Image src={barcode} alt="barcode" className="h-full w-1/5" />
              </div>
            </div>
          </div>

          <div className="relative h-50 w-[505px] rotate-2">
            <div
              className="absolute top-4 -left-15 h-full w-full -rotate-10 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="gurantee absolute top-0 rounded-md bg-[#CBB7A0] p-2 shadow">
              <div className="flex h-full w-full items-center justify-between rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <h1
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    02.
                  </h1>
                  <h4 className="font-['satoshi-bold'] text-2xl text-black">
                    We keep our word
                  </h4>
                  <h5 className="font-['satoshi-regular'] text-2xl font-light">
                    If we say we&apos;re going to do something, we do it. Plain
                    and simple.
                  </h5>
                </div>

                <Image src={barcode} alt="barcode" className="h-full w-1/4" />
              </div>
            </div>
          </div>

          <div className="relative h-50 min-w-[500px] rotate-2">
            <div
              className="absolute -top-2 right-5 h-full w-full rotate-5 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="gurantee absolute top-0 min-w-[470px] rounded-md bg-[#CBB7A0] p-2 shadow">
              <div className="flex h-full w-full rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <h1
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    03.
                  </h1>
                  <h4 className="card-heading font-['satoshi-bold'] text-2xl text-black">
                    We treat properties like our own
                  </h4>
                  <h5 className="card-description font-['satoshi-regular'] text-2xl font-light">
                    We respect every inch of your property, and strive to leave
                    it better than we found it.
                  </h5>
                </div>

                <Image src={barcode} alt="barcode" className="h-full w-1/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gurantee;
