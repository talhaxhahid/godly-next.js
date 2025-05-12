// src/godlyComponents/header/CitiesPopup.js
import React from "react";
import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useGodlyContext } from "@/context/godlyContext";
import { usePathname, useRouter } from "next/navigation";

export const citiesMap = {
  boca_raton: "BOCA RATON",
  coral_springs: "CORAL SPRINGS",
  davie: "DAVIE",
  deerfield_beach: "DEERFIELD BEACH",
  delray_beach: "DELRAY BEACH",
  fort_lauderdale: "FORT LAUDERDALE",
  hallandale_beach: "HALLANDALE BEACH",
  hillsboro_beach: "HILLSBORO BEACH",
  hollywood: "HOLLYWOOD",
  "lauderdale-by-the-sea": "LAUDERDALE-BY-THE-SEA",
  lighthouse_point: "LIGHTHOUSE POINT",
  margate: "MARGATE",
  miami: "MIAMI",
  miramar: "MIRAMAR",
  oakland_park: "OAKLAND PARK",
  parkland: "PARKLAND",
  pembroke_pines: "PEMBROKE PINES",
  plantation: "PLANTATION",
  pompano_beach: "POMPANO BEACH",
  royal_palm_beach: "ROYAL PALM BEACH",
  south_florida: "SOUTH FLORIDA",
  southwest_ranches: "SOUTHWEST RANCHES",
  sunrise: "SUNRISE",
  tamarac: "TAMARAC",
  west_palm_beach: "WEST PALM BEACH",
  weston: "WESTON",
};

const CitiesPopup = ({ open, onOpenChange }) => {
  const { setCity } = useGodlyContext();
  const router = useRouter();

  const pathname = usePathname();
  const isServicePage = pathname.split("/").length === 3;

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle className="hidden">Our Cities</DialogTitle>
      </DialogHeader>
      <DialogContent
        hideCloseButton
        className="paper-bg-16 md:py- z-100 overflow-y-auto border-none bg-[#fff9f3] p-4 md:top-[207px] md:max-w-[1045px] md:px-2"
      >
        <div className="xs:grid-cols-2 grid max-h-[calc(100vh-256px)] w-full grid-cols-1 gap-1 gap-y-4 sm:grid-cols-3 md:max-h-[calc(100vh-128px)] md:grid-cols-4 lg:grid-cols-5">
          {Object.keys(citiesMap)
            .filter((city) => city !== "south_florida")
            .map((cityName, index) => (
              <div
                key={index}
                className={cn(
                  "group flex cursor-pointer flex-col gap-1 border-b-1 border-[#8d8477] py-1 transition-all hover:bg-[#2D2B2B]",
                  index % 1 === 0 ? "md:mx-[20px]" : "",
                )}
                onClick={() => {
                  setCity(citiesMap[cityName]);

                  if (isServicePage) {
                    router.push(`/${cityName}/${pathname.split("/")[2]}`);
                  } else {
                    router.push(`/${cityName}`);
                  }
                  onOpenChange(false);
                }}
              >
                <div className="flex items-center justify-start gap-3">
                  <MapPin
                    className="shrink-0 group-hover:filter-[invert(1)]"
                    size={20}
                  />
                  <h3 className="text-xs leading-tight font-normal text-[#2D2B2B] group-hover:text-[#FDE4C8]">
                    {citiesMap[cityName]}
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
