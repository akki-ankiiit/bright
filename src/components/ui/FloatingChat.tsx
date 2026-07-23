import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function FloatingChat() {
 const [isOpen, setIsOpen] = useState(false)
 const [messages, setMessages] = useState<{id: number, text: string, sender: 'user' | 'agent', time: string}[]>([
 { id: 1, text: "Hi! How can we help you today?", sender: 'agent', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
 ])
 const [inputValue, setInputValue] = useState('')
 const messagesEndRef = useRef<HTMLDivElement>(null)

 const quickReplies = ["Check Eligibility", "Pricing", "Contact"]

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
 }

 useEffect(() => {
 scrollToBottom()
 }, [messages, isOpen])

 const handleSend = (text: string) => {
 if (!text.trim()) return
 
 const newUserMsg = {
 id: Date.now(),
 text,
 sender: 'user' as const,
 time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
 }
 
 setMessages(prev => [...prev, newUserMsg])
 setInputValue('')
 
 // Simulate agent response
 setTimeout(() => {
 setMessages(prev => [...prev, {
 id: Date.now() + 1,
 text: "Thanks for reaching out! A solar expert will be with you shortly.",
 sender: 'agent',
 time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
 }])
 }, 1000)
 }

 return (
 <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0, y: 20, scale: 0.95 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 exit={{ opacity: 0, y: 20, scale: 0.95 }}
 transition={{ duration: 0.2 }}
 className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] mb-4 flex flex-col overflow-hidden border border-brand-border"
 >
 {/* Header */}
 <div className="bg-brand-navy p-4 flex justify-between items-center text-white">
 <div>
 <h3 className="font-semibold text-[15px]">Chat with BrightFuture</h3>
 <p className="text-[12px] text-white/80 mt-0.5">We typically reply in minutes</p>
 </div>
 <button 
 onClick={() => setIsOpen(false)}
 className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
 >
 <XMarkIcon className="w-5 h-5" />
 </button>
 </div>
 
 {/* Messages Area */}
 <div className="flex-1 overflow-y-auto p-4 bg-brand-bg-dark flex flex-col gap-4">
 {messages.map((msg) => (
 <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
 <div 
 className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-[14px] ${
 msg.sender === 'user' 
 ? 'bg-brand-primary text-white rounded-br-sm' 
 : 'bg-white text-brand-text shadow-sm border border-brand-border/50 rounded-bl-sm'
 }`}
 >
 {msg.text}
 </div>
 <span className="text-[11px] text-brand-text-tertiary mt-1 px-1">
 {msg.time}
 </span>
 </div>
 ))}
 <div ref={messagesEndRef} />
 </div>
 
 {/* Input Area */}
 <div className="p-4 bg-white border-t border-brand-border">
 {/* Quick Replies */}
 <div className="flex gap-2 overflow-x-auto pb-3 mb-1 scrollbar-hide">
 {quickReplies.map((reply) => (
 <button 
 key={reply}
 onClick={() => handleSend(reply)}
 className="flex-shrink-0 px-3 py-1.5 rounded-full border border-brand-navy text-brand-navy text-[13px] font-medium hover:bg-brand-navy hover:text-white transition-colors"
 >
 {reply}
 </button>
 ))}
 </div>
 
 <form 
 onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
 className="flex items-center gap-2"
 >
 <input
 type="text"
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 placeholder="Type your message..."
 className="flex-1 bg-brand-bg-dark border border-brand-border rounded-full px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
 />
 <button 
 type="submit"
 disabled={!inputValue.trim()}
 className="p-2.5 bg-brand-primary text-white rounded-full hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
 >
 <PaperAirplaneIcon className="w-5 h-5" />
 </button>
 </form>
 </div>
 </motion.div>
 )}
 </AnimatePresence>

 <button
 onClick={() => setIsOpen(!isOpen)}
 className="w-[60px] h-[60px] bg-brand-primary text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(22,163,74,0.3)] hover:scale-105 hover:shadow-[0_8px_25px_rgba(22,163,74,0.4)] transition-all duration-300"
 >
 {isOpen ? <XMarkIcon className="w-7 h-7" /> : <ChatBubbleLeftRightIcon className="w-7 h-7" />}
 </button>
 </div>
 )
}
