// src/godlyComponents/header/ServicePopup.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import background from "@/assets/texture.webp"; // Ensure correct path

const ServicePopup = ({ open, onOpenChange, services }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle className="hidden">Our Services</DialogTitle>
      </DialogHeader>
      <DialogContent
        className="top-75 z-[9999] w-full overflow-y-auto bg-[#faedde] bg-cover bg-center bg-no-repeat bg-blend-multiply"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="grid w-full grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              href={"/services/" + service.link}
              key={index}
              className="hover:bg-[#2D2B2B]"
              onClick={() => onOpenChange(false)} // Close popup on link click
            >
              <div
                key={index} // Consider removing duplicate key if Link key is sufficient
                className="group flex min-h-18 flex-row items-start gap-[6px] gap-y-0 border-b-[1.5px] border-[#8d8477] p-2 text-[#2D2B2B] transition-all hover:text-[#FDE4C8]"
              >
                <div className="flex items-center justify-start gap-[6px]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={27}
                    height={27}
                    className="group-hover:filter-[invert(1)]"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-sm leading-tight font-normal">
                    {service.name}
                  </h3>
                  <p className="font-['satoshi-light'] text-xs font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePopup;
