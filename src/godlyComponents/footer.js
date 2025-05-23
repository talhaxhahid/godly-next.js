import React from "react";
import background from "../assets/texture.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from '@/assets/logo.png';
import Image from "next/image";
import CityTags from '@/components/cityTags';
import Link from "next/link";

const Footer = () => {
    

    return (
        <>
        <div className="min-h-[70vh] p-8 bg-[#2D2B2B] flex flex-col justify-start item-center gap-10">
            <div className="bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat p-6 rounded-xl min-h-[50vh] "
                style={{ backgroundImage: `url(${background.src})` }}>
                <div
                    className="flex flex-col md:flex-row justify-between  items-start  "
                >
                    <div className="flex flex-col md:flex-row  md:gap-30 items-start  " >
                        {/* Left: Information */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#2D2B2B] font-normal uppercase">Information</h3>
                            <Link href="#faq" className="hover:underline text-sm font-normal font-sans">FAQ</Link>
                            <Link href="/blogs" className="hover:underline text-sm font-normal font-sans">Blog</Link>

                        </div>

                        {/* Center: Menu */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#2D2B2B] font-normal uppercase">Menu</h3>
                            <Link href="#services" className="hover:underline text-sm font-normal font-sans">Services</Link>
                            <Link href="/#about" className="hover:underline  text-sm font-normal font-sans">About us</Link>
                            <Link href="/#promise"className="hover:underline text-sm font-normal font-sans">Our promises</Link>
                            <Link href="/#process" className="hover:underline text-sm font-normal font-sans">Our process</Link>
                            <a href="#" className="hover:underline text-sm font-normal font-sans">Holiday lighting</a>
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="flex flex-col gap-2 text-right md:items-end">
                        <p className="text-lg   font-normal ">954-751-4128</p>
                        <p className="text-sm    font-normal ">hello@godlywindows.com</p>

                    </div>
                </div>
                <div className="flex justify-between item-center" style={{ paddingTop: '2rem' }}>
                    <div className="flex gap-4 pt-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#312E2C] rounded-full text-white">
                            <FaFacebookF />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-[#312E2C] rounded-full text-white">
                            <FaInstagram />
                        </div>
                    </div>
                    <div className="text-sm font-sans font-normal">
                        <p>1901 Thornridge Cir. Shiloh,</p>
                        <p>Hawaii 81063</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-content-center align-center" style={{justifyContent:'center'}}>
            <Image src={logo} alt="logo" className="w-40 h-auto object-contain object center"></Image>
            </div>
            

        </div>
        <CityTags/>
        </>
    );
};

export default Footer;
