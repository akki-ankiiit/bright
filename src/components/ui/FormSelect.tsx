import React, { forwardRef } from 'react'

interface Option {
 label: string
 value: string | number
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
 label: string
 options: Option[]
 error?: string
 placeholder?: string
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
 ({ label, options, error, placeholder = 'Select an option', className = '', id, ...props }, ref) => {
 const selectId = id || props.name
 
 return (
 <div className="flex flex-col gap-1 w-full mb-4">
 {label && (
 <label htmlFor={selectId} className="block text-[13px] font-semibold text-brand-text mb-1.5">
 {label}
 </label>
 )}
 <select
 id={selectId}
 ref={ref}
 className={`w-full px-4 py-3 rounded-md border text-[14px] font-normal transition-all duration-300 outline-none appearance-none bg-white
 ${error 
 ? 'border-brand-error focus:border-brand-error focus:ring-4 focus:ring-brand-error/10' 
 : 'border-brand-border focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/10'
 }
 ${className}
 `}
 {...props}
 >
 <option value="" disabled>{placeholder}</option>
 {options.map((option) => (
 <option key={option.value} value={option.value}>
 {option.label}
 </option>
 ))}
 </select>
 {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
 </div>
 )
 }
)

FormSelect.displayName = 'FormSelect'

export default FormSelect
