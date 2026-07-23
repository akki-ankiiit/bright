import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  SunIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
  UserGroupIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline'
import BaseButton from '../components/ui/BaseButton'

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "28", label: "States & UTs Covered" },
  { value: "500+", label: "Successful Projects" },
  { value: "30k+", label: "Happy Customers" },
]

const values = [
  {
    icon: SunIcon,
    title: "Zero Investment Model",
    description: "We structure every installation around PM SuryaGhar subsidies, so homeowners get solar without upfront cost.",
  },
  {
    icon: ShieldCheckIcon,
    title: "MNRE-Certified Quality",
    description: "Only tier-1, government-approved panels and inverters, installed to strict MNRE guidelines.",
  },
  {
    icon: HandRaisedIcon,
    title: "Full Transparency",
    description: "From subsidy paperwork to DISCOM net-metering, we walk you through every step, in plain language.",
  },
  {
    icon: UserGroupIcon,
    title: "Community First",
    description: "We measure success by household savings and neighbourhoods moved to clean energy, not just panels sold.",
  },
]

const milestones = [
  {
    year: "2014",
    title: "Founded in Raipur",
    detail: "Started as a small rooftop-solar installer serving Chhattisgarh homes and small businesses.",
  },
  {
    year: "2019",
    title: "1,000th Installation",
    detail: "Crossed our first major milestone while building dedicated DISCOM liaison teams across states.",
  },
  {
    year: "2021",
    title: "PM SuryaGhar Partner",
    detail: "Became an empanelled vendor on the National Portal, streamlining subsidy approval for our customers.",
  },
  {
    year: "2026",
    title: "30,000+ Homes Powered",
    detail: "Now operating across 28 states and union territories, with a growing certified engineering team.",
  },
]

const headerBg = "https://images.unsplash.com/photo-1629726797843-618688139f5a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | BrightFutureEnergy</title>
        <meta
          name="description"
          content="BrightFutureEnergy is India's zero-investment solar partner, helping homes go solar under the PM SuryaGhar Yojana."
        />
      </Helmet>

      <main className="bg-white min-h-screen pb-24">

        {/* Page Header */}
        <section className="relative w-full pt-40 pb-24 mb-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-brand-navy/80 z-10"></div>
            <img
              src={headerBg}
              alt="About background"
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
                Solar for Every <br />
                <span className="text-brand-primary">Indian Home</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-2xl mx-auto">
                We're a team of engineers, policy experts, and installers on a single mission: make rooftop solar simple, affordable, and accessible under the PM SuryaGhar Yojana.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 border-t border-brand-border/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 order-2 lg:order-1"
              >
                <h2 className="font-sans text-[14px] uppercase font-bold text-brand-primary tracking-widest mb-4">
                  Our Story
                </h2>
                <h3 className="font-sans text-[32px] md:text-[40px] font-medium text-brand-text leading-[1.2] mb-8">
                  Built to remove every barrier between Indian homes and solar.
                </h3>
                <div className="space-y-6 font-sans text-[16px] text-brand-text-secondary leading-[1.8] font-normal">
                  <p>
                    BrightFutureEnergy started in Raipur with a simple observation: rooftop solar was already
                    cheaper than grid power over its lifetime, yet paperwork, subsidy delays, and unreliable
                    installers kept most households from switching.
                  </p>
                  <p>
                    So we built an end-to-end service, site survey, subsidy registration on the National Portal,
                    installation, and net-metering coordination with your local DISCOM, so a family only has to
                    make one decision, not manage five vendors.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9 }}
                className="w-full lg:w-1/2 order-1 lg:order-2"
              >
                <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden bg-brand-bg-dark border border-brand-border/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
                    alt="Rooftop solar panels installed on an Indian home"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 lg:py-16 bg-brand-bg-dark border-y border-brand-border/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center text-center lg:border-l lg:border-brand-border/60 lg:first:border-l-0"
                >
                  <span className="font-sans font-black text-[40px] md:text-[56px] text-brand-primary leading-none mb-3">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[14px] font-bold uppercase tracking-widest text-brand-text-secondary">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-sans text-[14px] uppercase font-bold text-brand-primary tracking-widest mb-4">
                What Drives Us
              </h2>
              <h3 className="font-sans text-[32px] md:text-[40px] font-medium text-brand-text leading-[1.2]">
                Values That Shape Every Installation.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex flex-col p-8 rounded-[24px] border border-brand-border/60 hover:border-brand-primary hover:shadow-[0_8px_30px_rgba(91,162,30,0.12)] transition-all duration-300 bg-white"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-bg-dark flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-brand-primary" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-sans text-[18px] font-bold text-brand-text mb-3">
                    {value.title}
                  </h4>
                  <p className="font-sans text-[14px] text-brand-text-secondary leading-relaxed font-normal">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey / Milestones */}
        <section className="py-16 lg:py-24 bg-brand-bg-dark border-y border-brand-border/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
              <h2 className="font-sans text-[14px] uppercase font-bold text-brand-primary tracking-widest mb-4">
                Our Journey
              </h2>
              <h3 className="font-sans text-[32px] md:text-[40px] font-medium text-brand-text leading-[1.2]">
                A Decade of Powering Indian Rooftops.
              </h3>
            </div>

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                >
                  <div className="w-full md:w-1/4 flex md:flex-col items-baseline md:items-start gap-3">
                    <span className="font-sans text-[32px] md:text-[40px] font-black text-brand-primary">{milestone.year}</span>
                  </div>
                  <div className="w-full md:w-3/4 md:border-l md:border-brand-border/60 md:pl-12 pt-1 md:pt-3">
                    <h4 className="font-sans text-[20px] font-bold text-brand-text mb-3">
                      {milestone.title}
                    </h4>
                    <p className="font-sans text-[16px] text-brand-text-secondary leading-relaxed font-normal">
                      {milestone.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Teaser */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-xl">
                <h2 className="font-sans text-[14px] uppercase font-bold text-brand-primary tracking-widest mb-4">
                  The People Behind It
                </h2>
                <h3 className="font-sans text-[32px] md:text-[40px] font-medium text-brand-text leading-[1.2]">
                  Meet The Team.
                </h3>
              </div>
              <Link
                to="/team"
                className="inline-flex items-center gap-3 font-sans text-[15px] font-bold text-brand-text group shrink-0"
              >
                View full team
                <span className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent transition-colors">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <Link
              to="/team"
              className="block rounded-[24px] border border-brand-border/60 bg-brand-bg-dark px-8 py-10 lg:px-14 lg:py-14 hover:border-brand-primary hover:shadow-[0_8px_30px_rgba(91,162,30,0.12)] transition-all duration-300"
            >
              <p className="font-sans text-[18px] md:text-[22px] text-brand-text-secondary leading-relaxed font-normal max-w-3xl">
                Engineers, subsidy specialists, and installation crews working across 28 states, united by one
                goal: a flawless, zero-stress transition to solar for every household we touch.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-[36px] md:text-[48px] font-medium text-brand-text leading-[1.1] mb-8">
              Ready to Start Your <span className="text-brand-primary">Solar Journey?</span>
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
