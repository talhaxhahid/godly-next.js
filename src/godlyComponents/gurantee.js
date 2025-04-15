
import background from "../assets/gurantee_bg.png";
import cardBg from "../assets/card_bg.png";
import React from "react";
import barcode from "../assets/barcode.png";

const Gurantee = () => {


  return (
    <div className="flex flex-col items-center bg-[#262424]  min-h-screen px-6 py-24 gap-30">
        <div>
        <div className="flex gap-2 item-start">
        <h4 className="text-[#FFFFFF] text-xl  tracking-wide mb-4 mt-3">THE </h4>
        <h1 className="text-[#F3CA9E] text-6xl  tracking-wide">GODLY</h1>
        </div>
        <h1 className="text-[#FFFFFF] text-5xl font-['luminaire-script'] ml-20 -mt-4">Guarantee</h1>
        </div>
        <div
             className="flex w-full flex-col items-center  bg-cover bg-center bg-no-repeat min-h-screen px-6 py-12 gap-40 pb-40 md:pb-40"
             style={{ backgroundImage: `url(${background.src})`, alignItems: 'center', justifyContent: 'center' }}>


            <div className="h-60 w-130 relative">
            <div className="w-full h-full absolute -top-5 bg-cover bg-center bg-no-repeat rotate-10" style={{ backgroundImage: `url(${cardBg.src})`}} ></div>     
            <div className="h-60 w-130 rounded-md bg-[#CBB7A0] p-2 rotate-2 shadow gurantee absolute top-0">
                <div className="flex border border-black rounded-md w-full h-full p-2">
                    <div className="flex flex-col w-3/4 justify-between">
                        <h1 className="text-[#312E2C30] text-5xl">01.</h1>
                        <h4 className="text-black text-lg">We respect your time</h4>
                        <h5 className="font-sans text-md font-light ">Time is valuable and should never be taken for granted, we show up on time and maintain steady communication from booking to completion.</h5>
                    </div>

                    <div className="  w-1/4 h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${barcode.src})` }}></div>
                </div>
            </div>
            </div>


            

            <div className="h-50 w-100 relative">
            <div className="w-full h-full absolute -left-5 bg-cover bg-center bg-no-repeat -rotate-4" style={{ backgroundImage: `url(${cardBg.src})`}} ></div>     
            <div className="h-50 w-100 rounded-md bg-[#CBB7A0] p-2 rotate-2 shadow gurantee absolute top-0">
                <div className="flex border border-black rounded-md w-full h-full p-2">
                    <div className="flex flex-col w-3/4 justify-between">
                        <h1 className="text-[#312E2C30] text-4xl">02.</h1>
                        <h4 className="text-black text-md">We keep our word</h4>
                        <h5 className="font-sans text-md font-light ">If we say we’re going to do something, we do it. Plain and simple. </h5>
                    </div>

                    <div className="  w-1/4 h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${barcode.src})` }}></div>
                </div>
            </div>
            </div>

            <div className="h-50 w-100 relative">
            <div className="w-full h-full absolute -top-5 -right-4 bg-cover bg-center bg-no-repeat rotate-10" style={{ backgroundImage: `url(${cardBg.src})`}} ></div>     
            <div className="h-50 w-100 rounded-md bg-[#CBB7A0] p-2 rotate-2 shadow gurantee absolute top-0">
                <div className="flex border border-black rounded-md w-full h-full p-2">
                    <div className="flex flex-col w-3/4 justify-between">
                        <h1 className="text-[#312E2C30] text-4xl">03.</h1>
                        <h4 className="text-black text-md">We treat properties like our own</h4>
                        <h5 className="font-sans text-md font-light ">We respect every inch of your property, and strive to leave it better than we found it.</h5>
                    </div>

                    <div className="  w-1/4 h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${barcode.src})` }}></div>
                </div>
            </div>
            </div>
            
        </div>
      
      
    </div>
  );
};

export default Gurantee;
