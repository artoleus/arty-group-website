import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { businessInfo, services } from '@/data/business'

const serviceLinks = services.slice(0, 6).map(service => ({
  name: service.title,
  href: `/services/${service.id}`
}))

const areaLinks = businessInfo.serviceAreas.slice(0, 6).map(area => ({
  name: `${area} Plumber`,
  href: `/#areas`
}))

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <Image
                className="h-16 w-auto"
                src="/images/007_power-flushing_54ec8fedc5c550_0_283_163-283x163.png"
                alt={`${businessInfo.name} Logo`}
                width={283}
                height={163}
              />
              <div>
                <div className="text-sm text-gray-300 font-medium">Gas Safe Registered Engineers</div>
                <div className="text-xs text-gray-400">Family Business Since {businessInfo.established}</div>
              </div>
            </div>
            
            <p className="text-sm leading-6 text-gray-300">
              Professional plumbing and heating services throughout Sittingbourne and Kent. 
              Gas Safe registered engineers with Worcester Bosch Silver Installer status.
            </p>
            
            {/* Contact details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-semibold">Emergency Service:</div>
                  <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                    {businessInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-semibold">Mobile:</div>
                  <a href={`tel:${businessInfo.mobile}`} className="hover:text-white transition-colors">
                    {businessInfo.mobile}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPinIcon className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="font-semibold">Address:</div>
                  <div>
                    {businessInfo.address.street}<br />
                    {businessInfo.address.city}<br />
                    {businessInfo.address.postcode}
                  </div>
                </div>
              </div>
              
              {businessInfo.email && (
                <div className="flex items-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-semibold">Email:</div>
                    <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Credentials */}
            <div className="flex items-center space-x-4">
              <Image
                src="/images/009_power-flushing_medium_orig_orig_gas_safe_logo.jpg"
                alt="Gas Safe Registered"
                width={80}
                height={80}
                className="bg-white p-2 rounded"
              />
              <Image
                src="/images/019_worcester-bosch_orig_which__best_buy_banner__trade_f01b75980b6f66ae04546dcf2b3daf8e.jpg"
                alt="Worcester Bosch Silver Installer"
                width={120}
                height={60}
                className="bg-white p-2 rounded"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {serviceLinks.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Service Areas</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {areaLinks.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/#about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#gallery" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/quote" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Free Quote
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Emergency</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/emergency" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      24/7 Emergency Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-plumbing" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Emergency Plumber
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/boiler-installation" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Boiler Breakdown
                    </Link>
                  </li>
                  <li>
                    <a href={`tel:${businessInfo.phone}`} className="text-sm leading-6 text-red-400 hover:text-red-300 font-semibold transition-colors">
                      Call {businessInfo.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-center">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {currentYear} {businessInfo.name}. All rights reserved.
              <span className="block sm:inline sm:ml-1">
                Gas Safe Registered | Worcester Bosch Silver Installers | Fully Insured
              </span>
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Professional plumbing and heating services in Sittingbourne, Iwade, Faversham, Maidstone and throughout Kent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}