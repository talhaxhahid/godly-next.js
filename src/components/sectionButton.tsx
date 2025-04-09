// components/FreeEstimateButton.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SectionButton() {
  return (
    <Button
      className="bg-[linear-gradient(to_bottom,_#323030,_#262424)]  text-[#FDE4C8] px-6 py-6 border-3 border-[#61503E] text-lg font-normal rounded-sm  hover:bg-[#3a3a3a] transition"
    >
      GET A FREE ESTIMATE
      <ArrowRight height='30px' width='30px' strokeWidth='4px' className="ml-3 h-10 w-20" />
    </Button>
  )
}
