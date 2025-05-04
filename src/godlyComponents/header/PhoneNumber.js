// src/godlyComponents/header/PhoneNumber.js
import React from "react";
import { Phone } from "lucide-react";

const PhoneNumber = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 text-[#F3C99D]">
      <div className="iconbox rounded-md border-2 border-solid border-[#403830] bg-[#1e1c1b] p-3">
        <Phone className="h-7 w-7 text-[#F3C99D]" strokeWidth={1.2} />
      </div>
      <div>
        <p className="text-xs leading-none font-normal">CALL US</p>
        <p className="text-lg font-normal">954-852-5236</p>
      </div>
    </div>
  );
};

export default PhoneNumber;
