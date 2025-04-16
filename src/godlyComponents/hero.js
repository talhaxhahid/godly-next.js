"use client";
import React from "react";
import "@/styles/fourstepprocess.css";
import background from "../assets/heroBanner.png";
import { Star } from 'lucide-react';
import QuoteForm from './quoteForm';
import { useGodlyContext } from '@/context/godlyContext';


const Hero = () => {
const { city} = useGodlyContext();

    return (
        
        <div className="relative min-h-screen overflow-hidden bg-[#1F1D1D]">
        
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[url('/path-to-image.jpg')] bg-cover bg-no-repeat bg-top" style={{ backgroundImage: `url(${background.src})` }}>
          <div className="w-full h-full bg-gradient-to-b from-[#1F1D1D]/0 to-[#1F1D1D] absolute top-0 left-0"></div>
        </div>
      
        
        <div className="relative z-10 p-8">
           <div className=" min-h-screen flex flex-col justify-end gap-5 pb-10"> 
            <div className="flex items-center gap-1 -mb-6">
            <h1 className="text-[#FDE4C8] mr-2 ">TOP RATED </h1>
            <Star size={12} color="#FFAC33" fill="#FFAC33" />
            <Star size={12} color="#FFAC33" fill="#FFAC33" />
            <Star size={12} color="#FFAC33" fill="#FFAC33" />
            <Star size={12} color="#FFAC33" fill="#FFAC33" />
            <Star size={12} color="#FFAC33" fill="#FFAC33" />
            </div>
            <h1 className="text-7xl text-white">Window cleaning <span className="font-['luminaire-script'] text-3xl">And</span> pressure Washing services In {city}</h1>
            <p className="text-white font-sans">we specialize in window washing, home washing, pressure washing, paver sealing and more.</p>
             
           </div>
           <div className="  pt-5">
            <QuoteForm/>

           </div>
        </div>
      </div>
      
    );

}

export default Hero;
