'use client'

import Image from 'next/image'
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { businessInfo } from '@/data/business'
import FadeInWhenVisible from '@/components/ui/FadeInWhenVisible'

export default function HeroSection() {
  const handleEmergencyCall = () => {
    window.location.href = `tel:${businessInfo.phone}`
  }

  const handleQuoteCall = () => {
    window.location.href = `tel:${businessInfo.mobile}`
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/017_home_IMG_45361_Moment.jpg"
          alt="Professional plumbing and heating services"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-white/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badges */}
          <motion.div 
            className="flex justify-center items-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-white/20 h-20">
              <Image
                src="/images/009_power-flushing_medium_orig_orig_gas_safe_logo.jpg"
                alt="Gas Safe Registered"
                width={45}
                height={45}
                className="rounded-lg"
              />
              <div>
                <span className="text-sm font-bold text-gray-900">Gas Safe</span>
                <div className="text-xs text-gray-600">Registered</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-white/20 h-20">
              <Image
                src="/images/020_worcester-bosch_mid_5_year_guarantee_and_boiler_0da99c2838f31d78de3d0042cee85d77.jpg"
                alt="Worcester Bosch Silver Installer"
                width={45}
                height={60}
                className="rounded-lg object-contain"
              />
              <div>
                <span className="text-sm font-bold text-gray-900">Worcester Bosch</span>
                <div className="text-xs text-gray-600">Silver Installer</div>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-primary-600">Professional Plumber</span>
            <br />
            <span className="text-gray-800">in Sittingbourne</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600">
              Gas Safe Registered Engineers
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Worcester Bosch Silver Installers serving Sittingbourne, Iwade and Kent since {businessInfo.established}. 
            Family business offering 24/7 emergency plumbing, boiler installation, and heating services.
          </motion.p>

          {/* Key Features */}
          <motion.div 
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 bg-green-50 rounded-lg px-4 py-3">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-blue-50 rounded-lg px-4 py-3">
              <CheckCircleIcon className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Family Business Since {businessInfo.established}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-purple-50 rounded-lg px-4 py-3">
              <CheckCircleIcon className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Extended Warranties</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={handleEmergencyCall}
              className="btn-emergency flex items-center space-x-3 text-lg px-8 py-4 min-w-[300px] justify-center group"
            >
              <PhoneIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-bold">Emergency Service</div>
                <div className="text-sm opacity-90">{businessInfo.phone}</div>
              </div>
            </button>
            
            <button
              onClick={handleQuoteCall}
              className="btn-secondary flex items-center space-x-3 text-lg px-8 py-4 min-w-[300px] justify-center group"
            >
              <PhoneIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-bold">Free Quote</div>
                <div className="text-sm opacity-75 group-hover:opacity-90">{businessInfo.mobile}</div>
              </div>
            </button>
          </div>

          {/* Service Areas */}
          <div className="mt-16">
            <p className="text-sm text-gray-500 mb-4 font-medium">Proudly Serving:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {businessInfo.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-50 to-primary-100 px-4 py-2 text-sm font-semibold text-primary-800 border border-primary-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}