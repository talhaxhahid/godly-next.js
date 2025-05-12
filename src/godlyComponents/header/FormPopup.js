// src/godlyComponents/header/FormPopup.js
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm"; // Import QuoteForm

const FormPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle className="hidden">Contact Us</DialogTitle>
      </DialogHeader>
      <DialogContent className="z-100 border-none bg-transparent p-0 md:max-w-[1200px]">
        <QuoteForm isDialog={true} />
      </DialogContent>
    </Dialog>
  );
};

export default FormPopup;
