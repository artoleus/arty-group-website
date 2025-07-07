import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { services, businessInfo } from '@/data/business'
import FadeInWhenVisible from '@/components/ui/FadeInWhenVisible'
import FloatingElements from '@/components/ui/FloatingElements'

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <FloatingElements />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Plumbing & Heating Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Gas Safe registered engineers providing comprehensive plumbing and heating solutions 
              throughout Sittingbourne and Kent. Worcester Bosch Silver Installers with extended warranties.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeInWhenVisible key={service.id} direction="up" delay={0.1 * index}>
              <article
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 h-[500px] group hover:scale-105 transition-transform duration-300"
              >
              {/* Background Image */}
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="absolute inset-0 -z-10 object-cover"
                />
              )}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              {/* Content */}
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {service.pricing && (
                  <span className="inline-flex items-center rounded-md bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                    From {service.pricing.from}
                  </span>
                )}
                {service.keywords.slice(0, 1).map((keyword) => (
                  <span key={keyword} className="ml-auto text-xs text-gray-400">
                    {keyword.split(' ').slice(-1)[0]}
                  </span>
                ))}
              </div>
              
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={`/services/${service.id}`}>
                  <span className="absolute inset-0" />
                  {service.title}
                </Link>
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-gray-300">
                {service.shortDescription}
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-1">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="text-xs text-gray-400 flex items-center">
                    <ArrowRightIcon className="h-3 w-3 mr-1 text-primary-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-x-3">
                <Link
                  href={`/services/${service.id}`}
                  className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
                >
                  Learn More
                </Link>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center space-x-1"
                >
                  <PhoneIcon className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </div>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Emergency Service CTA */}
        <FadeInWhenVisible direction="up" delay={0.3}>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-primary-600 p-8 text-center lg:max-w-4xl shadow-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Emergency Plumbing Service Available 24/7
          </h3>
          <p className="mt-4 text-lg leading-8 text-primary-100">
            Boiler breakdown? Burst pipe? Heating failure? Our Gas Safe registered engineers 
            are available around the clock for emergency callouts throughout Kent.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-lg font-semibold text-red-600 shadow-sm hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Emergency: {businessInfo.phone}
            </a>
            <a
              href={`tel:${businessInfo.mobile}`}
              className="inline-flex items-center rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Mobile: {businessInfo.mobile}
            </a>
          </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}