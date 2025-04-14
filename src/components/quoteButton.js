// components/FreeEstimateButton.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function QuoteButton() {
  return (
    <Button
      className="bg-[linear-gradient(to_bottom,_#9B4531,_#943B2A)]  text-[#FDE4C8] px-6 py-6 border-3 border-[#933D29] text-lg font-normal rounded-sm  hover:bg-[#3a3a3a] transition"
    >
      Request a Quote
      <ArrowRight height='30px' width='30px' strokeWidth='4px' className="ml-3 h-10 w-20  text-[#FDE4C8]" />
    </Button>
  )
}
