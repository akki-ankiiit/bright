import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

const navigation = [
 { name: 'Home', href: '/' },
 { name: 'About', href: '/about' },
 { name: 'How It Works', href: '/how-it-works' },
 { name: 'Team', href: '/team' },
 { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 const [scrolled, setScrolled] = useState(false)
 const location = useLocation()

 // Detect scroll to add background to navbar
 useEffect(() => {
 const handleScroll = () => {
 setScrolled(window.scrollY > 50)
 }
 window.addEventListener('scroll', handleScroll)
 return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 // Prevent scrolling when mobile menu is open
 useEffect(() => {
 if (mobileMenuOpen) {
 document.body.style.overflow = 'hidden'
 } else {
 document.body.style.overflow = 'auto'
 }
 return () => {
 document.body.style.overflow = 'auto'
 }
 }, [mobileMenuOpen])

  // Is this a page with a dark hero header?
  const isDarkHeader = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/how-it-works' || location.pathname === '/team'
  const navTextClass = isDarkHeader && !scrolled ? 'text-white' : 'text-brand-text'
  const logoFilter = isDarkHeader && !scrolled ? 'brightness(0) invert(1)' : 'none' // Try to make logo white on hero

 return (
 <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'pt-4 px-4' : 'pt-5 px-0'}`}>
 <nav className={`mx-auto flex w-full max-w-7xl items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-6 lg:px-8 py-3 border border-brand-border/60' : 'bg-transparent px-6 lg:px-8 py-0'}`} aria-label="Global">
 
 {/* Left: Logo */}
 <div className="flex lg:flex-1">
 <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
 <img 
 src="/logo.svg" 
 alt="BrightFutureEnergy"
 className="h-8 w-auto transition-all duration-300"
 style={{ filter: logoFilter }}
 />
 </Link>
 </div>
 
 {/* Mobile Menu Button */}
 <div className="flex lg:hidden">
 <button
 type="button"
 className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-text bg-white/20 backdrop-blur-sm"
 onClick={() => setMobileMenuOpen(true)}
 >
 <span className="sr-only">Open main menu</span>
 <Bars3Icon className={`h-6 w-6 ${navTextClass}`} aria-hidden="true" />
 </button>
 </div>
 
      {/* Center: Navigation Links */}
      <div className="hidden lg:flex lg:gap-x-8 items-center relative">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`relative text-[14px] font-medium transition-colors hover:opacity-70 ${navTextClass} ${isActive ? 'opacity-100' : ''}`}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${scrolled || !isDarkHeader ? 'bg-brand-primary' : 'bg-white'}`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </div>
      {/* Right: CTA Buttons */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3 items-center">
        <Link to="/contact" className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 border ${isDarkHeader && !scrolled ? 'border-white/50 text-white hover:bg-white/10' : 'bg-brand-primary text-white border-transparent hover:shadow-lg hover:scale-105'}`}>
          Contact Us
        </Link>
      </div>
 </nav>
 
 {/* Mobile Menu Drawer */}
 <AnimatePresence>
 {mobileMenuOpen && (
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
 onClick={() => setMobileMenuOpen(false)}
 />
 )}
 </AnimatePresence>

 <AnimatePresence>
 {mobileMenuOpen && (
 <motion.div
 initial={{ x: '100%' }}
 animate={{ x: 0 }}
 exit={{ x: '100%' }}
 transition={{ type: 'spring', damping: 25, stiffness: 200 }}
 className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm lg:hidden shadow-2xl flex flex-col"
 >
 <div className="flex items-center justify-between">
 <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
 <img src="/logo.svg" alt="BrightFutureEnergy" className="h-8 w-auto" />
 </Link>
 <button
 type="button"
 className="-m-2.5 rounded-md p-2.5 text-brand-text hover:bg-brand-bg-dark"
 onClick={() => setMobileMenuOpen(false)}
 >
 <span className="sr-only">Close menu</span>
 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
 </button>
 </div>
 
 <div className="mt-8 flex-1 flex flex-col justify-between">
 <div className="space-y-1 py-6 border-t border-brand-border/40">
 {navigation.map((item) => (
 <Link
 key={item.name}
 to={item.href}
 className="block rounded-lg px-4 py-3 text-[16px] font-medium text-brand-text hover:bg-brand-bg-dark"
 onClick={() => setMobileMenuOpen(false)}
 >
 {item.name}
 </Link>
 ))}
 </div>
 
 <div className="py-6 flex flex-col gap-4 border-t border-brand-border/40">
 <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-6 py-3.5 rounded-full text-[15px] font-medium transition-all border border-brand-border text-brand-text hover:bg-brand-bg-dark">
 Contact Us
 </Link>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </header>
 )
}
