import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSolutionSection() {
 const containerRef = useRef<HTMLDivElement>(null)
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start end", "end start"]
 })

 // Smooth parallax for the background image
 const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

 const familyImage = "https://images.unsplash.com/photo-1542887800-faca0261c9e1?q=80&w=2938&auto=format&fit=crop" // Happy family enjoying AC at home

 return (
 <section ref={containerRef} className="py-12 lg:py-24 bg-brand-bg relative">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
 <motion.h2 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 className="text-4xl md:text-6xl font-serif text-brand-navy leading-tight max-w-4xl mx-auto"
 >
 Run your AC all summer. <br/> Without the guilt.
 </motion.h2>
 <motion.p
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, delay: 0.1 }}
 className="text-xl md:text-2xl text-brand-text-secondary mt-6 max-w-2xl mx-auto"
 >
 Say goodbye to rising electricity tariffs and massive summer bills. Your roof is capable of powering your entire lifestyle.
 </motion.p>
 </div>

 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
 <div className="relative rounded-[40px] overflow-hidden h-[600px] w-full">
 {/* Parallax Image */}
 <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
 <img 
 src={familyImage} 
 alt="Happy Indian Family" 
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-black/30"></div>
 </motion.div>
 
 {/* Content overlay */}
 <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="max-w-xl"
 >
 <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 drop-shadow-md">
 100% Free Power.
 </h3>
 <p className="text-lg md:text-xl text-white/90 drop-shadow-sm font-medium">
 Once installed, solar panels generate free electricity for 25+ years. Protect your family from grid outages and yearly tariff hikes.
 </p>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 )
}
