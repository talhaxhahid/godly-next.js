// src/godlyComponents/header/CitiesPopup.js
import React from "react";
import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGodlyContext } from "@/context/godlyContext";
import background from "@/assets/texture.webp"; // Ensure correct path

const CitiesPopup = ({ open, onOpenChange, cities }) => {
  const { setCity } = useGodlyContext();

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle className="hidden">Our Cities</DialogTitle>
      </DialogHeader>
      <DialogContent
        className="top-65 z-[9999] max-h-[90vh] overflow-y-auto bg-[#faedde] bg-cover bg-center bg-no-repeat bg-blend-multiply"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-1 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {cities.map((cityName, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col gap-1 border-b-1 border-[#8d8477] p-4 py-1 transition-all hover:bg-[#2D2B2B]"
              onClick={() => {
                setCity(cityName);
                onOpenChange(false);
              }}
            >
              <div className="flex items-center justify-start gap-3">
                <MapPin className="group-hover:filter-[invert(1)]" size={20} />
                <h3 className="text-xs leading-tight font-normal text-[#2D2B2B] group-hover:text-[#FDE4C8]">
                  {cityName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CitiesPopup;
