import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import BaseButton from '../ui/BaseButton'

export default function HeroSection() {
  const bgVideo = "/bg-video.mp4"

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Full-bleed background video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          src={bgVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-16">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-sans text-[40px] md:text-[56px] lg:text-[72px] text-white leading-[1.1] font-medium mb-6"
        >
          Powering a Cleaner Future <br/>
          With Solar Energy
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-[16px] md:text-[18px] text-white/90 leading-relaxed font-normal mb-10 max-w-2xl"
        >
          Reliable, affordable, and sustainable solar solutions for homes and businesses.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <BaseButton variant="primary" size="lg" className="rounded-full px-8 py-3.5 group">
            Start Your Solar Journey
            <div className="ml-3 w-6 h-6 rounded-full bg-brand-text text-white flex items-center justify-center group-hover:bg-brand-primary transition-colors">
              <ArrowRightIcon className="w-3.5 h-3.5" strokeWidth={3} />
            </div>
          </BaseButton>
        </motion.div>

      </div>
    </section>
  )
}
