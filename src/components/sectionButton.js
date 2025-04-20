// components/FreeEstimateButton.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm";

export default function SectionButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-sm border-3 border-[#61503E] bg-[linear-gradient(to_bottom,_#323030,_#262424)] px-6 py-6 text-lg font-normal text-[#FDE4C8] transition hover:bg-[#3a3a3a]"
      >
        <span className="-mt-1">GET A FREE ESTIMATE</span>
        <ArrowRight
          height="30px"
          width="30px"
          strokeWidth="4px"
          className="ml-3 h-10 w-20"
        />
      </Button>
      <FormPopup open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}

const FormPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle className="hidden">Contact Us</DialogTitle>
      </DialogHeader>
      <DialogContent className="top-80 z-[9999] max-h-[90vh] max-w-[180vw] overflow-y-auto border-none bg-transparent sm:max-w-[95vw] lg:max-w-[180vh]">
        <QuoteForm />
      </DialogContent>
    </Dialog>
  );
};
