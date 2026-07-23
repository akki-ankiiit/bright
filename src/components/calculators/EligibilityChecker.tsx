import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Modal from '../ui/Modal'
import FormInput from '../ui/FormInput'
import FormSelect from '../ui/FormSelect'
import BaseButton from '../ui/BaseButton'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const schema = z.object({
 roofArea: z.coerce.number().min(50, 'Minimum 50 sq.ft required').max(10000, 'Please enter a valid area'),
 monthlyBill: z.coerce.number().min(500, 'Minimum bill amount should be 500').max(100000, 'Please enter a valid amount'),
 location: z.string().min(1, 'Please select your state'),
 roofCondition: z.string().min(1, 'Please select roof condition'),
 shading: z.string().min(1, 'Please select shading status')
})

type EligibilityFormData = z.infer<typeof schema>

interface EligibilityCheckerProps {
 isOpen: boolean
 onClose: () => void
}

export default function EligibilityChecker({ isOpen, onClose }: EligibilityCheckerProps) {
 const [isEligible, setIsEligible] = useState<boolean | null>(null)
 const [result, setResult] = useState<any>(null)
 const [isSubmitting, setIsSubmitting] = useState(false)

 const { register, handleSubmit, formState: { errors }, reset } = useForm<any>({
 resolver: zodResolver(schema)
 })

 const calculateEligibility = (values: EligibilityFormData) => {
 // Simple mock logic for eligibility
 const eligible = values.roofArea >= 100 && values.roofCondition !== 'Poor' && values.shading !== 'Heavy'
 setIsEligible(eligible)
 
 if (eligible) {
 let capacity = 1
 if (values.monthlyBill > 3000) capacity = 3
 else if (values.monthlyBill > 1500) capacity = 2
 
 setResult({
 capacity,
 subsidy: capacity * 30000, // mock calculation
 savings: values.monthlyBill * 0.8 * 12 // mock annual savings
 })
 }
 }

 const onSubmit = async (values: any) => {
 setIsSubmitting(true)
 // Simulate API call
 await new Promise(resolve => setTimeout(resolve, 1000))
 calculateEligibility(values as EligibilityFormData)
 setIsSubmitting(false)
 }

 const handleClose = () => {
 reset()
 setIsEligible(null)
 setResult(null)
 onClose()
 }

 const states = [
 { label: 'Maharashtra', value: 'MH' },
 { label: 'Gujarat', value: 'GJ' },
 { label: 'Karnataka', value: 'KA' },
 { label: 'Delhi', value: 'DL' },
 { label: 'Tamil Nadu', value: 'TN' },
 { label: 'Uttar Pradesh', value: 'UP' },
 ]
 
 const roofConditions = [
 { label: 'Good (Concrete/RCC)', value: 'Good' },
 { label: 'Fair (Shed/Tin)', value: 'Fair' },
 { label: 'Poor (Needs repair)', value: 'Poor' },
 ]
 
 const shadingOptions = [
 { label: 'No Shading (Full Sun)', value: 'None' },
 { label: 'Partial Shading (Trees/Buildings)', value: 'Partial' },
 { label: 'Heavy Shading', value: 'Heavy' },
 ]

 return (
 <Modal isOpen={isOpen} onClose={handleClose} title="Check Your Eligibility" maxWidth="sm:max-w-2xl">
 {isEligible === null ? (
 <div>
 <p className="text-sm text-brand-text-secondary mb-6">
 Fill out this quick form to see if your home qualifies for the PM SuryaGhar Yojana subsidy and find out how much you can save.
 </p>
 
 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <FormInput
 label="Available Roof Area (sq. ft.)"
 placeholder="e.g. 500"
 type="number"
 {...register('roofArea')}
 error={errors.roofArea?.message as string}
 />
 <FormInput
 label="Average Monthly Bill (₹)"
 placeholder="e.g. 2000"
 type="number"
 {...register('monthlyBill')}
 error={errors.monthlyBill?.message as string}
 />
 <FormSelect
 label="State/Location"
 options={states}
 {...register('location')}
 error={errors.location?.message as string}
 />
 <FormSelect
 label="Roof Condition"
 options={roofConditions}
 {...register('roofCondition')}
 error={errors.roofCondition?.message as string}
 />
 </div>
 <FormSelect
 label="Is there any shadow on the roof?"
 options={shadingOptions}
 {...register('shading')}
 error={errors.shading?.message as string}
 />
 
 <div className="mt-8 flex justify-end gap-3">
 <BaseButton variant="text" type="button" onClick={handleClose}>
 Cancel
 </BaseButton>
 <BaseButton type="submit" disabled={isSubmitting}>
 {isSubmitting ? 'Checking...' : 'Check Eligibility'}
 </BaseButton>
 </div>
 </form>
 </div>
 ) : isEligible ? (
 <div className="text-center py-8">
 <CheckCircleIcon className="h-16 w-16 text-brand-success mx-auto mb-4" />
 <h3 className="text-2xl font-bold text-brand-navy mb-2">Great News! You are Eligible.</h3>
 <p className="text-brand-text-secondary mb-8">
 Based on your details, your home is perfectly suited for a solar installation under the PM SuryaGhar Yojana.
 </p>
 
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
 <div className="bg-brand-bg p-4 rounded-xl border border-brand-border">
 <p className="text-sm text-brand-text-secondary mb-1">Recommended System</p>
 <p className="text-xl font-bold text-brand-primary">{result?.capacity} kW</p>
 </div>
 <div className="bg-brand-bg p-4 rounded-xl border border-brand-border">
 <p className="text-sm text-brand-text-secondary mb-1">Estimated Subsidy</p>
 <p className="text-xl font-bold text-brand-primary font-mono">₹{result?.subsidy.toLocaleString()}</p>
 </div>
 <div className="bg-brand-bg p-4 rounded-xl border border-brand-border">
 <p className="text-sm text-brand-text-secondary mb-1">Annual Savings</p>
 <p className="text-xl font-bold text-brand-primary font-mono">₹{result?.savings.toLocaleString()}</p>
 </div>
 </div>
 
 <BaseButton className="w-full sm:w-auto" onClick={handleClose}>
 Get Detailed Quote
 </BaseButton>
 </div>
 ) : (
 <div className="text-center py-8">
 <ExclamationTriangleIcon className="h-16 w-16 text-amber-500 mx-auto mb-4" />
 <h3 className="text-2xl font-bold text-brand-navy mb-2">Eligibility Status</h3>
 <p className="text-brand-text-secondary mb-8">
 Based on the provided details, your roof might need some preparation before installing solar panels, or the shading might significantly impact efficiency.
 </p>
 <BaseButton variant="outline" onClick={handleClose}>
 Speak to an Expert
 </BaseButton>
 </div>
 )}
 </Modal>
 )
}
