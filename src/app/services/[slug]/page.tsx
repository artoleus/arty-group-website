import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { services, businessInfo } from '@/data/business'
import ContactForm from '@/components/forms/ContactForm'
import type { Metadata } from 'next'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  
  if (!service) {
    return {
      title: 'Service Not Found'
    }
  }

  return {
    title: `${service.title} | ${businessInfo.name} - Sittingbourne`,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | ${businessInfo.name}`,
      description: service.description,
      url: `https://www.artygroup.co.uk/services/${service.id}`,
      images: service.image ? [
        {
          url: service.image,
          alt: service.title
        }
      ] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${businessInfo.name}`,
      description: service.description,
      images: service.image ? [service.image] : []
    }
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-20 pb-16">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link 
            href="/#services" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                {service.description}
              </p>
              
              {service.pricing && (
                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-800">
                      From {service.pricing.from}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-green-700">
                    {service.pricing.description}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="btn-emergency flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Emergency: {businessInfo.phone}</span>
                </a>
                <a
                  href={`tel:${businessInfo.mobile}`}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Quote: {businessInfo.mobile}</span>
                </a>
              </div>
            </div>

            {service.image && (
              <div className="mt-12 lg:mt-0">
                <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            What's Included
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Request {service.title}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Structured Data for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": businessInfo.name,
              "telephone": businessInfo.phone,
              "email": businessInfo.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": businessInfo.address.street,
                "addressLocality": businessInfo.address.city,
                "postalCode": businessInfo.address.postcode,
                "addressRegion": businessInfo.address.county,
                "addressCountry": "GB"
              }
            },
            "areaServed": businessInfo.serviceAreas.map(area => ({
              "@type": "City",
              "name": area
            })),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": service.title,
              "itemListElement": service.features.map((feature, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": feature
                }
              }))
            },
            "offers": service.pricing ? {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "price": service.pricing.from.replace(/[£,]/g, ''),
              "description": service.pricing.description
            } : undefined,
            "image": service.image,
            "url": `https://www.artygroup.co.uk/services/${service.id}`
          })
        }}
      />
    </div>
  )
}