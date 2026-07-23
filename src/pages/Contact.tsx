import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ContactSection from '../components/sections/ContactSection'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | BrightFutureEnergy</title>
      </Helmet>
      
      <main className="bg-white min-h-screen pt-16 lg:pt-32">
        {/* Intro Content */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-sans text-[48px] md:text-[56px] text-brand-text font-medium leading-[1.1] tracking-tight mb-6">
              Let's Build a Greener <br/>
              <span className="text-brand-primary">Future Together</span>
            </h1>
            <p className="font-sans text-[16px] md:text-[18px] text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
              Whether you have questions about our solar solutions, need a quote for your home, or want to explore commercial partnerships, our experts are here to help. Reach out to us below.
            </p>
          </motion.div>
        </section>

        {/* The Form Section */}
        <ContactSection />
      </main>
    </>
  )
}
