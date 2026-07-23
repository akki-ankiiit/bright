import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

type AccordionProps = {
 items: { value: string; trigger: string; content: React.ReactNode }[]
}

export default function Accordion({ items }: AccordionProps) {
 return (
 <AccordionPrimitive.Root type="single" collapsible className="w-full">
 {items.map((item) => (
 <AccordionPrimitive.Item
 key={item.value}
 value={item.value}
 className="border-b border-brand-border py-4"
 >
 <AccordionPrimitive.Header className="flex">
 <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between py-4 text-left font-medium transition-all focus:outline-none hover:text-brand-primary">
 <span className="text-xl md:text-2xl text-brand-navy pr-8 group-hover:text-brand-primary transition-colors">{item.trigger}</span>
 <div className="flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
 <PlusIcon className="w-6 h-6 text-brand-navy absolute transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0 opacity-100" />
 <MinusIcon className="w-6 h-6 text-brand-primary absolute transition-transform duration-300 group-data-[state=closed]:-rotate-90 group-data-[state=closed]:opacity-0 opacity-100" />
 </div>
 </AccordionPrimitive.Trigger>
 </AccordionPrimitive.Header>
 <AccordionPrimitive.Content className="overflow-hidden text-lg text-brand-text-secondary data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
 <div className="pb-6 pt-2 pr-12 text-balance leading-relaxed">
 {item.content}
 </div>
 </AccordionPrimitive.Content>
 </AccordionPrimitive.Item>
 ))}
 </AccordionPrimitive.Root>
 )
}
