import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

interface ModalProps {
 isOpen: boolean
 onClose: () => void
 title?: string
 maxWidth?: string
 children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, maxWidth = 'sm:max-w-xl', children }: ModalProps) {
 return (
 <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
 <AnimatePresence>
 {isOpen && (
 <Dialog.Portal forceMount>
 <Dialog.Overlay asChild>
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-50"
 />
 </Dialog.Overlay>
 
 <div className="fixed inset-0 z-50 overflow-y-auto">
 <div className="flex min-h-full items-center justify-center p-4 text-center">
 <Dialog.Content asChild>
 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: 10 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 10 }}
 transition={{ type: 'spring', damping: 25, stiffness: 300 }}
 className={`w-full ${maxWidth} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl border border-brand-border`}
 >
 <div className="flex justify-between items-center mb-5">
 {title ? (
 <Dialog.Title className="text-xl font-bold leading-6 text-brand-navy">
 {title}
 </Dialog.Title>
 ) : (
 <div /> // Spacer
 )}
 
 <Dialog.Close asChild>
 <button
 type="button"
 className="rounded-full p-1.5 text-gray-400 hover:text-brand-text hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
 aria-label="Close"
 >
 <XMarkIcon className="h-5 w-5" />
 </button>
 </Dialog.Close>
 </div>

 <div className="mt-2">
 {children}
 </div>
 </motion.div>
 </Dialog.Content>
 </div>
 </div>
 </Dialog.Portal>
 )}
 </AnimatePresence>
 </Dialog.Root>
 )
}
