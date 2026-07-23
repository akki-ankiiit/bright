import { motion } from 'framer-motion'
import {
 BanknotesIcon,
 Battery100Icon,
 ArrowsRightLeftIcon,
 ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const benefits = [
 {
 title: 'Maximum Savings',
 description: 'Save up to ₹1,50,000 annually. Recoup your investment in just 3-4 years.',
 icon: BanknotesIcon,
 },
 {
 title: '24/7 Power',
 description: 'Add a hybrid battery system and never worry about grid power cuts again.',
 icon: Battery100Icon,
 },
 {
 title: 'Net Metering',
 description: 'Your meter runs backwards. Sell excess electricity back to the grid.',
 icon: ArrowsRightLeftIcon,
 },
 {
 title: '25-Year Warranty',
 description: 'Unmatched reliability. Our solar panels are guaranteed for a generation.',
 icon: ShieldCheckIcon,
 }
]

export default function KeyBenefitsSection() {
 return (
 <section className="py-16 lg:py-32 bg-white relative">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 "
 >
 The future of energy. <br/> On your roof.
 </motion.h2>
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-xl text-brand-text-secondary"
 >
 Switching to solar is the smartest financial decision for your home.
 </motion.p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
 {benefits.map((benefit, index) => (
 <motion.div 
 key={index} 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ delay: index * 0.1, duration: 0.5 }}
 className="bg-brand-bg-dark rounded-[32px] p-10 flex flex-col justify-between hover:bg-gray-100 transition-colors duration-300"
 >
 <div>
 <benefit.icon className="h-10 w-10 text-brand-navy mb-8" strokeWidth={1.5} />
 <h3 className="text-2xl font-bold text-brand-navy mb-4 ">{benefit.title}</h3>
 <p className="text-lg text-brand-text-secondary leading-relaxed">{benefit.description}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 )
}
