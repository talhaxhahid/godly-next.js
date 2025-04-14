import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import windowCleaning from "@/assets/windowCleaning.png";
import { Star } from 'lucide-react';
import FreeQuoteButton from "@/components/freeQuote";

const ServicesHero = () => {
       return(
        <div className="bg-[#262424] p-16 flex flex-col items-center justify-center mt-20 gap-10">
            <div>
            <div className="flex items-center justify-center gap-1">
            <h1 className="text-white mr-5">TOP RATED </h1>
            <Star size={12} color="gold" fill="gold" />
            <Star size={12} color="gold" fill="gold" />
            <Star size={12} color="gold" fill="gold" />
            <Star size={12} color="gold" fill="gold" />
            <Star size={12} color="gold" fill="gold" />
            </div>
            <h1 className="text-white text-6xl tracking-wide">  EXTERIOR Window</h1>
            <h1 className="-mt-5 text-center"><span className=" font-['luminaire-script'] text-6xl text-[#FDE4C8]">Cleaning &nbsp;</span> <span className="text-[#FDE4C8]">SOUTH FLORIDA</span></h1>
            </div>
            <div className="bg-[#e7e3df] text-[#1c1c1c] rounded-sm p-2 min-h-[200px] relative">
                <Image src={windowCleaning}  alt="window"></Image>
                <p className="font-['luminaire-script'] text-base text-center">Grandma & grandson</p>
                <div className="h-3 w-18 -rotate-45 bg-[#F3CA9ECC] absolute top-2 -left-6 z-10"></div>
                <div className="h-3 w-18 -rotate-45 bg-[#F3CA9ECC] absolute bottom-2 -right-6 z-10"></div>
            </div>
            <div className="w-150 text-[#FFFFFF94] font-sans text-center">
               <p>Dirty solar panels reduce energy efficiency by blocking sunlight absorption. Our solar panel cleaning service ensures maximum performance by carefully removing all of nature’s buildup that can affect energy output. Regular cleaning helps maintain optimal energy production.</p>
            </div>
            <FreeQuoteButton/>


        </div>
       )
};


export default  ServicesHero;
