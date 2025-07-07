'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { businessInfo } from '@/data/business'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'About', href: '/#about' },
  { name: 'Areas', href: '/#areas' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCall = () => {
    window.location.href = `tel:${businessInfo.phone}`
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
            <Image
              className="h-20 w-auto"
              src="/images/ArtyLogo.svg"
              alt={`${businessInfo.name} Logo`}
              width={283}
              height={163}
              priority
            />
            <div className="flex flex-col">
              <span className="text-sm text-gray-600 font-medium">Gas Safe Registered Engineers</span>
              <span className="text-xs text-gray-500">Family Business Since 2008</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Phone CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">Call Now</div>
            <div className="text-xs text-gray-600">24/7 Emergency</div>
          </div>
          <button
            onClick={handleCall}
            className="btn-emergency flex items-center space-x-2"
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="font-semibold">{businessInfo.phone}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <Image
                  className="h-16 w-auto"
                  src="/images/ArtyLogo.svg"
                  alt={`${businessInfo.name} Logo`}
                  width={283}
                  height={163}
                />
                <span className="text-sm text-gray-600 font-medium">Gas Safe Engineers</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="text-center mb-4">
                    <div className="text-lg font-semibold text-gray-900">Emergency Service</div>
                    <div className="text-sm text-gray-600">Available 24/7</div>
                  </div>
                  <button
                    onClick={handleCall}
                    className="btn-emergency w-full flex items-center justify-center space-x-2"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span className="font-semibold">{businessInfo.phone}</span>
                  </button>
                  <button
                    onClick={() => window.location.href = `tel:${businessInfo.mobile}`}
                    className="btn-secondary w-full mt-3 flex items-center justify-center space-x-2"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span className="font-semibold">{businessInfo.mobile}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}