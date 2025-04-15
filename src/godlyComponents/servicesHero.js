"use client";
import { useGodlyContext } from '@/context/godlyContext';
import React from "react";
import "@/styles/fourstepprocess.css";
import Image from "next/image";
import { Star } from 'lucide-react';
import FreeQuoteButton from "@/components/freeQuote";
import Services from '@/data/servicesData';

const ServicesHero = ({ slug }) => {
    
    const { city} = useGodlyContext();
       return(
        <div className="bg-[#262424] p-16 flex flex-col items-center justify-center mt-20 gap-10">
            <div>
            <div className="flex items-center justify-center gap-1">
                        <h1 className="text-[#FDE4C8] mr-2 ">TOP RATED </h1>
                        <Star size={12} color="#FFAC33" fill="#FFAC33" />
                        <Star size={12} color="#FFAC33" fill="#FFAC33" />
                        <Star size={12} color="#FFAC33" fill="#FFAC33" />
                        <Star size={12} color="#FFAC33" fill="#FFAC33" />
                        <Star size={12} color="#FFAC33" fill="#FFAC33" />
                        </div>
            <h1 className="text-white text-6xl tracking-wide">  {Services[slug]['hero'][0]}</h1>
            <h1 className="-mt-5 text-center"><span className=" font-['luminaire-script'] text-6xl text-[#FDE4C8]">{Services[slug]['hero'][1]} &nbsp;</span> <span className="text-[#FDE4C8]">{city}</span></h1>
            </div>
            <div className="bg-[#e7e3df] text-[#1c1c1c] rounded-sm p-2 min-h-[200px] relative">
                <Image src={Services[slug]['hero'][2]}  alt="window"></Image>
                <p className="font-['luminaire-script'] text-base text-center">{Services[slug]['hero'][0]}&nbsp;{Services[slug]['hero'][1]}</p>
                <div className="h-3 w-18 -rotate-45 bg-[#F3CA9ECC] absolute top-2 -left-6 z-10"></div>
                <div className="h-3 w-18 -rotate-45 bg-[#F3CA9ECC] absolute bottom-2 -right-6 z-10"></div>
            </div>
            <div className="w-150 text-[#FFFFFF94] font-sans text-center">
               <p>{Services[slug]['hero'][3]}</p>
            </div>
            <FreeQuoteButton/>


        </div>
       )
};


export default  ServicesHero;
