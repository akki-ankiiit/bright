import { motion } from 'framer-motion'
import { CurrencyRupeeIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'

const steps = [
 {
 title: 'Easy Registration',
 description: 'Sign up on the National Portal. We help you submit all required documents seamlessly.',
 icon: DocumentCheckIcon,
 },
 {
 title: 'Direct Subsidy',
 description: 'Get up to ₹78,000 transferred directly to your bank account within 30 days of installation.',
 icon: CurrencyRupeeIcon,
 },
 {
 title: 'Worry-free Installation',
 description: 'Our certified engineers install your system using premium, government-approved panels.',
 icon: ShieldCheckIcon,
 }
]

export default function PMSuryaGharOverview() {
 return (
 <section className="py-16 lg:py-32 bg-brand-bg-dark relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 >
 <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-6">
 Government Initiative
 </span>
 <h2 className="text-4xl md:text-6xl font-serif text-brand-navy leading-tight mb-6">
 PM Surya Ghar Yojana. <br/>
 <span className="text-brand-text-secondary">Simplified.</span>
 </h2>
 <p className="text-xl md:text-2xl text-brand-text-secondary font-medium">
 We handle the entire process from application to activation. Claiming your government subsidy has never been easier.
 </p>
 </motion.div>
 </div>

 <div className="grid md:grid-cols-3 gap-6 lg:gap-12 lg:gap-8 lg:gap-16 max-w-6xl mx-auto">
 {steps.map((step, index) => (
 <motion.div
 key={step.title}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: index * 0.2 }}
 className="flex flex-col items-center text-center"
 >
 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border border-black/[0.04]">
 <step.icon className="w-10 h-10 text-brand-navy" strokeWidth={1.5} />
 </div>
 <h3 className="text-2xl font-bold text-brand-navy mb-4 ">{step.title}</h3>
 <p className="text-lg text-brand-text-secondary leading-relaxed">
 {step.description}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 )
}
