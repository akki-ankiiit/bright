import { motion } from 'framer-motion'
import Accordion from '../ui/Accordion'

const faqs = [
 {
 value: 'item-1',
 trigger: 'How much space do I need for a 3kW system?',
 content: 'A standard 3kW system requires approximately 300 sq. ft. of shadow-free rooftop space. Our engineers will optimize the layout during the site survey to ensure maximum efficiency even in constrained spaces.',
 },
 {
 value: 'item-2',
 trigger: 'What happens during a power cut? Does solar still work?',
 content: 'Standard grid-tied systems shut down during power cuts for safety reasons (anti-islanding). If you experience frequent power cuts, we highly recommend our hybrid system which includes battery backup to provide uninterrupted power 24/7.',
 },
 {
 value: 'item-3',
 trigger: 'How long does the PM Surya Ghar subsidy process take?',
 content: 'The entire process from application to receiving the subsidy in your bank account typically takes 30-45 days. We handle all the paperwork and liaise with the DISCOM (electricity board) on your behalf to ensure a smooth process.',
 },
 {
 value: 'item-4',
 trigger: 'Is financing or EMI available?',
 content: 'Yes! We partner with leading national banks to offer zero-tension EMI options. In many cases, your monthly EMI will be lower than your current electricity bill, meaning you start saving money from day one.',
 },
]

export default function FAQSection() {
 return (
 <section className="py-16 lg:py-32 bg-white relative">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mb-16"
 >
 <h2 className="text-4xl md:text-6xl font-serif text-brand-navy mb-6">
 Common questions. <br/> Clear answers.
 </h2>
 <p className="text-xl text-brand-text-secondary">
 Everything you need to know about switching to solar.
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 >
 <Accordion items={faqs} />
 </motion.div>
 </div>
 </section>
 )
}
