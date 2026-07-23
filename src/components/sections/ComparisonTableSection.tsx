import { motion } from 'framer-motion'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

const comparisonData = [
 { feature: 'Government Subsidy Processing', us: true, others: false },
 { feature: 'Premium Monocrystalline Panels', us: true, others: 'Variable' },
 { feature: '25-Year Performance Warranty', us: true, others: true },
 { feature: '5-Year Free AMC Maintenance', us: true, others: false },
 { feature: 'Zero-Cost EMI Options', us: true, others: false },
 { feature: 'Net Metering Approval Handled', us: true, others: 'Often Extra Cost' },
]

export default function ComparisonTableSection() {
 return (
 <section className="py-16 lg:py-32 bg-white w-full border-t border-brand-border/40">
 <div className="max-w-4xl mx-auto px-6 lg:px-8">
 
 <div className="text-center mb-10 lg:mb-20">
 <h2 className="font-sans text-[12px] uppercase font-medium text-brand-text-secondary mb-6">
 The Advantage
 </h2>
 <h3 className="font-serif text-[36px] md:text-[44px] text-brand-text leading-[1.15] ">
 Why choose <span className="italic text-brand-text-tertiary">us?</span>
 </h3>
 </div>

 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8 }}
 className="border border-brand-border/60 rounded-[8px] overflow-hidden"
 >
 {/* Header Row */}
 <div className="grid grid-cols-3 bg-brand-bg-dark border-b border-brand-border/60">
 <div className="p-6 font-sans text-[13px] font-medium text-brand-text-secondary uppercase flex items-center">
 Feature
 </div>
 <div className="p-6 font-serif text-[20px] text-brand-text flex items-center justify-center border-l border-brand-border/60 bg-white">
 BrightFuture
 </div>
 <div className="p-6 font-sans text-[13px] font-medium text-brand-text-tertiary uppercase flex items-center justify-center border-l border-brand-border/60">
 Others
 </div>
 </div>

 {/* Data Rows */}
 <div className="divide-y divide-brand-border/40">
 {comparisonData.map((row, index) => (
 <div key={index} className="grid grid-cols-3 hover:bg-brand-bg-dark transition-colors duration-200">
 <div className="p-6 font-sans text-[15px] text-brand-text-secondary flex items-center">
 {row.feature}
 </div>
 
 <div className="p-6 flex items-center justify-center border-l border-brand-border/60 bg-white/50">
 {row.us === true ? (
 <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
 <CheckIcon className="w-5 h-5 text-brand-primary" strokeWidth={2} />
 </div>
 ) : (
 <span className="font-sans text-[15px] text-brand-text-secondary">{row.us}</span>
 )}
 </div>
 
 <div className="p-6 flex items-center justify-center border-l border-brand-border/60">
 {row.others === true ? (
 <CheckIcon className="w-5 h-5 text-brand-text-secondary" />
 ) : row.others === false ? (
 <XMarkIcon className="w-5 h-5 text-brand-text-tertiary" />
 ) : (
 <span className="font-sans text-[14px] text-brand-text-tertiary">{row.others}</span>
 )}
 </div>
 </div>
 ))}
 </div>
 </motion.div>
 
 </div>
 </section>
 )
}
