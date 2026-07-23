import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BoltIcon, MapPinIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const stats = [
 { value: "10+", label: "Years of Experience", desc: "Delivering reliable rooftop solar solutions to Indian homes since 2014." },
 { value: "28", label: "States & UTs Covered", desc: "PAN-India installation and subsidy support under PM SuryaGhar Yojana." },
 { value: "500+", label: "Successful Projects", desc: "From residential rooftops to housing societies and commercial installations." },
 { value: "30k+", label: "Happy Customers", desc: "Empowering Indian households with clean energy savings and net metering." },
]

const highlights = [
 { icon: BoltIcon, label: "Zero Investment Model" },
 { icon: ShieldCheckIcon, label: "MNRE Certified Panels" },
 { icon: MapPinIcon, label: "PAN-India Service" },
 { icon: UserGroupIcon, label: "Dedicated DISCOM Liaisons" },
]

export default function AboutSection() {
 return (
 <section className="py-12 lg:py-24 bg-white w-full overflow-hidden">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:gap-8 items-center">
 
 {/* Left Side: Text and Stats */}
 <div className="w-full lg:w-5/12">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 >
 <h2 className="font-sans text-[13px] font-medium text-brand-text-tertiary mb-6 uppercase ">
 Who We Are?
 </h2>
 
 <h3 className="font-sans text-[36px] md:text-[42px] text-brand-text leading-[1.2] mb-8 max-w-lg">
 We are <span className="text-brand-primary font-medium">Experts in Solar</span> and <span className="text-brand-primary font-medium">Renewable Energy</span> Dedicated to Delivering the Best Experience.
 </h3>

 <Link
 to="/about"
 className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-brand-text mb-12 group"
 >
 Learn our story
 <span className="w-6 h-6 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-colors">→</span>
 </Link>

 <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-brand-border/60 pt-12">
 {stats.map((stat, index) => (
 <div key={index} className="flex flex-col border-l-2 border-brand-primary/20 pl-6 hover:border-brand-primary transition-colors duration-300">
 <span className="font-sans text-[42px] text-brand-text leading-none mb-3 font-medium">
 {stat.value}
 </span>
 <span className="font-sans text-[13px] font-bold text-brand-text mb-2">
 {stat.label}
 </span>
 <span className="font-sans text-[12px] text-brand-text-secondary leading-relaxed">
 {stat.desc}
 </span>
 </div>
 ))}
 </div>
 </motion.div>
 </div>

 {/* Right Side: PAN-India Impact Panel */}
 <div className="w-full lg:w-7/12 flex items-center justify-center relative min-h-[500px]">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 1, ease: "easeOut" }}
 className="relative w-full max-w-[640px] rounded-[32px] bg-brand-bg-dark border border-brand-border/60 p-10 lg:p-14 overflow-hidden"
 >
 {/* Decorative glow blobs */}
 <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
 <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-brand-info/10 blur-3xl pointer-events-none" />

 <div className="relative z-10 flex flex-col items-center text-center mb-10">
 <span className="relative flex h-3 w-3 mb-4">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-60"></span>
 <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
 </span>
 <span className="font-sans text-[13px] font-semibold uppercase tracking-wide text-brand-text-tertiary mb-2">
 Serving All Of India
 </span>
 <span className="font-serif text-[28px] text-brand-navy">28 States &amp; UTs</span>
 </div>

 <div className="relative z-10 grid grid-cols-2 gap-4">
 {highlights.map((item, index) => (
 <div
 key={index}
 className="flex items-center gap-3 bg-white rounded-2xl border border-brand-border/60 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
 >
 <div className="w-10 h-10 shrink-0 rounded-full bg-brand-primary/10 flex items-center justify-center">
 <item.icon className="w-5 h-5 text-brand-primary" strokeWidth={1.75} />
 </div>
 <span className="font-sans text-[13px] font-medium text-brand-text leading-tight">
 {item.label}
 </span>
 </div>
 ))}
 </div>
 </motion.div>
 </div>

 </div>

 </div>
 </section>
 )
}
