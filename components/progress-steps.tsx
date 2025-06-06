import React from "react"; 
import { MapPin, Trash2, Truck, FileCheck, Calendar, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgressStepsProps {
  currentStep: number
}

export function ProgressSteps({ currentStep }: ProgressStepsProps) {
  const steps = [
    { id: 1, name: "Postcode", icon: MapPin },
    { id: 2, name: "Waste Type", icon: Trash2 },
    { id: 3, name: "Select Skip", icon: Truck },
    { id: 4, name: "Permit Check", icon: FileCheck },
    { id: 5, name: "Choose Date", icon: Calendar },
    { id: 6, name: "Payment", icon: CreditCard },
  ]

  return (
    <div className="w-full overflow-x-auto px-4 no-scrollbar">
      <div className="flex items-center min-w-max gap-x-4">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = step.id <= currentStep;
          const isCurrentStep = step.id === currentStep;
          

          return (
            <React.Fragment key={step.id}>
              <div
                className={cn(
                  "flex-shrink-0 w-auto flex flex-col items-center" 
                  
                  
                )}
              >
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center w-10 h-10 shrink-0",
                    isActive ? "bg-[#0a3170] text-white" : "bg-gray-100 text-gray-400"
                  )}
                >
                  <StepIcon className="h-5 w-5" />
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs font-medium whitespace-nowrap",
                    isCurrentStep
                      ? "text-[#0a3170] font-semibold"
                      : isActive
                      ? "text-gray-700"
                      : "text-gray-400"
                  )}
                >
                  {step.name}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 grow self-center -translate-y-3.5",
                    isActive ? "bg-[#0a3170]" : "bg-gray-200"
                    
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}
