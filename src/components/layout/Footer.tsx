import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'HOW IT WORKS', href: '/how-it-works' },
  { name: 'TEAM', href: '/team' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-white pt-12 lg:pt-24 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-10 lg:mb-20 border-b border-brand-border/40 pb-16">

          {/* Column 1: Map Embed */}
          <div className="lg:col-span-5 flex flex-col">
            <h4 className="font-sans text-[16px] font-bold text-brand-text mb-6">Our Location</h4>
            <div className="w-full h-[220px] rounded-[16px] overflow-hidden shadow-lg border border-brand-border/60">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Shubham%20K-Mart,%20Changorabhatha,%20Raipura,%20Raipur&t=&z=14&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <p className="font-sans text-[14px] text-brand-text-secondary mt-4 font-medium leading-relaxed">
              Near Shubham K-Mart, Changorabhatha,<br />
              Raipura, 492001, Raipur, C.G.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col lg:pl-8">
            <h4 className="font-sans text-[16px] font-bold text-brand-text mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-[14px] font-medium text-brand-text-secondary hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-sans text-[16px] font-bold text-brand-text mb-6">Get in Touch</h4>
            <p className="font-sans text-[14px] text-brand-text-secondary leading-relaxed mb-6 font-medium">
              We are dedicated to delivering reliable, sustainable, and innovative solar energy solutions that help homes and businesses power a brighter future.
            </p>

            <div className="flex gap-4 mt-auto">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg-dark flex items-center justify-center text-brand-text cursor-pointer hover:bg-brand-primary hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg-dark flex items-center justify-center text-brand-text cursor-pointer hover:bg-brand-primary hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg-dark flex items-center justify-center text-brand-text cursor-pointer hover:bg-brand-primary hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
            </div>
          </div>

        </div>


        {/* Bottom Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 lg:mb-24">
          <p className="font-sans text-[14px] text-brand-text-secondary font-medium">
            © BrightFutureEnergy. All rights reserved.
          </p>
          <div className="flex gap-8 font-sans text-[13px] text-brand-text-secondary font-medium">
            <Link to="/privacy" className="hover:text-brand-text transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-text transition-colors">Terms of Service</Link>
            <button className="hover:text-brand-text transition-colors">Cookie Settings</button>
          </div>
        </div>

      </div>

      {/* Giant Animated Glowing Watermark */}
      <div className="absolute -bottom-[5%] left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-10 opacity-30">
        <style>
          {`
            @keyframes glowSlide {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-glow {
              background-size: 200% auto;
              animation: glowSlide 5s ease infinite;
            }
          `}
        </style>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[10vw] font-sans font-black leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#009FDF] to-brand-secondary animate-glow drop-shadow-[0_0_30px_rgba(91,162,30,0.5)]"
        >
          BrightFutureEnergy
        </motion.h1>
      </div>
    </footer>
  )
}
