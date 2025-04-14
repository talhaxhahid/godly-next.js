"use client";
import {React, useState} from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import QuoteButton from "@/components/quoteButton";

export default function QuoteForm() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-full mx-auto bg-[#f9f1e7]  rounded-xl shadow-md border">
      <div className="flex justify-between items-start mb-6 p-6 h-20 rounded-t-xl bg-[#ecdec5]">
        <h2 className="text-4xl font-normal tracking-wide">LET US CALL YOU!</h2>
        <p className="text-sm text-right font-sans text-gray">
          Receive a call within 30 minutes<br /> during normal business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <div>
          <label className="block text-md font-normal uppercase mb-1">Name</label>
          <Input   className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0 border-black rounded-none px-0 focus-visible:ring-0" />
        </div>
        <div>
          <label className="block text-md font-normal uppercase mb-1">Email</label>
          <Input   className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0  border-black rounded-none px-0 focus-visible:ring-0" />
        </div>
        <div>
          <label className="block text-md font-normal uppercase mb-1">Phone Number</label>
          <Input   className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0  border-black rounded-none px-0 focus-visible:ring-0" />
        </div>

        <div>
          <label className="block text-md font-normal uppercase mb-1">What services do you need?</label>
          <Input  className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0  border-black rounded-none px-0 focus-visible:ring-0" />
        </div>

        <div>
          <label className="block text-md font-normal uppercase mb-1">When do you need the work done by?</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className="w-full bg-transparent border-b border-black text-left text-base px-0 py-1 focus:outline-none">
                {date ? format(date, "MM / dd / yyyy") : <span>Pick a date</span>}
                <CalendarIcon className="inline ml-2 h-4 w-4 text-gray-500" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-md font-normal uppercase mb-1">Zip Code</label>
          <Input  className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0  border-black rounded-none px-0 focus-visible:ring-0" />
        </div>
      </div>

     <div className='flex items-center justify-between p-4'>
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="agree" className="bg-white" />
        <label htmlFor="agree" className="text-sm">
          I agree to get information text messages from Godly about my estimate and project
        </label>
      </div>

      <div className="mt-6 text-right">
        <QuoteButton/>
      </div>
      </div>
    </div>
  );
}
