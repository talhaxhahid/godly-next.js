import React from "react";
import "@/styles/fourstepprocess.css";
import WebsiteLayout from "./websiteLayout";
import windowCleaning from "@/assets/windowCleaning.png";
import Image from 'next/image';
import BlogsSection from "./blogsSection";


const BlogPage = () => {
       return(
        <WebsiteLayout>
        <div className="w-full bg-[#fef7ea] flex flex-col items-center justify-center p-16  mt-20 text-[#312E2C]">
            <div className="w-3/4 flex flex-col items-center justify-center border-b-4 border-double border-black pb-8">
            <div className="border-b-2 border-solid border-black pb-4 mb-2">
            <h1 className="text-6xl  text-center  text-shadow-[#AF8F6E] pb-2">News HEADLINE</h1>
            <p className="text-gray-700 text-sm mt-2 text-center">April 20th, 2026</p>
            </div>
            <div className="border-8 border-[#6A64641F] shadow-md w-full my-10">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="w-full h-auto object-cover"
            />
          </div>
            <p className="text-lg font-sans  text-left">We aspire to transport you back to a time when trust was the cornerstone of every relationship, particularly within the realms of your home and business. Picture an era where commitments were not just words spoken lightly, but were honored with unwavering integrity. In those days, fulfilling promises was the norm, and they were sgoverned interactions. Our mission is to ensure that you can place your trust in those who serve you, allowing you to engage with confidence and peace of mind, knowing that your expectations will be met with sincerity and dedication. <br/>We aspire to transport you back to a time when trust was the cornerstone of every relationship, particularly within the realms of your home and business. Picture an era where commitments were not just words spoken lightly, but were honored with unwavering integrity. In those days, fulfilling promises was the norm, and they were sgoverned interactions. Our mission is to ensure that you can place your trust in those who serve you, allowing you to engage with confidence and peace of mind, knowing that your expectations will be met with sincerity and dedication.<br/>We aspire to transport you back to a time when trust was the cornerstone of every relationship, particularly within the realms of your home and business. Picture an era where commitments were not just words spoken lightly, but were honored with unwavering integrity. In those days, fulfilling promises was the norm, and they were sgoverned interactions. Our mission is to ensure that you can place your trust in those who serve you, allowing you to engage with confidence and peace of mind, knowing that your expectations will be met with sincerity and dedication.</p>
            <p className="text-lg font-sans  text-left">We aspire to transport you back to a time when trust was the cornerstone of every relationship, particularly within the realms of your home and business. Picture an era where commitments were not just words spoken lightly, but were honored with unwavering integrity. In those days, fulfilling promises was the norm, and they were sgoverned interactions. Our mission is to ensure that you can place your trust in those who serve you, allowing you to engage with confidence and peace of mind, knowing that your expectations will be met with sincerity and dedication. <br/>We aspire to transport you back to a time when trust was the cornerstone of every relationship, particularly within the realms of your home and business. Picture an era where commitments were not just words spoken lightly, but were honored with unwavering integrity. In those days, fulfilling promises was the norm, and they were sgoverned interactions. Our mission is to ensure that you can place your trust in those who serve you, allowing you to engage with confidence and peace of mind, knowing that your expectations will be met with sincerity and dedication.<br/>We aspire to transport you back to a time when trust was the cornerstone of every relationship, particularly within the realms of your home and business. Picture an era where commitments were not just words spoken lightly, but were honored with unwavering integrity. In those days, fulfilling promises was the norm, and they were sgoverned interactions. Our mission is to ensure that you can place your trust in those who serve you, allowing you to engage with confidence and peace of mind, knowing that your expectations will be met with sincerity and dedication.</p>
            <div className="border-8 border-[#6A64641F] shadow-md w-2/4 my-10">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="border-8 border-[#6A64641F] shadow-md w-2/4 my-10">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-lg font-sans  text-left">We aspire to transport you back to a time when trust was the cornerstone of every relationship, particularly within the realms of your home and business. Picture an era where commitments were not just words spoken lightly, but were honored with unwavering integrity. In those days, fulfilling promises was the norm, and they were sgoverned interactions. Our mission is to ensure that you can place your trust in those who serve you, allowing you to engage with confidence and peace of mind, knowing that your expectations will be met with sincerity and dedication.</p>

            </div>
        </div>
        <BlogsSection noOfBlogs={3}/>
        </WebsiteLayout>
       )
};


export default  BlogPage;
