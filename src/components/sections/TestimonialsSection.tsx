import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import BaseCard from '../ui/BaseCard'

const testimonials = [
 {
 id: 1,
 name: 'Rajesh Kumar',
 location: 'Ahmedabad, Gujarat',
 capacity: '3kW System',
 savings: '₹3,500/month',
 earning: '₹800',
 quote: 'Before BrightFutureEnergy, my summer AC bills were a nightmare. Now, not only is my bill zero, but I also get a credit from the electricity board through net metering. The subsidy process was handled entirely by their team.',
 image: 'https://i.pravatar.cc/150?img=11'
 },
 {
 id: 2,
 name: 'Priya Sharma',
 location: 'Pune, Maharashtra',
 capacity: '2kW System',
 savings: '₹2,100/month',
 earning: '₹0',
 quote: 'The installation was completed in just 3 days without any mess. The app is fantastic—I check my power generation every morning. It feels great to do something for the environment while saving money.',
 image: 'https://i.pravatar.cc/150?img=5'
 },
 {
 id: 3,
 name: 'Amit Patel',
 location: 'Surat, Gujarat',
 capacity: '5kW System',
 savings: '₹6,000/month',
 earning: '₹1,500',
 quote: 'I run a small home business and power cuts used to disrupt my work. With the solar setup and battery backup, I have 24/7 power. The EMI is exactly what I used to pay for electricity, so it feels like a free upgrade!',
 image: 'https://i.pravatar.cc/150?img=8'
 }
]

export default function TestimonialsSection() {
 const [currentIndex, setCurrentIndex] = useState(0)

 const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
 const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

 return (
 <section className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-3xl font-bold text-brand-navy mb-4">Hear from our Happy Customers</h2>
 <p className="text-brand-text-secondary max-w-2xl mx-auto">Join thousands of Indian families who have achieved energy independence.</p>
 </div>

 <div className="relative max-w-4xl mx-auto">
 {/* Navigation Buttons */}
 <button 
 onClick={prev}
 className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-10 bg-white p-2 rounded-full shadow-lg text-brand-navy hover:text-brand-primary focus:outline-none"
 aria-label="Previous testimonial"
 >
 <ChevronLeftIcon className="h-6 w-6" />
 </button>
 
 <button 
 onClick={next}
 className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-10 bg-white p-2 rounded-full shadow-lg text-brand-navy hover:text-brand-primary focus:outline-none"
 aria-label="Next testimonial"
 >
 <ChevronRightIcon className="h-6 w-6" />
 </button>

 <div className="overflow-hidden px-4 py-8">
 <AnimatePresence mode="wait">
 <motion.div
 key={currentIndex}
 initial={{ opacity: 0, x: 50 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -50 }}
 transition={{ duration: 0.3 }}
 >
 <BaseCard className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-12">
 <div className="w-full md:w-1/3 flex flex-col items-center text-center">
 <img 
 src={testimonials[currentIndex].image} 
 alt={testimonials[currentIndex].name}
 className="w-24 h-24 rounded-full object-cover border-4 border-brand-primary/20 mb-4"
 />
 <h3 className="text-lg font-bold text-brand-navy">{testimonials[currentIndex].name}</h3>
 <p className="text-sm text-brand-text-secondary mb-2">{testimonials[currentIndex].location}</p>
 <div className="flex gap-1 text-amber-400 mb-4">
 {[1, 2, 3, 4, 5].map((star) => (
 <StarIcon key={star} className="w-4 h-4" />
 ))}
 </div>
 </div>
 
 <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-brand-border pt-6 md:pt-0 md:pl-8">
 <svg className="w-10 h-10 text-brand-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
 <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
 </svg>
 <p className="text-lg text-brand-text italic mb-6">"{testimonials[currentIndex].quote}"</p>
 
 <div className="flex flex-wrap gap-4">
 <div className="bg-brand-bg px-4 py-2 rounded-lg border border-brand-border text-sm">
 <span className="text-brand-text-secondary block text-xs">System</span>
 <span className="font-bold text-brand-navy">{testimonials[currentIndex].capacity}</span>
 </div>
 <div className="bg-green-50 px-4 py-2 rounded-lg border border-green-100 text-sm">
 <span className="text-green-700 block text-xs">Monthly Savings</span>
 <span className="font-bold text-green-700 font-mono">{testimonials[currentIndex].savings}</span>
 </div>
 {testimonials[currentIndex].earning !== '₹0' && (
 <div className="bg-brand-primary/10 px-4 py-2 rounded-lg border border-brand-primary/20 text-sm">
 <span className="text-brand-primary block text-xs">Net Metering Earnings</span>
 <span className="font-bold text-brand-primary font-mono">{testimonials[currentIndex].earning}</span>
 </div>
 )}
 </div>
 </div>
 </BaseCard>
 </motion.div>
 </AnimatePresence>
 </div>
 
 <div className="flex justify-center gap-2 mt-4">
 {testimonials.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentIndex(index)}
 className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-brand-primary' : 'bg-gray-300'}`}
 aria-label={`Go to testimonial ${index + 1}`}
 />
 ))}
 </div>
 </div>
 </div>
 </section>
 )
}
