import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import GallerySection from '@/components/sections/GallerySection'
import TrustSection from '@/components/sections/TrustSection'
import ContactSection from '@/components/sections/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Plumber in Sittingbourne | Gas Safe Registered Engineers',
  description: 'Professional plumber in Sittingbourne with Gas Safe registered engineers. Worcester Bosch Silver Installers offering boiler installation, emergency plumbing, power flushing and heating services throughout Kent.',
  keywords: [
    'plumber Sittingbourne',
    'boiler installation Sittingbourne',
    'emergency plumber Sittingbourne', 
    'heating engineer Sittingbourne',
    'Gas Safe registered Sittingbourne',
    'Worcester Bosch Sittingbourne',
    'power flushing Kent',
    'central heating Sittingbourne',
    'plumber Iwade',
    'plumber Kent'
  ],
  openGraph: {
    title: 'Professional Plumber in Sittingbourne | Arty Group',
    description: 'Gas Safe registered plumbers serving Sittingbourne, Iwade and Kent since 2008. Worcester Bosch Silver Installers with 24/7 emergency services.',
    images: [
      {
        url: '/images/017_home_IMG_45361_Moment.jpg',
        width: 1440,
        height: 1080,
        alt: 'Arty Group - Professional Plumbing and Heating Services'
      }
    ]
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TrustSection />
      <ContactSection />
    </>
  )
}