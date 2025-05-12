// src/godlyComponents/header/PhoneNumber.js
import React from "react";
import { Phone } from "lucide-react";

const PhoneNumber = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 text-[#F3C99D]">
      <a
        href="tel:9548525236"
        className="iconbox cursor-pointer rounded-md border-2 border-solid border-[#403830] bg-[#1e1c1b] p-2 transition-shadow duration-300 ease-in-out hover:shadow-[0px_3px_2px_0px_rgba(97,_80,_62,_0.20)_inset,_0px_1px_8.6px_0px_rgba(243,_202,_158,_0.70)] xl:p-3"
      >
        <Phone className="size-5 text-[#F3C99D] xl:size-7" strokeWidth={1.2} />
      </a>
      <a href="tel:9548525236">
        <p className="text-xs leading-none font-normal">CALL US</p>
        <p className="text-base font-normal xl:text-lg">954-852-5236</p>
      </a>
    </div>
  );
};

export default PhoneNumber;
