import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import BaseButton from '../components/ui/BaseButton'

const detailedSteps = [
  {
    number: "01",
    title: "Discovery & Site Survey",
    timeframe: "Day 1-2",
    details: "Our certified engineers visit your property to assess roof integrity, shadow mapping, and your historical energy consumption to design the optimal system size.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1584488824108-a42e0327f311?q=80&w=2874&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "PM SuryaGhar Registration",
    timeframe: "Day 3-5",
    details: "We handle the complete online registration on the National Portal, submitting necessary documents to secure your government subsidy approval.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2936&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Installation & Commissioning",
    timeframe: "Day 6-10",
    details: "Using premium monocrystalline panels and tier-1 inverters, our expert team completes the physical installation, adhering strictly to MNRE guidelines.",
    mediaType: "video",
    mediaSrc: "/bg-video.mp4"
  },
  {
    number: "04",
    title: "Net Metering & Subsidy Release",
    timeframe: "Day 11-30",
    details: "We coordinate with your local DISCOM to install the bi-directional net meter. Following this, the subsidy is directly credited to your bank account.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2942&auto=format&fit=crop"
  }
]

const headerBg = "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2944&auto=format&fit=crop"

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works | BrightFutureEnergy</title>
      </Helmet>
      
      <main className="bg-white min-h-screen pb-24">
        
        {/* Page Header */}
        <section className="relative w-full pt-40 pb-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-brand-navy/80 z-10"></div>
            <img 
              src={headerBg} 
              alt="Solar panels background" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-sans text-[48px] md:text-[56px] text-white font-medium leading-[1.1] tracking-tight mb-6">
                The Path to <br/>
                <span className="text-brand-primary">Energy Independence</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-2xl mx-auto">
                We've engineered a seamless, end-to-end process that takes you from high electricity bills to complete solar independence with zero stress.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vertical Timeline */}
        <section className="py-16 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-border/40 -translate-x-1/2"></div>

            <div className="space-y-20 lg:space-y-32">
              {detailedSteps.map((step, index) => {
                const isEven = index % 2 !== 0;
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative flex flex-col md:flex-row items-center w-full"
                  >
                    
                    {/* Timeline Dot (Desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-bg-dark border-4 border-brand-primary z-10 items-center justify-center">
                      <span className="font-sans text-[12px] font-black text-brand-text">{step.number}</span>
                    </div>

                    {/* Content Section */}
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:order-2 md:pl-16 lg:pl-24' : 'md:order-1 md:pr-16 lg:pr-24'} mb-8 md:mb-0`}>
                      <div className="md:hidden flex items-center gap-4 mb-4">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-bg-dark border border-brand-border/60 font-sans text-[14px] font-black text-brand-primary">
                          {step.number}
                        </span>
                        <span className="font-sans text-[13px] uppercase font-bold text-brand-text-secondary tracking-widest">{step.timeframe}</span>
                      </div>
                      <div className="hidden md:block mb-4">
                         <span className="font-sans text-[13px] uppercase font-bold text-brand-text-secondary tracking-widest">{step.timeframe}</span>
                      </div>
                      
                      <h3 className="font-sans text-[28px] lg:text-[36px] font-medium text-brand-text mb-4 lg:mb-6">
                        {step.title}
                      </h3>
                      <p className="font-sans text-[16px] lg:text-[18px] text-brand-text-secondary leading-[1.8] font-normal">
                        {step.details}
                      </p>
                    </div>

                    {/* Media Section */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1 md:pr-16 lg:pr-24' : 'md:order-2 md:pl-16 lg:pl-24'}`}>
                      <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden bg-brand-bg-dark border border-brand-border/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] group">
                        {step.mediaType === 'image' ? (
                          <img 
                            src={step.mediaSrc} 
                            alt={step.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <video 
                            src={step.mediaSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}
                        <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500"></div>
                      </div>
                    </div>
                    
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 mb-16 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-[36px] md:text-[48px] font-medium text-brand-text leading-[1.1] mb-8">
              Ready to Start Your <span className="text-brand-primary">Journey?</span>
            </h2>
            <BaseButton variant="primary" size="lg" to="/contact" className="rounded-full px-12 py-4 shadow-lg hover:scale-105 transition-all duration-300">
              Book a Free Site Survey
            </BaseButton>
          </motion.div>
        </section>

      </main>
    </>
  )
}
