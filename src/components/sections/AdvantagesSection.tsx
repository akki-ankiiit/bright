import { motion } from 'framer-motion'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

const comparisonData = [
 { feature: 'Cost per Unit', solar: '₹0 (after payback)', traditional: '₹8-12/kWh' },
 { feature: 'Environmental Impact', solar: 'Zero emissions', traditional: 'High carbon footprint' },
 { feature: 'Average Monthly Bill', solar: '₹0-500 (baseline)', traditional: '₹2,000-8,000' },
 { feature: 'Reliability', solar: '25+ years consistent', traditional: 'Prone to outages/load shedding' },
 { feature: 'Energy Independence', solar: '100% autonomous', traditional: 'Grid dependent' },
 { feature: 'Property Resale Value', solar: '+15-25% increase', traditional: 'No impact' },
 { feature: 'Noise Level', solar: 'Silent operation', traditional: 'Transformer hum/Generator noise' },
]

export default function AdvantagesSection() {
 return (
 <section className="py-20 bg-white">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 className="text-center mb-16"
 >
 <h2 className="text-3xl font-bold text-brand-navy mb-4">Solar vs Traditional Grid</h2>
 <p className="text-brand-text-secondary max-w-2xl mx-auto">Compare the long-term benefits of switching to BrightFutureEnergy.</p>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 className="bg-white rounded-2xl border border-brand-border shadow-lg overflow-hidden"
 >
 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr>
 <th className="p-4 md:p-6 bg-brand-bg text-brand-navy font-bold w-1/3">Features</th>
 <th className="p-4 md:p-6 bg-brand-primary/10 text-brand-primary font-bold text-center w-1/3 border-b-2 border-brand-primary">Solar (BrightFutureEnergy)</th>
 <th className="p-4 md:p-6 bg-gray-50 text-gray-500 font-bold text-center w-1/3 border-b-2 border-gray-200">Traditional Grid</th>
 </tr>
 </thead>
 <tbody>
 {comparisonData.map((row, index) => (
 <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
 <td className="p-4 md:p-6 text-sm md:text-base font-semibold text-brand-navy bg-brand-bg/50">{row.feature}</td>
 <td className="p-4 md:p-6 text-sm md:text-base text-center bg-brand-primary/5">
 <div className="flex items-center justify-center gap-2 text-brand-success font-medium">
 <CheckIcon className="w-5 h-5 flex-shrink-0 hidden sm:block" />
 <span>{row.solar}</span>
 </div>
 </td>
 <td className="p-4 md:p-6 text-sm md:text-base text-center">
 <div className="flex items-center justify-center gap-2 text-gray-500">
 <XMarkIcon className="w-5 h-5 flex-shrink-0 hidden sm:block opacity-50" />
 <span>{row.traditional}</span>
 </div>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </motion.div>
 </div>
 </section>
 )
}
