import { motion } from 'framer-motion'
import BaseButton from '../ui/BaseButton'

export default function VendorPartnershipSection() {
 return (
 <section className="py-16 lg:py-32 bg-brand-bg-dark w-full border-t border-brand-border/40">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="bg-white border border-brand-border/60 p-12 lg:p-20 rounded-[8px] flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-12">
 
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="w-full md:w-3/5"
 >
 <h2 className="font-sans text-[12px] uppercase font-medium text-brand-primary mb-6">
 For Businesses
 </h2>
 <h3 className="font-serif text-[32px] md:text-[40px] text-brand-text leading-[1.15] mb-6">
 Become a certified <span className="italic">installation partner</span>.
 </h3>
 <p className="font-sans text-[16px] text-brand-text-secondary leading-[1.7] font-light max-w-lg mb-8">
 Join our network of elite solar vendors. Get access to our B2B dashboard, exclusive wholesale pricing on premium panels, and a steady stream of PM SuryaGhar leads.
 </p>
 <div className="flex gap-8">
 <div>
 <p className="font-serif text-[28px] text-brand-text mb-1">500+</p>
 <p className="font-sans text-[12px] text-brand-text-secondary uppercase ">Partners</p>
 </div>
 <div>
 <p className="font-serif text-[28px] text-brand-text mb-1">PAN India</p>
 <p className="font-sans text-[12px] text-brand-text-secondary uppercase ">Coverage</p>
 </div>
 </div>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row md:flex-col gap-4"
 >
 <BaseButton variant="primary" size="lg" className="w-full justify-center px-12">
 Apply as Vendor
 </BaseButton>
 <BaseButton variant="outline" size="lg" className="w-full justify-center px-12">
 Vendor Login
 </BaseButton>
 </motion.div>

 </div>
 </div>
 </section>
 )
}
