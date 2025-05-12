"use client";

import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "@/assets/logo.webp";
import Image from "next/image";
import CityTags from "@/components/cityTags";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="w-full flex-col bg-[#312E2C] md:flex">
      <div className="item-center mx-auto flex w-full max-w-[1440px] flex-col justify-start gap-10 px-6 py-[48px] md:px-[40px]">
        <div
          className={cn(
            "paper-bg-16 flex flex-col gap-[96px] rounded-xl bg-[#ebded1] bg-cover bg-center bg-no-repeat p-6 bg-blend-multiply",
          )}
        >
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="flex w-full items-start justify-between md:flex-row md:justify-start md:gap-30">
              {/* Left: Information */}
              {/* <div className="flex flex-col gap-2">
                <h3 className="font-normal tracking-[0.64px] text-[#312E2C] uppercase opacity-60 md:opacity-100">
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
              </div> */}

              {/* Center: Menu */}
              <div className="flex flex-col gap-2">
                <h3 className="font-normal tracking-[0.64px] text-[#312E2C] uppercase opacity-60 md:opacity-100">
                  Menu
                </h3>
                <Link
                  href="#services"
                  className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                >
                  Services
                </Link>
                <Link
                  href="/#about"
                  className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                >
                  About us
                </Link>
                <Link
                  href="/#promise"
                  className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                >
                  Our promises
                </Link>
                <Link
                  href="/#process"
                  className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                >
                  Our process
                </Link>
                <a
                  href="#"
                  className="font-['satoshi-regular'] text-base font-normal hover:underline md:text-sm"
                >
                  Holiday lighting
                </a>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="hidden flex-col gap-2 text-right md:flex md:items-end">
              <p className="font-['satoshi-regular'] text-lg font-normal">
                954-751-4128
              </p>
              <p className="font-['satoshi-regular'] text-sm font-normal">
                hello@godlywindows.com
              </p>
            </div>
          </div>
          <div className="item-center flex justify-between">
            <div className="flex gap-2 md:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#312E2C] text-white">
                <FaFacebookF />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#312E2C] text-white">
                <FaInstagram />
              </div>
            </div>
            <div className="font-['satoshi-regular'] text-sm font-normal text-[#312E2C]">
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
            className="object center h-auto w-[130px] object-contain md:w-[202px]"
          ></Image>
        </div>
      </div>
      <CityTags />
    </div>
  );
};

export default Footer;
