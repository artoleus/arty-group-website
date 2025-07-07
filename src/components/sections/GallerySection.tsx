'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { galleryImages, galleryCategories } from '@/data/gallery'

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const currentIndex = selectedImage
    let newIndex: number
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }
    
    setSelectedImage(newIndex)
  }

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Professional Work
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See examples of our high-quality plumbing and heating installations throughout 
            Sittingbourne and Kent. From boiler installations to emergency repairs, 
            every project demonstrates our professional standards.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">
                    {image.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-200">
                    {image.description}
                  </p>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white">
                  {galleryCategories.find(cat => cat.id === image.category)?.name.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-gray-500">No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <Transition appear show={selectedImage !== null} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-4xl">
                  {selectedImage !== null && (
                    <>
                      {/* Close Button */}
                      <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>

                      {/* Navigation Buttons */}
                      <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeftIcon className="h-6 w-6" />
                      </button>
                      
                      <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
                      >
                        <ChevronRightIcon className="h-6 w-6" />
                      </button>

                      {/* Image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                        <Image
                          src={filteredImages[selectedImage].src}
                          alt={filteredImages[selectedImage].alt}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Image Info */}
                      <div className="mt-4 rounded-lg bg-white p-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {filteredImages[selectedImage].title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {filteredImages[selectedImage].description}
                        </p>
                        <div className="mt-2">
                          <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800">
                            {galleryCategories.find(cat => cat.id === filteredImages[selectedImage].category)?.name}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  )
}