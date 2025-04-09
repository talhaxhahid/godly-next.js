import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "@/styles/header.css";
import { Phone } from "lucide-react"; // optional icon lib or use your own SVG
import HeaderButton from "@/components/HeaderButton";

const Header = () => {
  return (
    <div className=" p-4 text-white godlyheader w-full" style={{position:'fixed',top:'0',zIndex:'100'}} >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Top row: Logo and Nav */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div className="header-logo mb-2 md:mb-0">
            <Image src={logo} alt="Logo" className="header-logo" />
          </div>
          <nav>
            <ul className="flex gap-x-6 text-[#FDE4C8] ">
              <li>
                <a href="#" className="hover:text-gray-300 text-md text-[#F3C99D]">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-md text-[#F3C99D]">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-md text-[#F3C99D]">
                  OUR PROMISE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-md text-[#F3C99D]">
                  OUR PROCESS
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Call Us Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div className="flex items-center gap-4  px-4 py-2  text-[#F3C99D] ">
            <div className="p-2 iconbox bg-[#1e1c1b] rounded-md">
              <Phone className="text-[#F3C99D] w-6 h-10" />
            </div>
            <div>
              <p className="text-xs font-semibold leading-none">CALL US</p>
              <p className="text-lg font-bold ">(954) 852 - 5236</p>
            </div>
          </div>
          <HeaderButton />
          
        </div>
      </div>
    </div>
  );
};

export default Header;
