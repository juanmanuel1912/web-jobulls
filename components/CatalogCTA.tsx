'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/LanguageContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function CatalogCTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-hero-green py-24 md:py-32 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <p className="section-label text-accent-gold mb-4">Catálogo de Ventas 2026</p>
          <h2 className="section-heading text-body-cream mb-6">
            Descarga nuestro catálogo completo de sementales
          </h2>
          <p className="font-sans text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Accede a toda la información técnica, EPDs actualizados y precios de nuestros sementales Hereford Negro certificados.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.dropbox.com/scl/fi/nzekiwszdjrhyk6qsbe0c/Jo-Bulls-Sale-Catalog-2026_Final-Pages.pdf?rlkey=vn28gaf51pzq71247vj73ak22&e=2&st=cp030lq1&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent-gold text-hero-green font-sans text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-white transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-hero-green"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar Catálogo PDF
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 border border-white/30 text-white/90 font-sans text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Solicitar Información
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-sans text-sm text-white/70">EPDs Actualizados</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="font-sans text-sm text-white/70">Catálogo Completo</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-sans text-sm text-white/70">Contacto Directo</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}