import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import { businessInfo } from '@/data/business'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} - Professional Plumber in Sittingbourne | Gas Safe Registered Engineers`,
    template: `%s | ${businessInfo.name} - Sittingbourne Plumbing & Heating`
  },
  description: `Professional plumber in Sittingbourne with Gas Safe registered engineers. Worcester Bosch Silver Installers offering boiler installation, emergency plumbing, power flushing and heating services throughout Kent. Family business since ${businessInfo.established}.`,
  keywords: [
    'plumber Sittingbourne',
    'boiler installation Sittingbourne', 
    'emergency plumber Sittingbourne',
    'heating engineer Sittingbourne',
    'Gas Safe registered',
    'Worcester Bosch',
    'power flushing Kent',
    'central heating Sittingbourne'
  ],
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.artygroup.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${businessInfo.name} - Professional Plumber in Sittingbourne`,
    description: `Gas Safe registered plumbers serving Sittingbourne, Iwade and Kent since ${businessInfo.established}. Worcester Bosch Silver Installers with 24/7 emergency services.`,
    url: 'https://www.artygroup.co.uk',
    siteName: businessInfo.name,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/017_home_IMG_45361_Moment.jpg',
        width: 1440,
        height: 1080,
        alt: `${businessInfo.name} - Professional Plumbing and Heating Services`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} - Professional Plumber in Sittingbourne`,
    description: `Gas Safe registered plumbers serving Sittingbourne and Kent since ${businessInfo.established}`,
    images: ['/images/017_home_IMG_45361_Moment.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.artygroup.co.uk",
              "name": businessInfo.name,
              "image": "https://www.artygroup.co.uk/images/017_home_IMG_45361_Moment.jpg",
              "description": `Professional plumber in Sittingbourne with Gas Safe registered engineers. Worcester Bosch Silver Installers serving ${businessInfo.serviceAreas.join(', ')}.`,
              "telephone": businessInfo.phone,
              "email": businessInfo.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": businessInfo.address.street,
                "addressLocality": businessInfo.address.city,
                "postalCode": businessInfo.address.postcode,
                "addressRegion": businessInfo.address.county,
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.3556",
                "longitude": "0.8134"
              },
              "url": "https://www.artygroup.co.uk",
              "logo": "https://www.artygroup.co.uk/images/009_power-flushing_medium_orig_orig_gas_safe_logo.jpg",
              "priceRange": "££",
              "foundingDate": businessInfo.established,
              "areaServed": businessInfo.serviceAreas.map(area => ({
                "@type": "City",
                "name": area
              })),
              "serviceType": [
                "Plumbing Services",
                "Boiler Installation", 
                "Central Heating",
                "Emergency Plumbing",
                "Power Flushing",
                "Gas Safety Certificates"
              ],
              "hasCredential": businessInfo.credentials,
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": ["Saturday"],
                  "opens": "08:00",
                  "closes": "16:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday"],
                  "opens": "09:00", 
                  "closes": "17:00"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": businessInfo.phone,
                "contactType": "customer service",
                "availableLanguage": "English",
                "areaServed": "GB"
              }
            })
          }}
        />
      </body>
    </html>
  )
}