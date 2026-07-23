import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
 {
 category: "Subsidy",
 questions: [
 { q: "How much subsidy can I get under PM SuryaGhar?", a: "For systems up to 2kW, the subsidy is ₹30,000 per kW. For a 3kW system, it is ₹78,000 maximum. Systems above 3kW also receive a flat ₹78,000." },
 { q: "How long does it take for the subsidy to be credited?", a: "Once the system is installed and the net meter is commissioned by the DISCOM, the subsidy is directly credited to your bank account within 30-45 days." },
 ]
 },
 {
 category: "Installation",
 questions: [
 { q: "How much space do I need on my roof?", a: "You generally need about 100 sq. ft. of shadow-free roof space per 1 kW of solar panel installation." },
 { q: "How long does the installation take?", a: "Physical installation typically takes 2-3 days. However, including DISCOM approvals and net metering, the end-to-end process takes about 3-4 weeks." },
 ]
 },
 {
 category: "Maintenance",
 questions: [
 { q: "Do solar panels require a lot of maintenance?", a: "No, solar panels are highly durable and require minimal maintenance. Routine cleaning with water every 2-4 weeks to remove dust is usually sufficient." },
 { q: "What happens during a power cut?", a: "Standard grid-tied systems will shut down during a power cut for safety reasons (anti-islanding). If you need backup, you would require a hybrid system with batteries." },
 ]
 }
]

export default function FAQSectionTabs() {
 const [activeTab, setActiveTab] = useState(faqs[0].category)

 return (
 <section className="py-16 lg:py-32 bg-brand-bg-dark w-full border-t border-brand-border/40">
 <div className="max-w-4xl mx-auto px-6 lg:px-8">
 
 <div className="text-center mb-16">
 <h2 className="font-sans text-[12px] uppercase font-medium text-brand-text-secondary mb-6">
 Knowledge Base
 </h2>
 <h3 className="font-serif text-[36px] md:text-[44px] text-brand-text leading-[1.15] ">
 Frequently Asked <span className="italic text-brand-text-tertiary">Questions</span>
 </h3>
 </div>

 {/* Custom Tabs */}
 <div className="flex flex-wrap justify-center gap-2 mb-16">
 {faqs.map((faq) => (
 <button
 key={faq.category}
 onClick={() => setActiveTab(faq.category)}
 className={`px-8 py-3 rounded-full font-sans text-[14px] transition-all duration-300 ${
 activeTab === faq.category 
 ? 'bg-brand-text text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)]' 
 : 'bg-transparent text-brand-text-secondary border border-brand-border hover:border-brand-text-secondary'
 }`}
 >
 {faq.category}
 </button>
 ))}
 </div>

 {/* FAQ Accordion List */}
 <div className="w-full">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeTab}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.3 }}
 className="space-y-4"
 >
 {faqs.find(f => f.category === activeTab)?.questions.map((q, idx) => (
 <FAQItem key={idx} question={q.q} answer={q.a} />
 ))}
 </motion.div>
 </AnimatePresence>
 </div>
 
 </div>
 </section>
 )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
 const [isOpen, setIsOpen] = useState(false)
 
 return (
 <div className="bg-white border border-brand-border/60 rounded-[8px] overflow-hidden transition-colors duration-300">
 <button 
 onClick={() => setIsOpen(!isOpen)}
 className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
 >
 <span className="font-sans text-[16px] font-medium text-brand-text pr-8">{question}</span>
 <ChevronDownIcon 
 className={`w-5 h-5 text-brand-text-tertiary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
 />
 </button>
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 className="overflow-hidden"
 >
 <div className="px-8 pb-6 font-sans text-[15px] text-brand-text-secondary leading-[1.7] font-light">
 {answer}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 )
}
