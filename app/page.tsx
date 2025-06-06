"use client"

import { useState, useEffect } from "react"
import { SkipCard } from "@/components/skip-card"
import { ProgressSteps } from "@/components/progress-steps"
import { SelectedSkipNotification } from "@/components/selected-skip-notification"
import { Loader2 } from "lucide-react"


interface Skip {
  id: number
  size: number
  hire_period_days: number
  transport_cost: number | null
  per_tonne_cost: number | null
  price_before_vat: number
  vat: number
  postcode: string
  area: string
  forbidden: boolean
  created_at: string
  updated_at: string
  allowed_on_road: boolean
  allows_heavy_waste: boolean
}

export default function SkipSelectionPage() {
  const [skips, setSkips] = useState<Skip[]>([])
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Skip[] = await response.json();
        setSkips(data);
      } catch (error) {
        console.error("Failed to fetch skips:", error);
        
        setSkips([]); // Clear skips or set to a default error state
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [])

  const handleSkipSelect = (skip: Skip) => {
    
    setSelectedSkip(selectedSkip?.id === skip.id ? null : skip)
  }

  
  const getSkipImageUrl = (size: number): string => {
    
    
    return `/${size}-yarder-skip.jpg`;
  };

  const calculateTotalPrice = (skip: Skip) => {
    return skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 pb-32">
        <ProgressSteps currentStep={3} />

        <div className="mt-12 mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#0a3170]">Choose Your Skip Size</h1>
          <p className="mt-2 text-gray-600">Select the skip size that best suits your needs</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-[#0a3170]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={() => handleSkipSelect(skip)}
                totalPrice={calculateTotalPrice(skip)}
                imageUrl={getSkipImageUrl(skip.size)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-50">
        {selectedSkip && (
          <SelectedSkipNotification skip={selectedSkip} totalPrice={calculateTotalPrice(selectedSkip)} />
        )}
      </div>
    </div>
  )
}
