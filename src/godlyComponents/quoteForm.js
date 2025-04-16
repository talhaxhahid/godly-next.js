"use client";
import {React, useState} from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import QuoteButton from "@/components/quoteButton";
import Airtable from 'airtable';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function QuoteForm() {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    zipcode: '',
    agree: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);


  // Initialize Airtable
  const base = new Airtable({
    apiKey: 'patUUfkvMZUeWcpBx.3b8a637c96292840817c1a291c161b70a0b5952d6a75d9ab0f000bb70a097e51'
  }).base('appzgFLd0zSxa5rIx');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await base('Form Table').create([
        {
          fields: {
            'Name': formData.name,
            'Email': formData.email,
            'Phone': formData.phone,
            'Required Service': formData.services,
            'Date': date ? format(date, "MM/dd/yyyy") : '',
            'ZipCode': formData.zipcode,
          }
        }
      ]);
      
      setSubmitStatus('success');
      setShowSuccessDialog(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        services: '',
        zipcode: '',
        agree: false
      });
      setDate(new Date());
    } catch (error) {
      console.error('Error submitting to Airtable:', error);
      setSubmitStatus('error');
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full mx-auto bg-[#fcf1dd] rounded-xl shadow-md border">
        <div className="flex justify-between items-center mb-6 p-2 px-6 h-20 rounded-t-xl bg-[#ecdec5]">
          <h2 className="text-5xl text-[#2D2B2B] font-normal tracking-wide">LET US CALL YOU!</h2>
          <p className="text-sm text-right font-sans text-gray">
            Receive a call within 30 minutes<br /> during normal business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div>
            <label className="block text-md font-normal font-sans mb-1">Name</label>
            <Input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0 border-black rounded-none px-0 focus-visible:ring-0" 
              required
            />
          </div>
          <div>
            <label className="block text-md font-normal font-sans mb-1">Email</label>
            <Input 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0 border-black rounded-none px-0 focus-visible:ring-0" 
              required
            />
          </div>
          <div>
            <label className="block text-md font-normal font-sans mb-1">Phone Number</label>
            <Input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0 border-black rounded-none px-0 focus-visible:ring-0" 
              required
            />
          </div>

          <div>
            <label className="block text-md font-normal font-sans mb-1">What services do you need?</label>
            <Input 
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0 border-black rounded-none px-0 focus-visible:ring-0" 
              required
            />
          </div>

          <div>
            <label className="block text-md font-normal font-sans mb-1">When do you need the work done by?</label>
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
            <label className="block text-md font-normal font-sans mb-1">Zip Code</label>
            <Input 
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="bg-transparent border-b-1 border-t-0 border-r-0 border-l-0 border-black rounded-none px-0 focus-visible:ring-0" 
              required
            />
          </div>
        </div>

        <div className='flex items-center justify-between p-4'>
          <div className="flex items-center space-x-2 mt-4">
            <Checkbox 
              id="agree" 
              name="agree"
              checked={formData.agree}
              onCheckedChange={(checked) => setFormData(prev => ({...prev, agree: checked}))}
              className="bg-white" 
            />
            <label htmlFor="agree" className="text-sm font-sans">
              I agree to get information text messages from Godly about my estimate and project
            </label>
          </div>

          <div className="mt-6 text-right">
            <QuoteButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </QuoteButton>
          </div>
        </div>
      </div>
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          Error submitting form. Please try again.
        </div>
      )}

{showSuccessDialog && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-[#f9f0df] rounded-xl shadow-lg max-w-sm w-full text-center p-6">
      <h2 className="text-3xl font-normal tracking-wide text-[#2D2B2B] mb-4">
        THANK YOU
      </h2>
      <p className="text-[#2D2B2B] mb-6 font-sans">
        I agree to receive updates from Godly<br />about my estimate via text message
      </p>
      <button
        onClick={() => setShowSuccessDialog(false)}
        className="bg-[#2D2B2B] text-white rounded-md px-8 py-2 font-semibold shadow hover:bg-[#1c1a1a] transition-all"
      >
        DONE
      </button>
    </div>
  </div>
)}


    </form>
  );
}