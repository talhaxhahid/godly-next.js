import React from "react";
import "@/styles/fourstepprocess.css";

const BlogsHero = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-[#262424] p-16">
      <h1 className="border-b-4 border-double border-[#FDE4C8] pb-2 text-center text-6xl text-[#FDE4C8] text-shadow-[#AF8F6E]">
        Godly resources{" "}
      </h1>
      <p className="text-center font-sans text-lg text-[#FFFFFF94]">
        actionable ideas to help you make informed and smart choices.
      </p>
    </div>
  );
};

export default BlogsHero;
