import { useState } from 'react'
import BaseCard from '../ui/BaseCard'

export default function SolarSavingsCalculator() {
 const [currentBill, setCurrentBill] = useState(3000)
 const [capacity, setCapacity] = useState(3)

 // Constants based on Indian context (approximate values)
 const UNITS_PER_KW_PER_MONTH = 120
 const COST_PER_UNIT = 8

 const annualGeneration = capacity * UNITS_PER_KW_PER_MONTH * 12
 const annualSavings = Math.min(currentBill * 12, annualGeneration * COST_PER_UNIT)
 
 const estimatedCostAfterSubsidy = (capacity * 60000) - (capacity > 2 ? 78000 : capacity * 30000) // Rough estimate
 const paybackPeriod = (estimatedCostAfterSubsidy / annualSavings).toFixed(1)
 
 const lifetimeSavings = annualSavings * 25
 const co2Offset = (annualGeneration * 0.82 / 1000).toFixed(1) // 0.82 kg CO2 per kWh
 const treesPlanted = Math.round(annualGeneration * 0.82 / 21.77) // ~21.77 kg CO2 absorbed by tree per year

 return (
 <BaseCard padding="p-8">
 <div className="text-center mb-8">
 <h3 className="text-2xl font-bold text-brand-navy mb-2">Calculate Your Savings</h3>
 <p className="text-brand-text-secondary">See how much you can save over 25 years with solar.</p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
 {/* Inputs */}
 <div className="space-y-8">
 <div>
 <div className="flex justify-between mb-2">
 <label className="font-semibold text-brand-navy">Current Monthly Bill</label>
 <span className="font-bold text-brand-primary font-mono">₹{currentBill.toLocaleString()}</span>
 </div>
 <input
 type="range"
 value={currentBill}
 onChange={(e) => setCurrentBill(Number(e.target.value))}
 min="500"
 max="15000"
 step="500"
 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
 />
 </div>

 <div>
 <div className="flex justify-between mb-2">
 <label className="font-semibold text-brand-navy">Recommended System Size</label>
 <span className="font-bold text-brand-primary font-mono">{capacity} kW</span>
 </div>
 <input
 type="range"
 value={capacity}
 onChange={(e) => setCapacity(Number(e.target.value))}
 min="1"
 max="10"
 step="1"
 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
 />
 </div>
 </div>

 {/* Outputs */}
 <div className="grid grid-cols-2 gap-4">
 <div className="bg-brand-bg p-4 rounded-xl border border-brand-border">
 <p className="text-sm text-brand-text-secondary mb-1">Annual Savings</p>
 <p className="text-xl lg:text-2xl font-bold text-brand-success font-mono">₹{annualSavings.toLocaleString()}</p>
 </div>
 <div className="bg-brand-bg p-4 rounded-xl border border-brand-border">
 <p className="text-sm text-brand-text-secondary mb-1">Payback Period</p>
 <p className="text-xl lg:text-2xl font-bold text-brand-primary font-mono">{paybackPeriod} yrs</p>
 </div>
 <div className="bg-brand-bg p-4 rounded-xl border border-brand-border col-span-2">
 <p className="text-sm text-brand-text-secondary mb-1">25-Year Lifetime Savings</p>
 <p className="text-3xl font-bold text-brand-primary font-mono">₹{lifetimeSavings.toLocaleString()}</p>
 </div>
 
 <div className="bg-green-50 p-4 rounded-xl border border-green-100 col-span-2 flex justify-between items-center">
 <div>
 <p className="text-sm text-green-800 font-semibold mb-1">Environmental Impact</p>
 <p className="text-xs text-green-600">{co2Offset} Tons CO₂ offset annually</p>
 </div>
 <div className="text-right">
 <p className="text-2xl font-bold text-green-700 font-mono">{treesPlanted}</p>
 <p className="text-xs text-green-600">Trees Planted Eq.</p>
 </div>
 </div>
 </div>
 </div>
 </BaseCard>
 )
}
