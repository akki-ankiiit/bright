import { useState } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

export default function FloatingChat() {
 const [isOpen, setIsOpen] = useState(false)

 return (
 <div className="fixed bottom-6 right-6 z-50">
 <AnimatePresence>
 {!isOpen && (
 <motion.button
 initial={{ scale: 0, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 exit={{ scale: 0, opacity: 0 }}
 onClick={() => setIsOpen(true)}
 className="bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-brand-secondary hover:scale-105 transition-all duration-300 flex items-center justify-center group relative"
 aria-label="Open chat"
 >
 <ChatBubbleLeftRightIcon className="h-6 w-6" />
 <span className="absolute right-full mr-4 bg-white text-brand-navy text-sm px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
 Need help? Chat with us!
 </span>
 </motion.button>
 )}
 </AnimatePresence>

 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0, y: 20, scale: 0.95 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 exit={{ opacity: 0, y: 20, scale: 0.95 }}
 transition={{ type: 'spring', stiffness: 300, damping: 25 }}
 className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden border border-brand-border origin-bottom-right"
 >
 {/* Header */}
 <div className="bg-brand-navy text-white p-4 flex justify-between items-center">
 <div>
 <h3 className="font-bold">Support Agent</h3>
 <p className="text-xs text-brand-primary flex items-center gap-1 mt-0.5">
 <span className="w-2 h-2 rounded-full bg-brand-primary inline-block"></span>
 Online - Replies instantly
 </p>
 </div>
 <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors p-1">
 <XMarkIcon className="h-5 w-5" />
 </button>
 </div>

 {/* Body */}
 <div className="p-4 h-64 overflow-y-auto bg-brand-bg flex flex-col gap-3">
 <div className="bg-white text-brand-text p-3 rounded-2xl rounded-tl-sm shadow-sm self-start max-w-[85%] text-sm">
 Namaste! Welcome to BrightFutureEnergy. How can I help you with PM SuryaGhar Yojana today?
 </div>
 
 {/* Quick Actions */}
 <div className="mt-4 flex flex-col gap-2">
 <button className="bg-white border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-xs px-3 py-2 rounded-full text-left transition-colors w-max shadow-sm">
 Am I eligible for subsidy?
 </button>
 <button className="bg-white border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-xs px-3 py-2 rounded-full text-left transition-colors w-max shadow-sm">
 What is the cost of 3kW system?
 </button>
 <button className="bg-white border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-xs px-3 py-2 rounded-full text-left transition-colors w-max shadow-sm">
 I want to apply as a vendor
 </button>
 </div>
 </div>

 {/* Footer/Input */}
 <div className="p-4 border-t border-brand-border bg-white">
 <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
 <input
 type="text"
 placeholder="Type your message..."
 className="flex-1 bg-brand-bg border border-brand-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
 />
 <button
 type="submit"
 className="bg-brand-primary text-white rounded-full p-2 hover:bg-brand-secondary transition-colors shrink-0"
 >
 <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
 </button>
 </form>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 )
}
