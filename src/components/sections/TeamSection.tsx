import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const team = [
 {
 name: "Dr. Arvind Sharma",
 role: "Chief Technical Officer",
 image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
 },
 {
 name: "Priya Desai",
 role: "Head of Subsidy Operations",
 image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
 },
 {
 name: "Vikram Singh",
 role: "Lead Installation Engineer",
 image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop",
 },
 {
 name: "Ananya Patel",
 role: "Customer Success Director",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop",
 }
]

export default function TeamSection() {
 return (
 <section className="py-12 lg:py-24 bg-white w-full">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-brand-border/60 pb-12">
 <div className="max-w-2xl">
 <h2 className="font-sans text-[13px] uppercase font-medium text-brand-text-tertiary mb-4">
 Meet Our Experts?
 </h2>
 <h3 className="font-sans text-[32px] md:text-[40px] text-brand-text leading-[1.2] font-medium ">
 Our Expert <span className="text-brand-primary">Team</span> Delivering<br/>
 Quality You Can Trust
 </h3>
 </div>
 
 <div className="max-w-xs flex flex-col items-start md:items-end gap-4">
 <p className="font-sans text-[14px] text-brand-text-secondary leading-relaxed font-light md:text-right">
 Our highly skilled professionals bring years of experience, ensuring safe, efficient, and top-quality solar energy solutions for all your needs.
 </p>
 <Link
 to="/team"
 className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-brand-text group shrink-0"
 >
 View full team
 <span className="w-6 h-6 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-colors">→</span>
 </Link>
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 {team.map((member, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ delay: index * 0.1, duration: 0.6 }}
 className="flex flex-col group"
 >
 <Link to="/team" className="contents">
 <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden mb-6 bg-brand-bg-dark">
 <img
 src={member.image}
 alt={member.name}
 className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105"
 />
 </div>

 <div className="flex justify-between items-start">
 <div>
 <h4 className="font-sans text-[18px] font-medium text-brand-text mb-1">
 {member.name}
 </h4>
 <p className="font-sans text-[13px] text-brand-text-secondary font-light">
 {member.role}
 </p>
 </div>
 <div className="w-8 h-8 rounded-full border border-brand-border/60 flex items-center justify-center text-brand-text-tertiary group-hover:bg-brand-text group-hover:text-white group-hover:border-transparent transition-all">
 <ArrowUpRightIcon className="w-3.5 h-3.5" />
 </div>
 </div>
 </Link>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 )
}
