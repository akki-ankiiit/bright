import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const steps = [
 {
 number: "01",
 title: "Site Survey",
 desc: "Our engineers analyze your roof structure and energy consumption."
 },
 {
 number: "02",
 title: "Subsidy Approval",
 desc: "We process your application on the PM SuryaGhar portal."
 },
 {
 number: "03",
 title: "Installation",
 desc: "Premium mounting and panel installation within 3 days."
 },
 {
 number: "04",
 title: "Net Metering",
 desc: "DISCOM liaison for meter replacement and grid sync."
 }
]

export default function HowItWorksSnippet() {
 return (
 <section className="py-16 lg:py-32 bg-white w-full border-t border-brand-border/40">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-20 gap-8">
 <div className="max-w-2xl">
 <h2 className="font-sans text-[12px] uppercase font-medium text-brand-text-secondary mb-6">
 The Process
 </h2>
 <h3 className="font-serif text-[36px] md:text-[44px] text-brand-text leading-[1.15] ">
 Seamless transition to <span className="italic text-brand-text-tertiary">solar energy</span>.
 </h3>
 </div>
 
 <Link to="/how-it-works" className="group flex items-center gap-3 font-sans text-[14px] uppercase text-brand-text-secondary hover:text-brand-text transition-colors">
 View details
 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
 {steps.map((step, index) => (
 <motion.div 
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ delay: index * 0.1, duration: 0.8 }}
 className="relative"
 >
 <div className="font-serif text-[64px] text-brand-text-tertiary/30 leading-none mb-6">
 {step.number}
 </div>
 <h4 className="font-sans text-[18px] font-medium text-brand-text mb-4">
 {step.title}
 </h4>
 <p className="font-sans text-[15px] text-brand-text-secondary leading-[1.7] font-light">
 {step.desc}
 </p>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 )
}
