import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  emergency: z.boolean().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const serviceOptions = [
  { value: 'boiler-installation', label: 'Boiler Installation' },
  { value: 'emergency-plumbing', label: 'Emergency Plumbing' },
  { value: 'power-flushing', label: 'Power Flushing' },
  { value: 'gas-certificates', label: 'Gas Safety Certificates' },
  { value: 'central-heating', label: 'Central Heating' },
  { value: 'unvented-cylinders', label: 'Unvented Cylinders' },
  { value: 'general-plumbing', label: 'General Plumbing' },
  { value: 'maintenance', label: 'Maintenance & Repairs' },
  { value: 'other', label: 'Other Service' },
]