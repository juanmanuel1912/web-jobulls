'use client'

import { motion } from 'framer-motion'

const sires = [
  {
    id: 'jb-001',
    name: 'Bullseye D411',
    subtitle: 'Colección Fundadores',
    image: 'http://www.jobulls.com/wp-content/uploads/2019/07/Bullseye-D411-Enhanced-Color-July-2019.jpg',
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
    name: 'Jo Herd Bull 044',
    subtitle: 'Sementales de Hato',
    image: 'http://www.jobulls.com/wp-content/uploads/2011/04/3008-Looking-at-the-camera-Smaller-File.jpg',
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
    name: 'Jo Bull 302',
    subtitle: 'Línea Superior',
    image: 'http://www.jobulls.com/wp-content/uploads/2011/04/Jo-Bulls-Winter16-NEW2.jpg',
    stats: [
      { label: 'Peso Nac. EPD', value: '+1.9' },
      { label: 'Peso Des. EPD', value: '+44' },
      { label: 'Leche EPD', value: '+17' },
    ],
    badge: 'Recomendado',
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
            {/* Image */}
            <div className="md:w-1/2 aspect-[4/3] md:aspect-auto min-h-[280px] overflow-hidden">
              <img
                src={sires[0].image}
                alt={sires[0].name}
                className="w-full h-full object-cover"
              />
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
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">{sires[0].name}</h3>
                <p className="font-sans text-sm text-white/60 mb-8 leading-relaxed max-w-sm">
                  {sires[0].description}
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
                <a href="https://jobulls.myshopify.com/" target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 sm:flex-none flex items-center justify-center text-center" aria-label={`Purchase semen of ${sires[0].name}`}>
                  Purchase Semen
                </a>
                <button
                  className="border border-white/30 text-white/70 font-sans text-sm font-semibold tracking-widest uppercase px-5 py-3 rounded-sm transition-all duration-200 hover:border-white hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  aria-label={`Ver genealogía de ${sires[0].name}`}
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
              {/* Image */}
              <div className="aspect-[4/3] rounded-sm mb-5 overflow-hidden">
                <img
                  src={sire.image}
                  alt={sire.name}
                  className="w-full h-full object-cover"
                />
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
                <a href="https://jobulls.myshopify.com/" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-xs flex items-center justify-center text-center" aria-label={`Purchase semen of ${sire.name}`}>
                  Purchase Semen
                </a>
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
