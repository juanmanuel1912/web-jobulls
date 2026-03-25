'use client'

import { motion } from 'framer-motion'

const programs = [
  {
    title: 'Mejora de Peso al Destete',
    tag: 'Crecimiento',
    description: 'Nuestros sementales entregan un diferencial promedio de +38 kg al destete en comparación con la media racial. Resultados medibles desde la primera f1.',
    bullets: [
      'EPD Peso Destete promedio: +47',
      'Ganancia diaria >0.9 kg/día en prueba',
      'Masa muscular superior, menor deposición de grasa',
    ],
  },
  {
    title: 'Alta Producción de Leche',
    tag: 'Maternidad',
    description: 'La habilidad materna define el potencial de su hato. Líneas con EPD Leche sobresaliente para crías más pesadas y vigorosas al nacer.',
    bullets: [
      'EPD Leche promedio: +15 kg',
      'Crías con menor mortalidad neonatal',
      'Hembras F1 con mayor retención en vientre',
    ],
  },
  {
    title: 'Conformación Superior',
    tag: 'Estructura',
    description: 'Animales funcionales con longevidad y solidez en cascos, patas y estructura reproductiva. Calificación estructural certificada.',
    bullets: [
      'Calificación estructural ≥ 87/100',
      'Aplomos y pezuñas evaluados in vivo',
      'Baja tasa de descarte por problemas físicos',
    ],
  },
]

export default function UseCases() {
  return (
    <section id="program" className="bg-body-cream py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Resultados en campo</p>
          <h2 className="section-heading mx-auto max-w-lg">
            Programa de Mejoramiento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.13, duration: 0.55 }}
              className="bg-white border border-border-light rounded-sm p-8 hover:shadow-lg hover:border-accent-gold transition-all duration-200"
              aria-label={p.title}
            >
              <span className="inline-block bg-hero-green text-body-cream text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-6">
                {p.tag}
              </span>
              <h3 className="font-serif text-2xl font-bold text-text-dark mb-3 leading-snug">{p.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">{p.description}</p>
              <ul className="space-y-3" role="list">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-sm text-text-dark leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
