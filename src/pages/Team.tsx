import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import BaseButton from '../components/ui/BaseButton'

const team = [
  {
    name: "Dr. Arvind Sharma",
    role: "Chief Technical Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
    bio: "Former MNRE consultant with 15+ years in grid-scale solar infrastructure."
  },
  {
    name: "Priya Desai",
    role: "Head of Subsidy Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
    bio: "Specializes in navigating state DISCOM policies and ensuring rapid subsidy disbursements."
  },
  {
    name: "Vikram Singh",
    role: "Lead Installation Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop",
    bio: "Certified structural engineer managing our PAN-India deployment teams."
  },
  {
    name: "Ananya Patel",
    role: "Customer Success Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop",
    bio: "Ensures that every household transitioning to solar has a flawless, zero-stress experience."
  }
]

const headerBg = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2874&auto=format&fit=crop"

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | BrightFutureEnergy</title>
        <meta
          name="description"
          content="Meet the engineers, policy experts, and installation crews behind BrightFutureEnergy's PM SuryaGhar rollout."
        />
      </Helmet>

      <main className="bg-white min-h-screen pb-24">

        {/* Page Header */}
        <section className="relative w-full pt-40 pb-24 mb-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-brand-navy/80 z-10"></div>
            <img 
              src={headerBg} 
              alt="Team background" 
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
                The Minds Behind <br/>
                <span className="text-brand-primary">The Mission</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-2xl mx-auto">
                We are a collective of engineers, policy experts, and sustainability advocates dedicated to democratizing solar power in India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="flex items-end justify-between border-b border-brand-border/60 pb-8 mb-12">
              <h2 className="font-sans text-[16px] uppercase font-bold text-brand-text">
                Leadership Team
              </h2>
              <span className="font-sans text-[14px] font-medium text-brand-text-secondary">
                {team.length} Members
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex flex-col group"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] mb-6 bg-brand-bg-dark">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-text opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-sans text-[20px] font-bold text-brand-text mb-1">{member.name}</h3>
                  <p className="font-sans text-[13px] uppercase font-bold text-brand-primary mb-4 tracking-widest">
                    {member.role}
                  </p>
                  <p className="font-sans text-[15px] text-brand-text-secondary leading-[1.6] border-t border-brand-border/40 pt-4">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-[36px] md:text-[48px] font-medium text-brand-text leading-[1.1] mb-6">
              Want to Help Power <br/>
              <span className="text-brand-primary">India's Homes?</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-brand-text-secondary leading-relaxed max-w-xl mx-auto mb-10">
              We're always looking for engineers, installers, and subsidy specialists who share our mission.
            </p>
            <BaseButton variant="primary" size="lg" to="/contact" className="rounded-full px-12 py-4 shadow-lg hover:scale-105 transition-all duration-300">
              Get in Touch
            </BaseButton>
          </motion.div>
        </section>

      </main>
    </>
  )
}
