import { motion } from 'framer-motion'

export default function FutureScopeSection() {
 return (
 <section className="py-16 lg:py-32 bg-white w-full border-t border-brand-border/40 overflow-hidden">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
 
 <div className="w-full lg:w-1/2">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8 }}
 >
 <h2 className="font-sans text-[12px] uppercase font-medium text-brand-text-secondary mb-6">
 Beyond Solar
 </h2>
 
 <h3 className="font-serif text-[36px] md:text-[44px] text-brand-text leading-[1.15] mb-8">
 Building India's <span className="italic text-brand-text-tertiary">energy future</span>.
 </h3>
 
 <p className="font-sans text-[16px] text-brand-text-secondary leading-[1.8] font-light mb-8 max-w-lg">
 While rooftop solar under PM SuryaGhar is our current focus, we are actively expanding our infrastructure to support the complete electrification of the Indian household.
 </p>

 <div className="space-y-8">
 <div className="flex gap-4">
 <div className="w-12 h-12 shrink-0 border border-brand-border/60 flex items-center justify-center rounded-full font-serif text-[18px] text-brand-text-tertiary">1</div>
 <div>
 <h4 className="font-sans text-[16px] font-medium text-brand-text mb-2">Smart Battery Storage</h4>
 <p className="font-sans text-[15px] text-brand-text-secondary leading-[1.6] font-light">Integrating hybrid systems to ensure 24/7 power independence during grid outages.</p>
 </div>
 </div>
 
 <div className="flex gap-4">
 <div className="w-12 h-12 shrink-0 border border-brand-border/60 flex items-center justify-center rounded-full font-serif text-[18px] text-brand-text-tertiary">2</div>
 <div>
 <h4 className="font-sans text-[16px] font-medium text-brand-text mb-2">EV Charging Infrastructure</h4>
 <p className="font-sans text-[15px] text-brand-text-secondary leading-[1.6] font-light">Seamless integration of home EV chargers powered directly by your solar array.</p>
 </div>
 </div>
 </div>
 </motion.div>
 </div>

 <div className="w-full lg:w-1/2">
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 1, ease: "easeOut" }}
 className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-[8px]"
 >
 <img 
 src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2944&auto=format&fit=crop" 
 alt="Electric vehicle charging via solar" 
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 border border-brand-border/20 rounded-[8px]"></div>
 </motion.div>
 </div>

 </div>

 </div>
 </section>
 )
}
