'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

const galleryImages = [
  {
    id: 'img-1',
    title: 'Ganado en Pastoreo',
    description: 'Vacas Black Hereford en el Desierto de San Rafael',
    image: 'http://www.jobulls.com/wp-content/uploads/2011/04/BLM-Cows.jpg',
  },
  {
    id: 'img-2',
    title: 'Movimiento en Foresta',
    description: 'Arreo hacia las montañas de Manti-La Sal',
    image: 'http://www.jobulls.com/wp-content/uploads/2011/04/Dugway-Cattle.jpg',
  },
  {
    id: 'img-3',
    title: 'Genética Donante',
    description: 'Vaca donante D1 - Línea Premium',
    image: 'http://www.jobulls.com/wp-content/uploads/2011/04/010-and-Udder.jpg',
  },
  {
    id: 'img-4',
    title: 'Excelencia Materna',
    description: 'Vaca 9405 a los 10 años - Habilidad probada',
    image: 'http://www.jobulls.com/wp-content/uploads/2011/04/405-and-Udder.jpg',
  },
  {
    id: 'img-5',
    title: 'Catálogo Oficial',
    description: 'Publicación Otoño 2016',
    image: 'http://www.jobulls.com/wp-content/uploads/2011/04/JOBULL-qt-FALL161.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => setIsOpen(false)

  const goNext = () => setCurrentIndex((current) => (current + 1) % galleryImages.length)
  const goPrev = () => setCurrentIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)

  return (
    <section className="bg-body-cream py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Nuestro Ganado</p>
          <h2 className="section-heading max-w-2xl mb-6">
            Jo Bulls en Acción
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl leading-relaxed">
            Galería fotográfica del rancho. Conoce a los Herefords Negros que prospera en los ambientes más extremos de Utah.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-zoom-in"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-hero-green via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="font-serif text-lg font-bold text-body-cream mb-2">
                  {img.title}
                </h3>
                <p className="font-sans text-sm text-white/80">
                  {img.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ImageLightbox
          images={galleryImages}
          isOpen={isOpen}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
          onSelect={setCurrentIndex}
        />

        {/* Info bar */}
        <div className="mt-16 border-t border-border-light pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-serif text-2xl font-bold text-hero-green mb-2">30+</p>
              <p className="font-sans text-sm text-muted">
                Años de genética refinada y selección en campo.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-hero-green mb-2">10,600 ft</p>
              <p className="font-sans text-sm text-muted">
                Elevación máxima en pastoreo de verano.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-hero-green mb-2">25 mi</p>
              <p className="font-sans text-sm text-muted">
                Recorrido trimestral de traslado a pastoreo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
