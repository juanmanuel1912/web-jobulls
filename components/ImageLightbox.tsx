'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface Image {
  id: string
  title: string
  description: string
  image: string
}

interface ImageLightboxProps {
  images: Image[]
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onSelect: (index: number) => void
}

export default function ImageLightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelect,
}: ImageLightboxProps) {
  const currentImage = images[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-accent-gold transition-colors z-60"
            aria-label="Cerrar galería"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex flex-col"
          >
            {/* Image container */}
            <div className="relative aspect-video bg-black rounded-sm overflow-hidden mb-6 group">
              <motion.img
                key={currentImage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={currentImage.image}
                alt={currentImage.title}
                className="w-full h-full object-contain"
              />

              {/* Navigation arrows - appear on hover */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onPrev()
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white hover:text-accent-gold transition-all duration-200 p-3 rounded-full opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onNext()
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white hover:text-accent-gold transition-all duration-200 p-3 rounded-full opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Siguiente imagen"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-sm flex items-center gap-2">
                <span className="font-sans text-sm font-semibold">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Image info */}
            <div className="bg-hero-green text-body-cream p-6 rounded-sm mb-6">
              <h3 className="font-serif text-2xl font-bold mb-2">{currentImage.title}</h3>
              <p className="font-sans text-sm text-white/80">{currentImage.description}</p>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={onPrev}
                className="flex items-center gap-2 bg-accent-gold text-hero-green hover:bg-white transition-colors px-5 py-3 rounded-sm font-semibold text-sm"
                aria-label="Imagen anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Anterior
              </button>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-2 flex-1 justify-center">
                {images.map((img, idx) => (
                  <button
                    type="button"
                    key={img.id}
                    onClick={() => onSelect(idx)}
                    className={`relative w-16 h-12 rounded-sm overflow-hidden flex-shrink-0 transition-all ${
                      idx === currentIndex ? 'ring-2 ring-accent-gold' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={onNext}
                className="flex items-center gap-2 bg-accent-gold text-hero-green hover:bg-white transition-colors px-5 py-3 rounded-sm font-semibold text-sm"
                aria-label="Siguiente imagen"
              >
                Siguiente
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
