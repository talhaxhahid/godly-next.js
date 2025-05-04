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
      <DialogContent className="sm:max-w-auto md:max-w-auto max-w-auto border-none bg-transparent p-0">
        <QuoteForm isDialog={true} />
      </DialogContent>
    </Dialog>
  );
};

export default FormPopup;
