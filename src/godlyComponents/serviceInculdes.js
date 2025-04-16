import React from "react";
import "@/styles/fourstepprocess.css";
import background from "../assets/texture.png";
import Services from "@/data/servicesData";





const ServiceIncludes = ({ slug }) => {



    return (
        <div id="promise"
            className="flex gap-10 p-24 flex-col justify-items-center items-center min-h-screen bg-[#FDE4C8] bg-blend-multiply bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background.src})` }}>
           
            <div className="py-10">
            <h4 className="text-5xl  font-normal text-[#191717] tracking-wide text-center w-150">WHAT <span className="text-[#AB8459] ">INCLUDED</span> <span className=" text-5xl "> IN OUR SOLAR PANEL CLEANING Service</span></h4>
            </div>
            
            <div className="py-5 flex flex-wrap gap-6 px-4 w-full max-w-screen-xl justify-center ">
                    {Services[slug]['included'].map((step, index) => (
                        <div key={index} className={`  rounded-sm p-2 bg-size-[auto_10rem] bg-top-right ${Services[slug]['included'].length==5 ?"w-65":Services[slug]['included'].length==3 ?"w-70":"w-60"} min-h-60 bg-no-repeat ${index === 1 ? "bg-[#E7E3E0] text-black" : "bg-[#201E1E] text-[#FFFFFF]"} `} >
                            <div className="flex flex-col justify-between items-center border-[#6A6464]  p-6 rounded-md border border-dashed  relative z-10  w-full  h-full gap-15 ">
                                   <div>
                                    <h5 className="text-md font-normal text-center "><span className="">{step.number}</span></h5>
                                    
                                    <div
                                        className="text-center  text-2xl mb-3"
                                        
                                    >
                                        {step.title}
                                    </div>
                                    </div>
                                    
                                    <p
                                        className="text-center text-sm "
                                        style={{ fontFamily: "sans-serif" }}
                                    >
                                        {step.text}
                                    </p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            
            

        </div>
    );

}

export default ServiceIncludes;




