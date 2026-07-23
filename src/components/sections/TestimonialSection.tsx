import { motion } from 'framer-motion'

const testimonials = [
 {
 quote: "The entire process was so seamless. From the subsidy application to the final installation, BrightFuture handled everything. My electricity bill is now literally zero.",
 author: "Rajesh Kumar",
 location: "New Delhi",
 system: "3 kW System"
 },
 {
 quote: "I was skeptical about the government subsidy actually coming through, but their team ensured all documentation was perfect. Received my ₹78,000 subsidy within a month.",
 author: "Priya Sharma",
 location: "Gurugram",
 system: "5 kW System"
 }
]

export default function TestimonialSection() {
 return (
 <section className="py-16 lg:py-32 bg-white w-full border-t border-brand-border/40 overflow-hidden">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="text-center mb-10 lg:mb-20">
 <h2 className="font-sans text-[12px] uppercase font-medium text-brand-text-secondary mb-6">
 Client Stories
 </h2>
 <h3 className="font-serif text-[36px] md:text-[44px] text-brand-text leading-[1.15] ">
 Trusted by households <span className="italic text-brand-text-tertiary">across India</span>.
 </h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
 {testimonials.map((t, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ delay: idx * 0.2, duration: 0.8 }}
 className="bg-brand-bg-dark p-12 rounded-[8px] flex flex-col justify-between"
 >
 <div className="mb-8">
 <span className="font-serif text-[64px] text-brand-text-tertiary/20 leading-none absolute -mt-6 -ml-4">"</span>
 <p className="font-sans text-[18px] text-brand-text leading-[1.7] relative z-10 italic">
 {t.quote}
 </p>
 </div>
 <div className="flex flex-col border-t border-brand-border/60 pt-6">
 <span className="font-sans text-[15px] font-medium text-brand-text mb-1">{t.author}</span>
 <span className="font-sans text-[13px] text-brand-text-secondary">{t.location} • {t.system}</span>
 </div>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 )
}
