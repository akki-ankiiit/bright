import { motion } from 'framer-motion'
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid'

export default function ProductSection() {
 return (
 <section className="py-12 lg:py-24 bg-brand-navy w-full relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="flex justify-center mb-16 relative z-10">
 <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[13px] uppercase font-medium">
 Explore Our Latest Products <ArrowRightIcon className="w-4 h-4" />
 </button>
 </div>

 <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative z-10">
 
 {/* Left Content */}
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 className="w-full lg:w-[30%] text-white"
 >
 <h3 className="font-sans text-[36px] leading-[1.2] font-bold mb-4">
 550W<br/>
 Premium Solar<br/>
 Panel Pack
 </h3>
 
 <div className="flex gap-1 mb-8">
 {[1, 2, 3, 4, 5].map((star) => (
 <StarIcon key={star} className="w-4 h-4 text-brand-accent" />
 ))}
 </div>
 
 <p className="font-sans text-[14px] text-white/70 leading-relaxed font-light mb-8 max-w-sm">
 Our 550W high-efficiency solar panels are engineered for superior power output, durability, and long-term savings. Designed for modern homes and commercial installations, they deliver reliable performance in all weather conditions.
 </p>
 
 <button className="text-[14px] font-medium text-white hover:text-brand-accent underline underline-offset-4 decoration-white/30 hover:decoration-brand-accent transition-all">
 See More
 </button>
 </motion.div>

 {/* Center Image (Pill shape) */}
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 1, delay: 0.2 }}
 className="w-full lg:w-[40%] flex justify-center"
 >
 <div className="w-[320px] h-[500px] lg:h-[600px] rounded-full overflow-hidden border-[8px] border-white/5 relative shadow-2xl">
 <img 
 src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2916&auto=format&fit=crop" 
 alt="Solar panels on a bright day" 
 className="w-full h-full object-cover"
 />
 {/* Subtle inner shadow for depth */}
 <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] rounded-full pointer-events-none"></div>
 </div>
 </motion.div>

 {/* Right Content (Specs) */}
 <motion.div 
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, delay: 0.4 }}
 className="w-full lg:w-[30%] flex flex-col gap-10 text-white"
 >
 <div>
 <p className="font-sans text-[12px] text-white/50 uppercase mb-2">Output Power</p>
 <p className="font-sans text-[16px] font-medium">5.0 kW / 10.0 kW</p>
 </div>
 
 <div>
 <p className="font-sans text-[12px] text-white/50 uppercase mb-2">Dimensions</p>
 <p className="font-sans text-[16px] font-medium">85.2" x 44.5" x 1.8"<br/><span className="text-[13px] text-white/70 font-light">(including frame)</span></p>
 </div>
 
 <div>
 <p className="font-sans text-[12px] text-white/50 uppercase mb-2">Warranty</p>
 <p className="font-sans text-[16px] font-medium">30-year<br/><span className="text-[13px] text-white/70 font-light">performance guarantee</span></p>
 </div>
 
 <div>
 <p className="font-sans text-[12px] text-white/50 uppercase mb-2">Certifications</p>
 <p className="font-sans text-[14px] font-medium text-white/90 leading-relaxed">
 IEC 61215 / IEC 61730<br/>
 UL Certified<br/>
 ISO 9001 Approved
 </p>
 </div>
 </motion.div>

 </div>
 
 {/* Decorative elements */}
 <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-0"></div>
 <div className="absolute left-1/2 top-0 w-px h-full bg-white/5 -z-0"></div>

 </div>
 </section>
 )
}
