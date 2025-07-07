import Image from 'next/image'
import { StarIcon, CheckCircleIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { businessInfo, testimonials } from '@/data/business'
import FadeInWhenVisible from '@/components/ui/FadeInWhenVisible'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const credentials = [
  {
    title: 'Gas Safe Registered',
    description: 'All our engineers are Gas Safe registered, ensuring legal compliance and safety standards.',
    icon: ShieldCheckIcon,
    image: '/images/009_power-flushing_medium_orig_orig_gas_safe_logo.jpg',
    highlight: true
  },
  {
    title: 'Worcester Bosch Silver Installers',
    description: 'Accredited Silver Installer status with access to extended warranties and training.',
    icon: AcademicCapIcon,
    image: '/images/019_worcester-bosch_orig_which__best_buy_banner__trade_f01b75980b6f66ae04546dcf2b3daf8e.jpg',
    highlight: true
  },
  {
    title: 'G3 Qualified Engineers',
    description: 'Certified for unvented hot water cylinder installation and maintenance.',
    icon: CheckCircleIcon,
    image: '/images/021_unvented-systems_medium_img004.jpg',
    highlight: false
  },
  {
    title: 'Kamco Certified',
    description: 'Trained in professional power flushing techniques and equipment.',
    icon: CheckCircleIcon,
    image: '/images/001_power-flushing_header_header.jpg',
    highlight: false
  }
]

const stats = [
  { name: 'Years Experience', value: `${new Date().getFullYear() - parseInt(businessInfo.established)}+` },
  { name: 'Service Areas', value: `${businessInfo.serviceAreas.length}+` },
  { name: 'Emergency Response', value: '24/7' },
  { name: 'Customer Rating', value: '5.0★' },
]

export default function TrustSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Arty Group?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Family-run plumbing and heating specialists serving Sittingbourne and Kent since {businessInfo.established}. 
            Our Gas Safe registered engineers deliver professional, reliable services with full qualifications and insurance.
          </p>
        </div>

        {/* Stats */}
        <FadeInWhenVisible direction="up" delay={0.2}>
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeInWhenVisible key={stat.name} direction="up" delay={0.1 * index}>
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-tight text-primary-600 sm:text-5xl">
                    {stat.name === 'Years Experience' ? (
                      <AnimatedCounter value={new Date().getFullYear() - parseInt(businessInfo.established)} suffix="+" />
                    ) : stat.name === 'Service Areas' ? (
                      <AnimatedCounter value={businessInfo.serviceAreas.length} suffix="+" />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-600">
                    {stat.name}
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Credentials Grid */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {credentials.map((credential) => {
            const IconComponent = credential.icon
            return (
              <div
                key={credential.title}
                className={`relative overflow-hidden rounded-2xl p-8 ${
                  credential.highlight 
                    ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 rounded-lg p-3 ${
                    credential.highlight ? 'bg-white/20' : 'bg-primary-100'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      credential.highlight ? 'text-white' : 'text-primary-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${
                      credential.highlight ? 'text-white' : 'text-gray-900'
                    }`}>
                      {credential.title}
                    </h3>
                    <p className={`mt-2 text-sm ${
                      credential.highlight ? 'text-primary-100' : 'text-gray-600'
                    }`}>
                      {credential.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={credential.image}
                      alt={credential.title}
                      width={80}
                      height={60}
                      className="rounded-lg bg-white p-2 object-contain"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            What Our Customers Say
          </h3>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Review */}
                <blockquote className="mt-4 text-gray-700">
                  "{testimonial.review}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary-600">{testimonial.service}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('en-GB', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Family Business Story */}
        <div className="mt-24 bg-white rounded-2xl p-8 lg:p-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Family Business Since {businessInfo.established}
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Arty Group was founded in {businessInfo.established} as a family-run business committed to providing 
                professional plumbing and heating services throughout Sittingbourne and Kent. We've built our 
                reputation on reliability, quality workmanship, and genuine care for our customers.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Family-owned and operated since {businessInfo.established}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Serving {businessInfo.serviceAreas.join(', ')} and surrounding areas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Expanding into renewable energy solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Not tied to any single manufacturer</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <div className="relative">
                <Image
                  src="/images/017_home_IMG_45361_Moment.jpg"
                  alt="Arty Group professional plumbing and heating services"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}