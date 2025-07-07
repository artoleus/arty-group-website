import { BusinessInfo, Service, Testimonial } from '@/lib/types';

export const businessInfo: BusinessInfo = {
  name: 'Arty Group',
  phone: '01795 478877',
  mobile: '07886 943553',
  email: 'info@artygroup.co.uk',
  address: {
    street: 'Wigeon Road',
    city: 'Iwade, Sittingbourne',
    postcode: 'ME9 8WQ',
    county: 'Kent'
  },
  serviceAreas: [
    'Sittingbourne',
    'Iwade', 
    'Faversham',
    'Maidstone',
    'Kent',
    'Medway'
  ],
  established: '2008',
  credentials: [
    'Gas Safe Registered Engineers',
    'Worcester Bosch Silver Installers (WRI)',
    'G3 Qualified for Unvented Systems',
    'Kamco Certified Power Flushing',
    'Family Business Since 2008',
    'Fully Insured & Qualified'
  ]
};

export const services: Service[] = [
  {
    id: 'boiler-installation',
    title: 'Boiler Installation & Replacement',
    description: 'Professional boiler installation services throughout Sittingbourne and Kent. As Worcester Bosch Silver Installers, we offer extended warranties and expert installation of high-efficiency boilers.',
    shortDescription: 'Worcester Bosch specialist boiler installations with extended warranties',
    features: [
      'Worcester Bosch Silver Installer status',
      'Extended warranties available',
      'A-rated energy efficient boilers',
      'Combi, system and regular boilers',
      'Free quotes and consultations',
      'Professional installation team'
    ],
    keywords: ['boiler installation Sittingbourne', 'Worcester boiler installation Kent', 'new boiler Sittingbourne'],
    image: '/images/019_worcester-bosch_orig_which__best_buy_banner__trade_f01b75980b6f66ae04546dcf2b3daf8e.jpg'
  },
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing Services',
    description: '24/7 emergency plumbing services for urgent repairs throughout Sittingbourne and surrounding areas. Our Gas Safe registered engineers are available for call-outs.',
    shortDescription: '24/7 emergency plumbing and heating repairs',
    features: [
      '24/7 emergency callouts',
      'Gas Safe registered engineers',
      'Rapid response times',
      'Boiler breakdowns',
      'Heating system failures',
      'Burst pipes and leaks'
    ],
    keywords: ['emergency plumber Sittingbourne', '24/7 plumber Kent', 'emergency heating repair'],
    image: '/images/017_home_IMG_45361_Moment.jpg'
  },
  {
    id: 'power-flushing',
    title: 'Power Flushing Services',
    description: 'Professional power flushing services starting from £295 for a standard 3-bedroom house. Our Kamco-trained engineers restore heating system efficiency.',
    shortDescription: 'Restore heating efficiency with professional power flushing',
    features: [
      'Kamco certified engineers',
      'Starting from £295',
      'Removes sludge and debris',
      'Improves boiler efficiency',
      'Reduces heating bills',
      'Essential before new boiler installation'
    ],
    pricing: {
      from: '£295',
      description: 'Starting price for 3-bedroom house (approx. 7 radiators)'
    },
    keywords: ['power flushing Sittingbourne', 'heating system cleaning Kent', 'radiator power flush'],
    image: '/images/001_power-flushing_header_header.jpg'
  },
  {
    id: 'gas-certificates',
    title: 'Gas Safety Certificates',
    description: 'CP12 landlord gas safety certificates and general gas safety inspections. Essential for landlords and homeowners throughout Kent.',
    shortDescription: 'CP12 landlord certificates and gas safety inspections',
    features: [
      'CP12 landlord certificates',
      'Gas safety inspections',
      'Legally compliant certificates',
      'Experienced Gas Safe engineers',
      'Competitive pricing',
      'Quick turnaround'
    ],
    keywords: ['gas safety certificate Sittingbourne', 'CP12 certificate Kent', 'landlord gas safety'],
    image: '/images/009_power-flushing_medium_orig_orig_gas_safe_logo.jpg'
  },
  {
    id: 'central-heating',
    title: 'Central Heating Systems',
    description: 'Complete central heating system installation, repairs and maintenance. From radiators to heating controls, we handle all aspects of your heating system.',
    shortDescription: 'Complete heating system solutions and radiator services',
    features: [
      'Full heating system installation',
      'Radiator installation and replacement',
      'Heating controls and thermostats',
      'System repairs and maintenance',
      'Energy efficient upgrades',
      'Smart heating controls (Nest, Hive)'
    ],
    keywords: ['central heating Sittingbourne', 'heating engineer Kent', 'radiator installation'],
    image: '/images/018_home_medium_shutterstock_4150906.jpg'
  },
  {
    id: 'unvented-cylinders',
    title: 'Unvented Hot Water Cylinders',
    description: 'G3 qualified installation of unvented hot water cylinders. High-pressure hot water throughout your home with space-saving benefits.',
    shortDescription: 'G3 qualified unvented cylinder installation and maintenance',
    features: [
      'G3 qualified engineers',
      'High pressure hot water',
      'Space saving design',
      'Mains fed system',
      'No header tanks required',
      'Improved water hygiene'
    ],
    keywords: ['unvented cylinder Sittingbourne', 'G3 installation Kent', 'hot water cylinder'],
    image: '/images/021_unvented-systems_medium_img004.jpg'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Sittingbourne',
    rating: 5,
    review: 'Excellent service from Arty Group. They installed our new Worcester Bosch boiler quickly and professionally. The extended warranty gives us great peace of mind.',
    service: 'Boiler Installation',
    date: '2024-11-15'
  },
  {
    id: '2', 
    name: 'Mike Thompson',
    location: 'Iwade',
    rating: 5,
    review: 'Called them out for an emergency boiler breakdown on a Sunday. They responded quickly and had us back up and running the same day. Highly recommended!',
    service: 'Emergency Repair',
    date: '2024-10-28'
  },
  {
    id: '3',
    name: 'Lisa Davies',
    location: 'Faversham', 
    rating: 5,
    review: 'The power flushing service made a huge difference to our heating system. Much more efficient now and the house heats up so much faster.',
    service: 'Power Flushing',
    date: '2024-09-12'
  }
];