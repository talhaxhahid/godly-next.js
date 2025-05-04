// src/godlyComponents/header/MobileNav.js
import React from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import HeaderButton from "@/components/HeaderButton";
import CitySelector from "./CitySelector"; // Import CitySelector for mobile use

const MobileNav = ({
  onServicesClick,
  onCitiesClick,
  onQuoteClick,
  onLinkClick,
}) => {
  return (
    <nav className="mt-4 h-full items-center md:hidden">
      <ul className="flex flex-col items-center gap-y-4 text-[#FDE4C8]">
        <li>
          <button
            onClick={onServicesClick}
            className="text-md flex cursor-pointer items-center gap-1 text-[#FDE4C8] hover:text-[#FFCA8F]"
          >
            SERVICES <ChevronDown size={18} />
          </button>
        </li>
        <li>
          <Link
            href="/#about"
            className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
            onClick={onLinkClick}
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            href="/#promise"
            className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
            onClick={onLinkClick}
          >
            OUR PROMISE
          </Link>
        </li>
        <li>
          <Link
            href="/#process"
            className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
            onClick={onLinkClick}
          >
            OUR PROCESS
          </Link>
        </li>
        <li className="mt-8">
          {/* Use CitySelector component here */}
          <CitySelector onClick={onCitiesClick} isMobile={true} />
        </li>
        <li className="flex items-center gap-2 text-[#F3C99D]">
          <Phone className="h-5 w-5 text-[#F3C99D]" strokeWidth={1.2} />
          <span className="text-lg font-normal">954-852-5236</span>
        </li>
        <li className="mt-8 mb-32">
          <HeaderButton onClick={onQuoteClick} />
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
