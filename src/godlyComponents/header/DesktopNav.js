// src/godlyComponents/header/DesktopNav.js
import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const DesktopNav = ({ onServicesClick }) => {
  return (
    <nav className="hidden bg-[#252323] md:block">
      <ul className="flex gap-x-6 text-[#FDE4C8]">
        <li>
          <button
            onClick={onServicesClick}
            className="text-md flex cursor-pointer items-end gap-1 text-[#FDE4C8] hover:text-[#FFCA8F]"
          >
            SERVICES{" "}
            <span>
              <ChevronDown size={18} />
            </span>
          </button>
        </li>
        <li>
          <Link
            href="/#about"
            className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            href="/#promise"
            className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
          >
            OUR PROMISE
          </Link>
        </li>
        <li>
          <Link
            href="/#process"
            className="text-md text-[#FDE4C8] hover:text-[#FFCA8F]"
          >
            OUR PROCESS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
