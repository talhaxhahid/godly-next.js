// components/FreeEstimateButton.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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
      className="cursor-pointer bg-[linear-gradient(to_bottom,_#323030,_#262424)]  text-[#FDE4C8] px-6 py-6 border-3 border-[#61503E] text-lg font-normal rounded-sm  hover:bg-[#3a3a3a] transition"
    >
      GET A FREE ESTIMATE
      <ArrowRight height='30px' width='30px' strokeWidth='4px' className="ml-3 h-10 w-20" />
    </Button>
    <FormPopup open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}

const FormPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle className="hidden">Contact Us</DialogTitle>
      </DialogHeader>
      <DialogContent
        className="max-h-[90vh] overflow-y-auto max-w-[180vw] sm:max-w-[95vw] lg:max-w-[180vh] z-[9999] top-80 bg-transparent border-none">
        <QuoteForm />
      </DialogContent>
    </Dialog>
  );
};

