import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import ContactForm from '@/components/forms/ContactForm'
import { businessInfo } from '@/data/business'

const openingHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Emergency Service', hours: '24/7 Available' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Need a quote or have an emergency? Contact our Gas Safe registered engineers today. 
            We're here to help with all your plumbing and heating requirements.
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div>
            {/* Emergency Call-to-Action */}
            <div className="rounded-2xl bg-red-600 p-8 text-white mb-8">
              <h3 className="text-xl font-bold">Emergency Service Available 24/7</h3>
              <p className="mt-2 text-red-100">
                Boiler breakdown, burst pipe, or heating failure? Call us now for immediate assistance.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center space-x-3 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors"
                >
                  <PhoneIcon className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Emergency Line</div>
                    <div className="text-lg">{businessInfo.phone}</div>
                  </div>
                </a>
                <a
                  href={`tel:${businessInfo.mobile}`}
                  className="flex items-center space-x-3 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors"
                >
                  <PhoneIcon className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Mobile</div>
                    <div className="text-lg">{businessInfo.mobile}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="h-6 w-6 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Location</h4>
                  <p className="mt-1 text-gray-600">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.city}<br />
                    {businessInfo.address.postcode}<br />
                    {businessInfo.address.county}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ClockIcon className="h-6 w-6 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Opening Hours</h4>
                  <div className="mt-1 space-y-1">
                    {openingHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between text-sm">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className={schedule.day === 'Emergency Service' ? 'text-red-600 font-medium' : 'text-gray-900'}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {businessInfo.email && (
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="mt-1 text-primary-600 hover:text-primary-500 transition-colors"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas */}
            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Areas We Serve</h4>
              <div className="grid grid-cols-2 gap-2">
                {businessInfo.serviceAreas.map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Can't see your area? Contact us anyway - we may be able to help or recommend a trusted partner.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Request a Quote or Service
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h4 className="mt-4 text-lg font-medium text-gray-600">Interactive Map</h4>
              <p className="mt-2 text-sm text-gray-500">
                Google Maps integration would be placed here<br />
                showing our location in Iwade, Sittingbourne
              </p>
              <div className="mt-4">
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    `${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.postcode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-100 hover:bg-primary-200 transition-colors"
                >
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}