"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface Skip {
  id: number
  size: number
  hire_period_days: number
  allowed_on_road: boolean
  allows_heavy_waste: boolean
}

interface SkipCardProps {
  skip: Skip
  isSelected: boolean
  onSelect: () => void
  totalPrice: number
  imageUrl: string
}

export function SkipCard({ skip, isSelected, onSelect, totalPrice, imageUrl }: SkipCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer",
        isSelected ? "ring-2 ring-[#0a3170]" : "",
      )}
      onClick={onSelect}
    >
      <div className="relative">
        <Image
          src={imageUrl}
          alt={`${skip.size} Yard Skip`}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-[#0a3170] text-white px-3 py-1 rounded-full text-sm font-medium">
          {skip.size} Yards
        </div>

        
        <div className="absolute bottom-3 left-3 flex gap-2">
          {skip.allowed_on_road && (
            <span className="bg-white/80 backdrop-blur-sm text-[#0a3170] px-2 py-1 rounded-md text-xs font-medium">
              Road Placement
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="bg-white/80 backdrop-blur-sm text-[#0a3170] px-2 py-1 rounded-md text-xs font-medium">
              Heavy Waste
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-[#0a3170]">{skip.size} Yard Skip</h3>
        <p className="text-gray-600 mt-1">{skip.hire_period_days} day hire period</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#0a3170]">£{totalPrice.toFixed(0)}</div>

          <Button
            variant={isSelected ? "default" : "outline"}
            className={cn(
              "transition-all",
              isSelected
                ? "bg-[#0a3170] text-white hover:bg-[#0a3170]/90"
                : "text-[#0a3170] border-[#0a3170] hover:bg-[#0a3170]/10",
            )}
          >
            {isSelected ? (
              <span className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Selected
              </span>
            ) : (
              "Select"
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
