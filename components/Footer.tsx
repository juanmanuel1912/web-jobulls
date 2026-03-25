'use client'

const links = [
  {
    heading: 'Genética',
    items: [
      { label: 'Catálogo de Sementales', href: '#sires' },
      { label: 'Colección Legado', href: '#sires' },
      { label: 'Nuevos Ingresos', href: '#sires' },
    ],
  },
  {
    heading: 'Programa',
    items: [
      { label: 'Mejoramiento Genético', href: '#program' },
      { label: 'Filosofía de Cría', href: '#philosophy' },
      { label: 'Resultados en Campo', href: '#program' },
    ],
  },
  {
    heading: 'Técnico',
    items: [
      { label: 'Genómica & EPDs', href: '#specs' },
      { label: 'Certificaciones', href: '#specs' },
      { label: 'Logística de Semen', href: '#specs' },
    ],
  },
  {
    heading: 'Empresa',
    items: [
      { label: 'Nosotros', href: '#' },
      { label: 'Noticias', href: '#' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-hero-green text-body-cream">
      {/* CTA band */}
      <div className="border-b border-white/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label text-accent-gold mb-4">Próximo paso</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-body-cream mb-6 leading-tight">
            Transforma tu hato<br />con JO BULLS.
          </h2>
          <p className="font-sans text-sm text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            Solicita nuestro catálogo actualizado y recibe asesoría técnica personalizada sin costo. Décadas de genética Simbrah al servicio de su rancho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('sires')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Explorar el catálogo de sementales JO BULLS"
            >
              Explorar Catálogo JO BULLS
            </button>
            <button
              className="border border-accent-gold text-accent-gold font-sans text-sm font-semibold tracking-widest uppercase px-7 py-3 rounded-sm transition-all duration-200 hover:bg-accent-gold hover:text-hero-green cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-gold"
              aria-label="Contactar al equipo JO BULLS"
            >
              Hablar con un Asesor
            </button>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <p className="font-serif text-2xl font-bold text-body-cream mb-3">JO BULLS</p>
              <p className="font-sans text-xs text-white/40 leading-relaxed max-w-[180px]">
                Genética Simbrah de élite. Registro AMCA. México.
              </p>
            </div>

            {/* Link columns */}
            {links.map((col) => (
              <div key={col.heading}>
                <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5" role="list">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-sans text-sm text-white/70 hover:text-body-cream transition-colors duration-150 focus:outline-none focus:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/30">
              © {new Date().getFullYear()} JO BULLS. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {['Privacidad', 'Términos', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors focus:outline-none focus:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
