import { motion } from 'framer-motion'
import { 
 CurrencyRupeeIcon, 
 SunIcon, 
 ShieldCheckIcon, 
 WrenchScrewdriverIcon,
 BoltIcon,
 DocumentCheckIcon
} from '@heroicons/react/24/outline'

const benefits = [
 {
 title: "Zero Investment",
 description: "Finance your solar setup completely through EMIs that are often lower than your current electricity bill.",
 icon: CurrencyRupeeIcon
 },
 {
 title: "30% Government Subsidy",
 description: "Direct subsidy credited to your bank account within 30 days of successful commissioning.",
 icon: DocumentCheckIcon
 },
 {
 title: "25-Year Warranty",
 description: "Premium monocrystalline panels with guaranteed performance for a quarter-century.",
 icon: ShieldCheckIcon
 },
 {
 title: "Lifetime Free Electricity",
 description: "Generate your own power and say goodbye to rising grid electricity tariffs forever.",
 icon: SunIcon
 },
 {
 title: "Net Metering Handled",
 description: "We manage the entire DISCOM application and approval process for your net meter.",
 icon: BoltIcon
 },
 {
 title: "Free Maintenance",
 description: "5 years of complimentary AMC including quarterly cleaning and performance checks.",
 icon: WrenchScrewdriverIcon
 }
]

export default function BenefitsGridSection() {
 return (
 <section className="py-16 lg:py-32 bg-brand-bg-dark w-full">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
 <h2 className="font-sans text-[12px] uppercase font-medium text-brand-text-secondary mb-6">
 Why Choose Us
 </h2>
 <h3 className="font-serif text-[36px] md:text-[44px] text-brand-text leading-[1.15] ">
 Comprehensive <span className="italic text-brand-text-tertiary">Solar Solutions</span>
 </h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {benefits.map((benefit, index) => (
 <motion.div 
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
 className="bg-white p-10 rounded-[8px] border border-brand-border/40 hover:border-brand-border transition-colors duration-300"
 >
 <div className="w-10 h-10 mb-8">
 <benefit.icon className="w-full h-full text-brand-text-tertiary stroke-1" />
 </div>
 <h4 className="font-serif text-[22px] text-brand-text mb-4">
 {benefit.title}
 </h4>
 <p className="font-sans text-[15px] text-brand-text-secondary leading-[1.7] font-light">
 {benefit.description}
 </p>
 </motion.div>
 ))}
 </div>
 
 </div>
 </section>
 )
}
