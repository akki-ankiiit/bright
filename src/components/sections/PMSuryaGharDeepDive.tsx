import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const subsidyTiers = [
 { capacity: 'Up to 1 kW', subsidy: '₹30,000' },
 { capacity: '1 kW to 2 kW', subsidy: '₹30,000 to ₹60,000' },
 { capacity: '2 kW to 3 kW', subsidy: '₹60,000 to ₹78,000' },
 { capacity: 'Above 3 kW', subsidy: '₹78,000 (Maximum)' },
]

export default function PMSuryaGharDeepDive() {
 return (
 <section className="py-16 lg:py-32 bg-brand-bg-dark w-full border-t border-brand-border/40">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
 
 {/* Content Area */}
 <div className="w-full lg:w-1/2">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8 }}
 >
 <h2 className="font-sans text-[12px] uppercase font-medium text-brand-text-secondary mb-6">
 Government Initiative
 </h2>
 
 <h3 className="font-serif text-[36px] md:text-[44px] text-brand-text leading-[1.15] mb-8">
 PM SuryaGhar <span className="italic text-brand-text-tertiary">Yojana</span>
 </h3>
 
 <p className="font-sans text-[16px] text-brand-text-secondary leading-[1.8] font-light mb-8">
 The Prime Minister's flagship solar scheme provides substantial financial assistance to residential consumers. The goal is to solarize 1 crore households, providing up to 300 units of free electricity every month.
 </p>
 
 <ul className="space-y-4 mb-10">
 {[
 "Direct subsidy transfer to your bank account",
 "Low-interest, collateral-free loans up to 3 kW",
 "Simplified vendor selection process",
 "Integration with National Portal for transparency"
 ].map((item, index) => (
 <li key={index} className="flex items-start gap-4">
 <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center">
 <CheckIcon className="w-3 h-3 text-brand-primary" strokeWidth={3} />
 </div>
 <span className="font-sans text-[15px] text-brand-text-secondary leading-[1.6]">{item}</span>
 </li>
 ))}
 </ul>
 </motion.div>
 </div>

 {/* Subsidy Table Area */}
 <div className="w-full lg:w-1/2">
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8 }}
 className="bg-white p-8 md:p-12 rounded-[8px] border border-brand-border/60"
 >
 <h4 className="font-serif text-[24px] text-brand-text mb-8 text-center">
 Subsidy Structure
 </h4>
 
 <div className="divide-y divide-brand-border/40">
 {subsidyTiers.map((tier, index) => (
 <div key={index} className="flex justify-between items-center py-5">
 <span className="font-sans text-[15px] text-brand-text-secondary">{tier.capacity}</span>
 <span className="font-serif text-[18px] text-brand-text">{tier.subsidy}</span>
 </div>
 ))}
 </div>
 
 <p className="font-sans text-[12px] text-brand-text-tertiary mt-8 text-center italic">
 * Figures are indicative and subject to prevailing MNRE guidelines.
 </p>
 </motion.div>
 </div>

 </div>

 </div>
 </section>
 )
}
