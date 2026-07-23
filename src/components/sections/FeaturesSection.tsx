import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const features = [
 {
 title: "Harnessing Clean &\nPowerful Solar\nEnergy",
 image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2944&auto=format&fit=crop"
 },
 {
 title: "Reduce Your\nDependence on\nthe Grid",
 image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2874&auto=format&fit=crop"
 },
 {
 title: "Save More on\nElectricity\nBills",
 image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop"
 }
]

export default function FeaturesSection() {
 return (
 <section className="py-12 lg:py-24 bg-white w-full">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
 <div className="max-w-2xl">
 <h2 className="font-sans text-[13px] uppercase font-medium text-brand-text-tertiary mb-4">
 Why Choose Us?
 </h2>
 <h3 className="font-sans text-[32px] md:text-[40px] text-brand-text leading-[1.2] font-medium ">
 Powering a Greener Future<br/>
 with Smart Solar<br/>
 Technology
 </h3>
 </div>
 
 <div className="max-w-xs">
 <p className="font-sans text-[14px] text-brand-text-secondary leading-relaxed font-light">
 We focus on carefully designing and creating smart energy solutions that drastically lower carbon footprints.
 </p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {features.map((feature, index) => (
 <motion.div 
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ delay: index * 0.1, duration: 0.6 }}
 className="bg-brand-bg-dark rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
 >
 <div className="p-8 pb-4 flex flex-col flex-grow">
 <div className="flex justify-between items-start mb-12">
 <h4 className="font-sans text-[22px] text-brand-text leading-[1.3] font-medium whitespace-pre-line">
 {feature.title}
 </h4>
 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-text group-hover:text-white transition-colors duration-300">
 <ArrowUpRightIcon className="w-5 h-5" />
 </div>
 </div>
 
 <p className="font-sans text-[13px] font-medium text-brand-text-secondary mt-auto mb-4 hover:text-brand-text transition-colors">
 Explore More
 </p>
 </div>
 
 <div className="h-[200px] w-full bg-white relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
 {/* Simulated 3D graphic using unsplash images filtered to look techy/grey */}
 <img 
 src={feature.image} 
 alt={feature.title.replace(/\n/g, ' ')}
 className="w-full h-full object-cover filter grayscale opacity-80"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-dark to-transparent"></div>
 </div>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 )
}
