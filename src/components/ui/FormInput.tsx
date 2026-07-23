import React, { forwardRef } from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 label: string
 error?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
 ({ label, error, className = '', id, ...props }, ref) => {
 const inputId = id || props.name
 
 return (
 <div className="flex flex-col gap-1 w-full mb-4">
 {label && (
 <label htmlFor={inputId} className="block text-[13px] font-semibold text-brand-text mb-1.5">
 {label}
 </label>
 )}
 <input
 id={inputId}
 ref={ref}
 className={`w-full px-4 py-3 rounded-md border text-[14px] font-normal transition-all duration-300 outline-none
 ${error 
 ? 'border-brand-error focus:border-brand-error focus:ring-4 focus:ring-brand-error/10' 
 : 'border-brand-border focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/10'
 }
 ${className}
 `}
 {...props}
 />
 {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
 </div>
 )
 }
)

FormInput.displayName = 'FormInput'

export default FormInput
