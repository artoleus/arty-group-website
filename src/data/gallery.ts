import { GalleryImage } from '@/lib/types';

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/023_gallery_IMG_2502_34.jpg',
    alt: 'Unvented cylinder installation by Arty Group',
    category: 'heating',
    title: 'Unvented Cylinder Installation',
    description: 'Professional unvented cylinder installation providing high-pressure hot water throughout the home'
  },
  {
    id: '2',
    src: '/images/024_gallery_IMG_2662_597.jpg',
    alt: 'Boiler installation work by Gas Safe engineers',
    category: 'boiler',
    title: 'Worcester Bosch Boiler Installation',
    description: 'New Worcester Bosch boiler installation with extended warranty by our Silver Installers'
  },
  {
    id: '3',
    src: '/images/025_gallery_IMG_2661.JPG',
    alt: 'Central heating system installation',
    category: 'heating',
    title: 'Central Heating System',
    description: 'Complete central heating system installation with modern controls and efficient radiators'
  },
  {
    id: '4',
    src: '/images/026_gallery_IMG_2658.JPG',
    alt: 'Professional plumbing installation work',
    category: 'plumbing',
    title: 'Professional Plumbing Work',
    description: 'High-quality plumbing installation demonstrating our attention to detail and professional standards'
  },
  {
    id: '5',
    src: '/images/027_gallery_IMG_1850.JPG',
    alt: 'Heating system maintenance and repair',
    category: 'heating',
    title: 'Heating System Maintenance',
    description: 'Regular maintenance and repair work ensuring optimal heating system performance'
  },
  {
    id: '6',
    src: '/images/028_gallery_IMG_3982_130.jpg',
    alt: 'Emergency plumbing repair service',
    category: 'emergency',
    title: 'Emergency Plumbing Repair',
    description: '24/7 emergency plumbing services with rapid response throughout Sittingbourne and Kent'
  },
  {
    id: '7',
    src: '/images/029_gallery_IMG_3454_434.jpg',
    alt: 'Boiler replacement and upgrade service',
    category: 'boiler',
    title: 'Boiler Replacement Service',
    description: 'Complete boiler replacement with upgraded efficiency and modern controls'
  },
  {
    id: '8',
    src: '/images/030_gallery_IMG_1908_796.jpg',
    alt: 'Central heating installation project',
    category: 'heating',
    title: 'Central Heating Project',
    description: 'Full central heating installation project completed to the highest standards'
  },
  {
    id: '9',
    src: '/images/031_gallery_IMG_45361_Moment.jpg',
    alt: 'Professional heating and plumbing work',
    category: 'heating',
    title: 'Professional Installation',
    description: 'Professional heating and plumbing installation showcasing our expert workmanship'
  }
];

export const galleryCategories = [
  { id: 'all', name: 'All Work', count: galleryImages.length },
  { id: 'boiler', name: 'Boiler Installation', count: galleryImages.filter(img => img.category === 'boiler').length },
  { id: 'heating', name: 'Central Heating', count: galleryImages.filter(img => img.category === 'heating').length },
  { id: 'plumbing', name: 'Plumbing Services', count: galleryImages.filter(img => img.category === 'plumbing').length },
  { id: 'emergency', name: 'Emergency Work', count: galleryImages.filter(img => img.category === 'emergency').length },
];