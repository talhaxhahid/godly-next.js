import React from "react";
import "@/styles/fourstepprocess.css";
import WebsiteLayout from "./websiteLayout";
import windowCleaning from "@/assets/windowCleaning.png";
import Image from "next/image";
import BlogsSection from "./blogsSection";

const BlogPage = () => {
  return (
    <WebsiteLayout>
      <div className="mt-20 flex w-full flex-col items-center justify-center bg-[#fef7ea] p-16 text-[#312E2C]">
        <div className="flex w-3/4 flex-col items-center justify-center border-b-4 border-double border-black pb-8">
          <div className="mb-2 border-b-2 border-solid border-black pb-4">
            <h1 className="pb-2 text-center text-6xl text-shadow-[#AF8F6E]">
              News HEADLINE
            </h1>
            <p className="mt-2 text-center text-sm text-gray-700">
              April 20th, 2026
            </p>
          </div>
          <div className="my-10 w-full border-8 border-[#6A64641F] shadow-md">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="text-left font-sans text-lg">
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication. <br />
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
            <br />
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
          </p>
          <p className="text-left font-sans text-lg">
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication. <br />
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
            <br />
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
          </p>
          <div className="my-10 w-2/4 border-8 border-[#6A64641F] shadow-md">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="my-10 w-2/4 border-8 border-[#6A64641F] shadow-md">
            <Image
              src={windowCleaning} // Make sure to place the image in /public folder
              alt="Workers cleaning windows"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="text-left font-sans text-lg">
            We aspire to transport you back to a time when trust was the
            cornerstone of every relationship, particularly within the realms of
            your home and business. Picture an era where commitments were not
            just words spoken lightly, but were honored with unwavering
            integrity. In those days, fulfilling promises was the norm, and they
            were sgoverned interactions. Our mission is to ensure that you can
            place your trust in those who serve you, allowing you to engage with
            confidence and peace of mind, knowing that your expectations will be
            met with sincerity and dedication.
          </p>
        </div>
      </div>
      <BlogsSection noOfBlogs={3} />
    </WebsiteLayout>
  );
};

export default BlogPage;
