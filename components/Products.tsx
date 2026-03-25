'use client'

import { motion } from 'framer-motion'

const sires = [
  {
    id: 'jb-001',
    name: 'JB Imperio 001',
    subtitle: 'Colección Fundadores',
    stats: [
      { label: 'Peso Nac. EPD', value: '+3.2' },
      { label: 'Peso Des. EPD', value: '+48' },
      { label: 'Leche EPD', value: '+14' },
    ],
    badge: 'Elite',
    description: 'Conformación excepcional, temperamento 1A. Progenie con crecimiento superior al 92% de los sementales registrados.',
    featured: true,
  },
  {
    id: 'jb-044',
    name: 'JB Titán 44',
    subtitle: 'Línea Vigor',
    stats: [
      { label: 'Peso Nac. EPD', value: '+2.8' },
      { label: 'Peso Des. EPD', value: '+52' },
      { label: 'Leche EPD', value: '+11' },
    ],
    badge: 'Alta demanda',
    description: 'Masa muscular dominante con fertilidad comprobada. Ideal para mejora de peso al destete.',
    featured: false,
  },
  {
    id: 'jb-012',
    name: 'JB Legado Real 12',
    subtitle: 'Línea Legado',
    stats: [
      { label: 'Peso Nac. EPD', value: '+1.9' },
      { label: 'Peso Des. EPD', value: '+44' },
      { label: 'Leche EPD', value: '+17' },
    ],
    badge: 'Maternal',
    description: 'Excepcional transmisión de habilidad materna. Progenie con la mejor docilidad del registro.',
    featured: false,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Products() {
  return (
    <section id="sires" className="bg-body-cream py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-3">Genética de Alto Rendimiento</p>
            <h2 className="section-heading max-w-md">
              Galería de Sementales Elite
            </h2>
          </div>
          <p className="font-sans text-sm text-muted max-w-sm leading-relaxed">
            Simentales seleccionados con EPDs superiores a la media racial. Registro oficial AMCA · Trazabilidad genética garantizada.
          </p>
        </div>

        {/* Featured sire — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-sm overflow-hidden mb-6 bg-hero-green text-body-cream"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image placeholder */}
            <div className="md:w-1/2 aspect-[4/3] md:aspect-auto bg-gradient-to-br from-hero-green to-[#2d4a32] flex items-center justify-center min-h-[280px]">
              <div className="text-center opacity-30">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs tracking-widest">Fotografía disponible en catálogo</p>
              </div>
            </div>
            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-6">
                  <span className="bg-accent-gold text-hero-green text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                    Colección Legado
                  </span>
                  <span className="border border-white/30 text-white/70 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-sm">
                    Best of Lineage
                  </span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">JB Imperio 001</h3>
                <p className="font-sans text-sm text-white/60 mb-8 leading-relaxed max-w-sm">
                  Conformación excepcional, temperamento 1A. Progenie con crecimiento superior al 92% de los sementales registrados AMCA. El fundador de la línea JB.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {sires[0].stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-serif text-2xl font-bold text-accent-gold">{s.value}</p>
                      <p className="font-sans text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-ghost flex-1 sm:flex-none" aria-label="Solicitar semen de JB Imperio 001">
                  Solicitar Semen
                </button>
                <button
                  className="border border-white/30 text-white/70 font-sans text-sm font-semibold tracking-widest uppercase px-5 py-3 rounded-sm transition-all duration-200 hover:border-white hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  aria-label="Ver genealogía de JB Imperio 001"
                >
                  Genealogía
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 sire cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {sires.slice(0).map((sire, i) => (
            <motion.article
              key={sire.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="card-base flex flex-col"
              aria-label={`Semental ${sire.name}`}
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-[#1B2A1E] rounded-sm mb-5 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex items-center justify-between mb-1">
                <p className="font-sans text-[10px] tracking-widest uppercase text-muted">{sire.subtitle}</p>
                <span className="bg-body-cream border border-accent-gold text-accent-gold text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                  {sire.badge}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-text-dark mb-2">{sire.name}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4 flex-1">{sire.description}</p>
              <div className="grid grid-cols-3 gap-2 mb-5 pt-4 border-t border-border-light">
                {sire.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif text-lg font-bold text-hero-green">{s.value}</p>
                    <p className="font-sans text-[9px] tracking-wider uppercase text-muted mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="btn-primary flex-1 text-xs" aria-label={`Solicitar semen de ${sire.name}`}>
                  Solicitar Semen
                </button>
                <button
                  className="border border-border-light text-muted hover:border-hero-green hover:text-hero-green font-sans text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  aria-label={`Ver genealogía de ${sire.name}`}
                >
                  Genealogía
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust bar */}
        <div className="border-t border-border-light pt-8 flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            'Registro Oficial AMCA',
            'Trazabilidad Genética Garantizada',
            'Semen Certificado & Congelado',
            'Entrega a todo México',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-sans text-xs text-muted tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
