// src/godlyComponents/header/PhoneNumber.js
import React from "react";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const PhoneNumber = () => {
  const pathname = usePathname();

  // Get city from URL directly (format: boca_raton)
  const getCityFromUrl = () => {
    if (pathname) {
      const pathSegments = pathname.split("/");
      // The city is expected to be the first segment after the leading slash
      if (pathSegments.length > 1 && pathSegments[1]) {
        return pathSegments[1].toLowerCase().replace(/_/g, " ");
      }
    }
    return "south florida"; // Default
  };

  const urlCity = getCityFromUrl();

  // Define phone numbers for different cities
  const getPhoneNumber = () => {
    const cityToCheck = urlCity.toUpperCase();

    // Boca Raton, West Palm Beach, Delray, Royal Palm Beach
    if (
      ["BOCA RATON", "WEST PALM BEACH", "DELRAY", "ROYAL PALM BEACH"].includes(
        cityToCheck,
      )
    ) {
      return "561-826-4461";
    }
    // Coral Springs, Parkland, Sunrise, Margate, Tamarac
    else if (
      ["CORAL SPRINGS", "PARKLAND", "SUNRISE", "MARGATE", "TAMARAC"].includes(
        cityToCheck,
      )
    ) {
      return "954-856-2066";
    }
    // Weston, Southwest Ranches, Pembroke Pines
    else if (
      ["WESTON", "SOUTHWEST RANCHES", "PEMBROKE PINES"].includes(cityToCheck)
    ) {
      return "954-738-3421";
    }
    // Default phone number for all other cities
    else {
      return "954-852-5236";
    }
  };

  const phoneNumber = getPhoneNumber();
  const formattedPhoneNumber = phoneNumber.replace(/-/g, "");

  return (
    <div className="flex items-center gap-4 px-4 py-2 text-[#F3C99D]">
      <a
        href={`tel:${formattedPhoneNumber}`}
        className="iconbox cursor-pointer rounded-md border-2 border-solid border-[#403830] bg-[#1e1c1b] p-2 transition-shadow duration-300 ease-in-out hover:shadow-[0px_3px_2px_0px_rgba(97,_80,_62,_0.20)_inset,_0px_1px_8.6px_0px_rgba(243,_202,_158,_0.70)] xl:p-3"
      >
        <Phone className="size-5 text-[#F3C99D] xl:size-7" strokeWidth={1.2} />
      </a>
      <a href={`tel:${formattedPhoneNumber}`}>
        <p className="text-xs leading-none font-normal">CALL US</p>
        <p className="text-base font-normal xl:text-lg">{phoneNumber}</p>
      </a>
    </div>
  );
};

export default PhoneNumber;
