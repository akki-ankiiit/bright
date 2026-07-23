import { motion } from 'framer-motion'
import BaseButton from '../ui/BaseButton'

export default function ContactSection() {
  const bgImage = "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2916&auto=format&fit=crop"

  return (
    <section className="relative w-full py-16 lg:py-32 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-navy/80 z-10"></div>
        <img 
          src={bgImage} 
          alt="Solar panels texture" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 w-full max-w-2xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col gap-5"
        >
          <div className="text-center mb-10">
            <h2 className="font-sans text-[36px] text-white font-medium mb-4">Send Us a Request</h2>
            <p className="font-sans text-[15px] text-white/70">Our team will get back to you within 24 hours.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-8 py-4 outline-none focus:border-brand-primary transition-colors font-sans text-[15px] font-medium"
            />
            <input 
              type="text" 
              placeholder="Your Region" 
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-8 py-4 outline-none focus:border-brand-primary transition-colors font-sans text-[15px] font-medium"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-8 py-4 outline-none focus:border-brand-primary transition-colors font-sans text-[15px] font-medium"
            />
            <input 
              type="text" 
              placeholder="Phone" 
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-8 py-4 outline-none focus:border-brand-primary transition-colors font-sans text-[15px] font-medium"
            />
          </div>

          <input 
            type="text" 
            placeholder="Your Message" 
            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-8 py-4 outline-none focus:border-brand-primary transition-colors font-sans text-[15px] font-medium"
          />

          <BaseButton 
            variant="primary" 
            className="w-full rounded-full py-4 bg-transparent border border-white/40 text-white hover:bg-white hover:text-brand-text font-bold uppercase mt-2 transition-all duration-300"
          >
            Send Request
          </BaseButton>
          
        </motion.div>

      </div>
    </section>
  )
}
