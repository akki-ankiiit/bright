import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'success'
 size?: 'sm' | 'md' | 'lg'
 to?: string
 href?: string
}

const BaseButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, BaseButtonProps>(
 ({ variant = 'primary', size = 'md', to, href, className = '', children, ...props }, ref) => {
 
 const baseClasses = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
 
 const variantClasses = {
 primary: "bg-brand-bg text-brand-text hover:bg-brand-bg-dark border border-brand-border/60 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]",
 secondary: "bg-brand-primary text-white hover:bg-brand-secondary shadow-[0_4px_14px_rgba(91,162,30,0.2)] hover:shadow-[0_6px_20px_rgba(91,162,30,0.3)]",
 outline: "border border-brand-border text-brand-text hover:bg-brand-bg-dark",
 text: "text-brand-text-secondary hover:text-brand-text",
 success: "bg-brand-success text-white hover:bg-brand-success/90"
 }[variant]

 const sizeClasses = {
 sm: 'px-4 py-2 text-[13px]',
 md: 'px-6 py-2.5 text-[15px]',
 lg: 'px-8 py-3.5 text-[16px]'
 }[size]

 const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`

 if (to) {
 return (
 <Link to={to} className={combinedClasses} ref={ref as React.Ref<HTMLAnchorElement>}>
 {children}
 </Link>
 )
 }

 if (href) {
 return (
 <a href={href} className={combinedClasses} ref={ref as React.Ref<HTMLAnchorElement>}>
 {children}
 </a>
 )
 }

 return (
 <button className={combinedClasses} ref={ref as React.Ref<HTMLButtonElement>} {...props}>
 {children}
 </button>
 )
 }
)

BaseButton.displayName = 'BaseButton'
export default BaseButton
