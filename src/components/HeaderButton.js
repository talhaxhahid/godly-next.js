import grainBg from "../assets/grain-bg.png";
import Image from "next/image";
import subtract from "../assets/subtract.svg";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm";

const FormPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle className="hidden">Contact Us</DialogTitle>
      </DialogHeader>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-[180vw] sm:max-w-[95vw] lg:max-w-[180vh] z-[9999] top-80 bg-transparent border-none">
        <QuoteForm />
      </DialogContent>
    </Dialog>
  );
};

export default function HeaderButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <div>
          <div
            className="h-[14.4px] relative w-32 bg-[#1b1b1b] bg-repeat rounded-[3px] border-[0.4px] border-[#000] shadow-[0px 1px 1px 0px rgba(0, 0, 0, 0.25) inset, 0px -1px 1.2px 0px rgba(255, 255, 255, 0.03), 0px 2px 2.6px 0px rgba(0, 0, 0, 0.30)]"
            style={{ backgroundImage: `url(${grainBg.src})` }}
          >
            <div className="absolute max-w-[115px] bottom-1 left-1/2 -translate-x-1/2 flex-shrink-0 transition-all duration-300 group-hover:pt-5 group-hover:-bottom-5">
              <div className="bg-[#F3CA9E69] w-[115px] h-[4px] border-b border-dashed border-[#2D2B2B]" />
              <div
                className="w-[115px] h-16 bg-[#F3CA9E] bg-repeat absolute left-1/2 -translate-x-1/2 flex items-center justify-center p-[3px] transition-transform duration-300 transform hover:translate-y-1 hover:shadow-lg"
                style={{ backgroundImage: `url(${grainBg.src})` }}
              >
                <div className="rounded-[6px] w-full h-full flex flex-col border-[0.4px] justify-between border-[#000] p-[5px] transition-all duration-300">
                  <div className="all-unset flex w-full justify-between items-center gap-0">
                    <p className="text-[4px] text-[#1c1c1c] font-[marlton-sans] font-normal leading-trimmed">
                      CUST.
                    </p>
                    <p className="text-[4px] text-[#AB8459] font-[marlton-stencil] font-normal leading-trimmed">
                      GODLY
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xl text-center text-[#1c1c1c] leading-none font-medium inline-block transition-all duration-300 hover:scale-105">
                      GET A QUOTE
                    </p>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="h-[2px] w-full bg-[#312E2C]" />
                    <div className="h-[1px] w-full bg-[#312E2C]" />
                  </div>
                </div>
                <div className="absolute -bottom-2.5">
                  <Image
                    src={subtract}
                    alt="subtract"
                    width={115}
                    height={11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      <FormPopup open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
