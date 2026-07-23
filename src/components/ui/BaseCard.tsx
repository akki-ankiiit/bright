import React from 'react'

interface BaseCardProps {
 hover?: boolean
 padding?: string
 bg?: string
 className?: string
 children: React.ReactNode
}

export default function BaseCard({ 
 hover = false, 
 padding = 'p-8', 
 bg = 'bg-white', 
 className = '',
 children 
}: BaseCardProps) {
 
 const baseClasses = `${bg} ${padding} rounded-[4px] border border-brand-border/60 transition-all duration-300`
 const hoverClasses = hover ? 'hover:border-brand-navy/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-0.5' : ''

 return (
 <div className={`${baseClasses} ${hoverClasses} ${className}`}>
 {children}
 </div>
 )
}
