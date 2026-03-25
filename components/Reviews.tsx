'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Ing. Roberto Salinas',
    ranch: 'Rancho El Mezquite, Tamaulipas',
    rating: 5,
    text: 'Usamos semen de JB Imperio 001 en 40 vientres la primera temporada. El promedio de peso al destete superó los 240 kg. Nunca habíamos visto resultados así en nuestro hato.',
  },
  {
    name: 'Arturo Villareal',
    ranch: 'Ganadería Villareal, Veracruz',
    rating: 5,
    text: 'El temperamento de las crías F1 es excepcional. Docilidad total desde el primer mes. JO BULLS no exagera cuando habla de sus EPDs — los números son reales.',
  },
  {
    name: 'Familia Mendoza Castro',
    ranch: 'Rancho Las Palmas, Sinaloa',
    rating: 5,
    text: 'Llevamos 3 generaciones con JO BULLS. La calidad genética es consistente año con año. La asesoría técnica que ofrecen antes de elegir el semental vale tanto como el semen mismo.',
  },
  {
    name: 'MVZ Patricia Olvera',
    ranch: 'Consultora independiente, CDMX',
    rating: 5,
    text: 'Recomiendo JO BULLS a todos mis clientes que buscan mejoramiento genético serio. Los registros AMCA están en orden y la transparencia en los datos es total.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} estrellas de 5`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-accent-gold' : 'text-border-light'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="bg-body-cream py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Lo que dicen los ganaderos</p>
          <h2 className="section-heading mx-auto max-w-lg">
            Resultados que hablan
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-border-light rounded-sm p-6 flex flex-col"
              aria-label={`Testimonio de ${r.name}`}
            >
              <StarRating rating={r.rating} />
              <blockquote className="font-sans text-sm text-text-dark leading-relaxed mt-4 mb-6 flex-1 italic">
                "{r.text}"
              </blockquote>
              <footer>
                <p className="font-serif text-sm font-bold text-text-dark">{r.name}</p>
                <p className="font-sans text-xs text-muted mt-0.5">{r.ranch}</p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
