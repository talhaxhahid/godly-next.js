import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "@/assets/logo.png";
import Image from "next/image";
import CityTags from "@/components/cityTags";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#312E2C]">
      <div className="item-center mx-auto flex max-w-[1440px] flex-col justify-start gap-10 px-[40px] py-[48px]">
        <div className="paper-bg-16 rounded-xl bg-[#efe5db] bg-cover bg-center bg-no-repeat p-6 bg-blend-multiply">
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="flex flex-col items-start md:flex-row md:gap-30">
              {/* Left: Information */}
              <div className="flex flex-col gap-2">
                <h3 className="font-normal text-[#2D2B2B] uppercase">
                  Information
                </h3>
                <Link
                  href="#faq"
                  className="font-['satoshi-regular'] text-sm font-normal hover:underline"
                >
                  FAQ
                </Link>
                <Link
                  href="/blogs"
                  className="font-['satoshi-regular'] text-sm font-normal hover:underline"
                >
                  Blog
                </Link>
              </div>

              {/* Center: Menu */}
              <div className="flex flex-col gap-2">
                <h3 className="font-normal text-[#2D2B2B] uppercase">Menu</h3>
                <Link
                  href="#services"
                  className="font-['satoshi-regular'] text-sm font-normal hover:underline"
                >
                  Services
                </Link>
                <Link
                  href="/#about"
                  className="font-['satoshi-regular'] text-sm font-normal hover:underline"
                >
                  About us
                </Link>
                <Link
                  href="/#promise"
                  className="font-['satoshi-regular'] text-sm font-normal hover:underline"
                >
                  Our promises
                </Link>
                <Link
                  href="/#process"
                  className="font-['satoshi-regular'] text-sm font-normal hover:underline"
                >
                  Our process
                </Link>
                <a
                  href="#"
                  className="font-['satoshi-regular'] text-sm font-normal hover:underline"
                >
                  Holiday lighting
                </a>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col gap-2 text-right md:items-end">
              <p className="font-['satoshi-regular'] text-lg font-normal">
                954-751-4128
              </p>
              <p className="font-['satoshi-regular'] text-sm font-normal">
                hello@godlywindows.com
              </p>
            </div>
          </div>
          <div
            className="item-center flex justify-between"
            style={{ paddingTop: "2rem" }}
          >
            <div className="flex gap-4 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#312E2C] text-white">
                <FaFacebookF />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#312E2C] text-white">
                <FaInstagram />
              </div>
            </div>
            <div className="font-['satoshi-regular'] text-sm font-normal">
              <p>1901 Thornridge Cir. Shiloh,</p>
              <p>Hawaii 81063</p>
            </div>
          </div>
        </div>
        <div
          className="justify-content-center align-center flex"
          style={{ justifyContent: "center" }}
        >
          <Image
            src={logo}
            alt="logo"
            className="object center h-auto w-40 object-contain"
          ></Image>
        </div>
      </div>
      <CityTags />
    </div>
  );
};

export default Footer;
