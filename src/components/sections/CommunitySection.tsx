import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import BaseButton from '../ui/BaseButton'

const avatars = [
 "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
 "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
 "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
 "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
 "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
 "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
]

export default function CommunitySection() {
 return (
 <section className="py-12 lg:py-24 bg-white w-full border-t border-brand-border/40">
 <div className="max-w-4xl mx-auto px-6 text-center">
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 >
 <h2 className="font-sans text-[13px] uppercase font-medium text-brand-text-tertiary mb-4">
 Join Our Community
 </h2>
 <h3 className="font-sans text-[36px] md:text-[44px] text-brand-text leading-[1.2] font-medium mb-16">
 Join Our <span className="text-brand-primary">Green</span><br/>
 Energy Movement
 </h3>
 </motion.div>

 {/* Abstract Avatar Cluster */}
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 1 }}
 className="relative h-[250px] max-w-2xl mx-auto mb-10 lg:mb-20"
 >
 {/* A soft rounded container behind the avatars to simulate the cluster shape */}
 <div className="absolute inset-0 bg-brand-bg-dark rounded-[100px] blur-[20px] opacity-50"></div>
 
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
 {/* Center Top Button */}
 <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-20">
 <BaseButton variant="primary" className="bg-brand-text text-white rounded-full px-6 py-2 shadow-xl hover:bg-black">
 Join our community <ArrowRightIcon className="w-4 h-4 ml-2" />
 </BaseButton>
 </div>
 
 {/* Avatars scattered around */}
 <img src={avatars[0]} className="absolute top-[40%] left-[20%] w-16 h-16 rounded-full border-[3px] border-white shadow-lg object-cover" alt="Community member" />
 <img src={avatars[1]} className="absolute top-[35%] left-[45%] w-14 h-14 rounded-full border-[3px] border-white shadow-lg object-cover" alt="Community member" />
 <img src={avatars[2]} className="absolute top-[45%] left-[65%] w-16 h-16 rounded-full border-[3px] border-white shadow-lg object-cover" alt="Community member" />
 
 <img src={avatars[3]} className="absolute bottom-[20%] left-[30%] w-12 h-12 rounded-full border-[3px] border-white shadow-lg object-cover" alt="Community member" />
 <img src={avatars[4]} className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-20 h-20 rounded-full border-[4px] border-white shadow-xl object-cover z-10" alt="Community member" />
 <img src={avatars[5]} className="absolute bottom-[25%] left-[60%] w-14 h-14 rounded-full border-[3px] border-white shadow-lg object-cover" alt="Community member" />
 
 {/* Decorative dots/icons */}
 <div className="absolute top-[50%] left-[10%] w-8 h-8 bg-brand-text rounded-lg flex items-center justify-center text-white shadow-lg">
 <span className="text-[12px] font-bold">+</span>
 </div>
 <div className="absolute top-[55%] right-[15%] w-10 h-10 bg-brand-text rounded-2xl flex items-center justify-center text-white shadow-lg">
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
 </div>
 </div>
 </motion.div>

 {/* Logos */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, delay: 0.2 }}
 >
 <p className="font-sans text-[12px] text-brand-text-tertiary mb-8 uppercase font-medium">
 Trusted by innovative companies worldwide
 </p>
 <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 opacity-60 grayscale">
 <span className="font-sans text-[20px] font-bold ">Digitech</span>
 <span className="font-sans text-[18px] font-bold">InnoVest</span>
 <span className="font-sans text-[22px] font-black italic">OAK</span>
 <span className="font-sans text-[20px] font-bold">stripe</span>
 <span className="font-sans text-[20px] font-bold ">ESS.IO</span>
 </div>
 </motion.div>

 </div>
 </section>
 )
}
