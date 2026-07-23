import { useState } from 'react'

interface CostBreakdownProps {
 capacity?: number
}

export default function CostBreakdown({ capacity = 3 }: CostBreakdownProps) {
 const [financingOption, setFinancingOption] = useState<'loan' | 'cash'>('loan')

 // Mock data based on PM SuryaGhar Yojana
 const costPerKw = 60000
 const equipmentCost = capacity * costPerKw
 const installationCost = capacity * 5000
 const totalGrossCost = equipmentCost + installationCost

 let subsidyAmount = 0
 if (capacity <= 2) subsidyAmount = capacity * 30000
 else if (capacity <= 3) subsidyAmount = 60000 + ((capacity - 2) * 18000)
 else subsidyAmount = 78000 // Max subsidy capped

 const netCost = totalGrossCost - subsidyAmount
 const loanAmount = financingOption === 'loan' ? netCost : 0
 
 // Assuming 7% interest for 5 years
 let monthlyEMI = 0
 if (loanAmount > 0) {
 const r = 7 / (12 * 100)
 const n = 5 * 12
 monthlyEMI = Math.round(loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1))
 }

 const outOfPocket = financingOption === 'loan' ? 0 : netCost

 return (
 <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
 <div className="bg-brand-navy p-6 text-white text-center">
 <h3 className="text-xl font-bold mb-1">Estimated Cost Breakdown</h3>
 <p className="text-sm text-gray-300">For {capacity} kW System</p>
 </div>
 
 <div className="p-6 space-y-6">
 <div className="flex justify-center gap-4 mb-6">
 <label className="flex items-center gap-2 cursor-pointer">
 <input 
 type="radio" 
 name="financing" 
 value="loan" 
 checked={financingOption === 'loan'}
 onChange={() => setFinancingOption('loan')}
 className="accent-brand-primary h-4 w-4" 
 />
 <span className="text-sm font-semibold text-brand-navy">Bank Loan (EMI)</span>
 </label>
 <label className="flex items-center gap-2 cursor-pointer">
 <input 
 type="radio" 
 name="financing" 
 value="cash" 
 checked={financingOption === 'cash'}
 onChange={() => setFinancingOption('cash')}
 className="accent-brand-primary h-4 w-4" 
 />
 <span className="text-sm font-semibold text-brand-navy">Full Cash</span>
 </label>
 </div>

 <div className="space-y-3 text-sm">
 <div className="flex justify-between items-center text-brand-text-secondary">
 <span>Equipment Cost</span>
 <span className="font-mono">₹{equipmentCost.toLocaleString()}</span>
 </div>
 <div className="flex justify-between items-center text-brand-text-secondary">
 <span>Installation & Setup</span>
 <span className="font-mono">₹{installationCost.toLocaleString()}</span>
 </div>
 <div className="h-px bg-brand-border w-full my-2"></div>
 <div className="flex justify-between items-center font-semibold text-brand-navy">
 <span>Total Gross Cost</span>
 <span className="font-mono">₹{totalGrossCost.toLocaleString()}</span>
 </div>
 <div className="flex justify-between items-center font-bold text-brand-success">
 <span>Government Subsidy (-)</span>
 <span className="font-mono">₹{subsidyAmount.toLocaleString()}</span>
 </div>
 <div className="h-px bg-brand-border w-full my-2"></div>
 <div className="flex justify-between items-center font-bold text-brand-navy text-base">
 <span>Net System Cost</span>
 <span className="font-mono">₹{netCost.toLocaleString()}</span>
 </div>
 </div>

 <div className="bg-brand-bg rounded-xl p-4 mt-6 border border-brand-border">
 {financingOption === 'loan' ? (
 <div>
 <div className="flex justify-between items-center mb-2">
 <span className="text-sm text-brand-text-secondary">Estimated EMI (5 yrs)</span>
 <span className="text-xl font-bold text-brand-primary font-mono">₹{monthlyEMI.toLocaleString()}/mo</span>
 </div>
 <p className="text-xs text-gray-500">*Assuming 7% interest rate. Subsidy goes directly to loan account.</p>
 </div>
 ) : (
 <div>
 <div className="flex justify-between items-center mb-2">
 <span className="text-sm text-brand-text-secondary">Out of Pocket Cost</span>
 <span className="text-xl font-bold text-brand-primary font-mono">₹{outOfPocket.toLocaleString()}</span>
 </div>
 <p className="text-xs text-gray-500">*Subsidy will be credited to your bank account within 30-45 days.</p>
 </div>
 )}
 </div>
 </div>
 </div>
 )
}
