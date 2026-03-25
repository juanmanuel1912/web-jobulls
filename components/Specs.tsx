'use client'

import { motion } from 'framer-motion'

const rows = [
  { label: 'Raza', value: 'Simbrah (5/8 Brahman · 3/8 Simmental)', highlight: false },
  { label: 'Registro', value: 'AMCA — American Simbrah Breeders', highlight: false },
  { label: 'Peso al Nacimiento (EPD)', value: '+2.4 kg (promedio catálogo)', highlight: true },
  { label: 'Peso al Destete (EPD)', value: '+47 kg (promedio catálogo)', highlight: true },
  { label: 'EPD Leche', value: '+14 kg (promedio catálogo)', highlight: true },
  { label: 'EPD Calificación Estructural', value: '+0.4 (escala 1–9)', highlight: false },
  { label: 'Temperamento (escala AMCA)', value: '1A / 1B — Excelente docilidad', highlight: false },
  { label: 'Disponibilidad de semen', value: 'Congelado · Entrega refrigerada 24-72h', highlight: false },
  { label: 'Certificaciones', value: 'BVD, IBR, Brucelosis — negativo certificado', highlight: false },
  { label: 'Conservación de pajillas', value: 'Nitrógeno líquido − 196°C', highlight: false },
]

export default function Specs() {
  return (
    <section id="specs" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Evidencia técnica</p>
          <h2 className="section-heading mx-auto max-w-lg">
            Genómica &amp; Especificaciones
          </h2>
          <p className="font-sans text-sm text-muted mt-4 max-w-md mx-auto leading-relaxed">
            Valores de referencia promedio del catálogo activo JO BULLS. Datos individuales disponibles en ficha técnica de cada semental.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border-light rounded-sm overflow-hidden"
        >
          <table className="w-full" role="table" aria-label="Especificaciones técnicas JO BULLS">
            <thead>
              <tr className="bg-hero-green text-body-cream">
                <th scope="col" className="font-sans text-xs tracking-widest uppercase text-left px-6 py-4 font-semibold w-1/2">
                  Característica
                </th>
                <th scope="col" className="font-sans text-xs tracking-widest uppercase text-left px-6 py-4 font-semibold">
                  Valor / Referencia
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-border-light transition-colors ${
                    row.highlight
                      ? 'bg-amber-50'
                      : i % 2 === 0
                      ? 'bg-white'
                      : 'bg-[#F8F5EF]'
                  } hover:bg-amber-50`}
                >
                  <td className="px-6 py-4">
                    <span className="font-sans text-sm font-semibold text-text-dark">{row.label}</span>
                    {row.highlight && (
                      <span className="ml-2 text-[9px] bg-accent-gold/20 text-accent-gold font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                        EPD
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-sans text-sm text-muted">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="font-sans text-xs text-muted/60 text-center mt-6">
          * Valores de referencia — catálogo 2025 JO BULLS. Datos individuales disponibles bajo solicitud.
        </p>
      </div>
    </section>
  )
}
