"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Skip {
  id: number
  size: number
  hire_period_days: number
}

interface SelectedSkipNotificationProps {
  skip: Skip
  totalPrice: number
}

export function SelectedSkipNotification({ skip, totalPrice }: SelectedSkipNotificationProps) {
  const handleBack = () => {
    console.log("Back button clicked")
  }

  const handleContinue = () => {
    console.log("Continue button clicked")
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="text-xs text-gray-500 mb-3">
          Imagery and information shown throughout this website may not reflect the exact shape or size specification,
          colours may vary, options and/or accessories may be featured at additional cost.
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <h3 className="font-bold text-lg text-[#0a3170] mr-4">{skip.size} Yard Skip</h3>
            <div className="flex items-center">
              <span className="font-bold text-xl text-[#0a3170] mr-2">£{totalPrice.toFixed(0)}</span>
              <span className="text-gray-600">{skip.hire_period_days} day hire</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={handleBack}
              className="border-[#0a3170] text-[#0a3170] hover:bg-[#0a3170]/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            <Button onClick={handleContinue} className="bg-[#0a3170] hover:bg-[#0a3170]/90 text-white">
              Continue
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
