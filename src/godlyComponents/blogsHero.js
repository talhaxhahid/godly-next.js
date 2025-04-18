import React from "react";
import "@/styles/fourstepprocess.css";

const BlogsHero = () => {
  return (
    <div className="bg-[#262424] p-16 flex flex-col items-center justify-center mt-20 ">
      <h1 className="text-6xl text-[#FDE4C8] text-center border-b-4 border-double border-[#FDE4C8] text-shadow-[#AF8F6E] pb-2">
        Godly resources{" "}
      </h1>
      <p className="text-lg font-sans text-[#FFFFFF94] text-center">
        actionable ideas to help you make informed and smart choices.
      </p>
    </div>
  );
};

export default BlogsHero;
