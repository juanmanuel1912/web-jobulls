'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/LanguageContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export default function SalesPage() {
  const { t } = useLanguage()

  const saleItems = [
    {
      id: 'jb-001',
      name: 'Bullseye D411',
      price: '$2,500',
      image: 'http://www.jobulls.com/wp-content/uploads/2019/07/Bullseye-D411-Enhanced-Color-July-2019.jpg',
      stats: [
        { label: 'Peso Nac. EPD', value: '+3.2' },
        { label: 'Peso Des. EPD', value: '+48' },
        { label: 'Leche EPD', value: '+14' },
      ],
      description: 'Conformación excepcional, temperamento 1A. Línea fundadora con progenie superior.',
      available: true,
    },
    {
      id: 'jb-044',
      name: 'Jo Herd Bull 044',
      price: '$1,800',
      image: 'http://www.jobulls.com/wp-content/uploads/2011/04/3008-Looking-at-the-camera-Smaller-File.jpg',
      stats: [
        { label: 'Peso Nac. EPD', value: '+2.8' },
        { label: 'Peso Des. EPD', value: '+52' },
        { label: 'Leche EPD', value: '+11' },
      ],
      description: 'Masa muscular dominante con fertilidad comprobada. Alta demanda.',
      available: true,
    },
    {
      id: 'jb-012',
      name: 'Jo Bull 302',
      price: '$2,200',
      image: 'http://www.jobulls.com/wp-content/uploads/2011/04/Jo-Bulls-Winter16-NEW2.jpg',
      stats: [
        { label: 'Peso Nac. EPD', value: '+1.9' },
        { label: 'Peso Des. EPD', value: '+44' },
        { label: 'Leche EPD', value: '+17' },
      ],
      description: 'Excepcional habilidad materna. Mejor docilidad del registro.',
      available: false,
    },
  ]

  return (
    <main className="min-h-screen bg-body-cream pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Catálogo de Ventas 2026</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-hero-green leading-tight mb-6">
            Sementales Disponibles
          </h1>
          <p className="font-sans text-base text-muted max-w-3xl mx-auto leading-relaxed">
            Sementales Hereford Negro certificados con EPDs superiores. Todos los animales incluyen
            registro AMCA, certificados sanitarios y garantía de fertilidad.
          </p>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-hero-green rounded-sm p-8 mb-16 text-center"
        >
          <h2 className="font-serif text-2xl font-bold text-body-cream mb-4">
            Catálogo Completo PDF
          </h2>
          <p className="font-sans text-sm text-white/80 mb-6 max-w-2xl mx-auto">
            Descarga nuestro catálogo completo con todas las especificaciones técnicas,
            EPDs actualizados y precios detallados.
          </p>
          <a
            href="https://www.dropbox.com/scl/fi/nzekiwszdjrhyk6qsbe0c/Jo-Bulls-Sale-Catalog-2026_Final-Pages.pdf?rlkey=vn28gaf51pzq71247vj73ak22&e=2&st=cp030lq1&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent-gold text-hero-green font-sans text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-white transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-hero-green"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar Catálogo Completo
          </a>
        </motion.div>

        {/* Sales Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {saleItems.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeInUp}
              className="bg-white border border-border-light rounded-sm overflow-hidden hover:shadow-lg hover:border-accent-gold transition-all duration-200"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-bold text-text-dark">{item.name}</h3>
                  <span className={`text-sm font-bold tracking-widest uppercase px-3 py-1 rounded-sm ${
                    item.available
                      ? 'bg-accent-gold text-hero-green'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {item.available ? 'Disponible' : 'Reservado'}
                  </span>
                </div>

                <p className="font-sans text-sm text-muted mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {item.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="font-serif text-lg font-bold text-hero-green">{stat.value}</p>
                      <p className="font-sans text-[9px] tracking-wider uppercase text-muted mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border-light">
                  <div>
                    <p className="font-serif text-2xl font-bold text-hero-green">{item.price}</p>
                    <p className="font-sans text-xs text-muted">Precio por pajilla</p>
                  </div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-200 ${
                      item.available
                        ? 'bg-hero-green text-body-cream hover:bg-accent-gold hover:text-hero-green'
                        : 'bg-gray-200 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {item.available ? 'Solicitar' : 'Reservado'}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Terms and Conditions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white border border-border-light rounded-sm p-8"
        >
          <h2 className="font-serif text-2xl font-bold text-hero-green mb-6">
            Condiciones de Venta
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-text-dark mb-3">Garantías</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Garantía de fertilidad por 12 meses</li>
                <li>• Certificados sanitarios incluidos</li>
                <li>• Registro AMCA oficial</li>
                <li>• EPDs actualizados al momento de venta</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-text-dark mb-3">Logística</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Envío refrigerado a todo México</li>
                <li>• Entrega en 24-72 horas</li>
                <li>• Almacenamiento criogénico</li>
                <li>• Seguimiento de envío incluido</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border-light">
            <p className="font-sans text-sm text-muted">
              Para más información o reservaciones, contáctanos directamente.
              Todos los precios están sujetos a cambios sin previo aviso.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}