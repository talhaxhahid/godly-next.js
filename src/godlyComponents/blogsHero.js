import React from "react";
import "@/styles/fourstepprocess.css";

const BlogsHero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[25px] bg-[#262424] p-16 py-[70px]">
      <div className="flex flex-col gap-2">
        <h1
          className="text-center text-[96px] text-[#FDE4C8]"
          style={{ textShadow: "4px 0px 0px #AF8F6E" }}
        >
          Godly resources
        </h1>
        <div className="flex flex-col gap-0.5">
          <div className="h-[1px] w-[662px] bg-white" />
          <div className="h-[3px] w-[662px] bg-white" />
        </div>
      </div>
      <p className="text-center font-['satoshi-regular'] text-[24px] text-[#FFFFFF94]">
        actionable ideas to help you make informed and smart choices.
      </p>
    </div>
  );
};

export default BlogsHero;
