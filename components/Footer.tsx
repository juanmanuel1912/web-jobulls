'use client'

import { useLanguage } from '@/app/LanguageContext'

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
  const { t } = useLanguage()
  return (
    <footer id="contact" className="bg-hero-green text-body-cream">
      {/* CTA band */}
      <div className="border-b border-white/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label text-accent-gold mb-4">Próximo paso</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-body-cream mb-6 leading-tight">
            {t('footer.cta_title')}
          </h2>
          <p className="font-sans text-sm text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            {t('footer.cta_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('sires')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Explorar el catálogo de sementales JO BULLS"
            >
              {t('footer.catalog')}
            </button>
            <a
              href="/contact"
              className="border border-accent-gold text-accent-gold font-sans text-sm font-semibold tracking-widest uppercase px-7 py-3 rounded-sm transition-all duration-200 hover:bg-accent-gold hover:text-hero-green cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-gold inline-flex items-center justify-center text-center"
              aria-label="Contactar al equipo JO BULLS"
            >
              {t('footer.advisor')}
            </a>
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
                {t('footer.brand')}
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
            <div className="flex items-center gap-6">
              <p className="font-sans text-xs text-white/30">
                © {new Date().getFullYear()} JO BULLS. Todos los derechos reservados.
              </p>
              <a
                href="/contact"
                className="font-sans text-xs text-accent-gold hover:text-white transition-colors focus:outline-none focus:underline"
              >
                Catálogo de Ventas 2026
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/people/JO-BULLS/100057493629087/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-accent-gold transition-colors"
                aria-label="Síguenos en Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jobulls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-accent-gold transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.95.013 6.716.06 5.493.107 4.689.227 4.017.407c-.716.187-1.327.44-1.94.854-.612.414-1.14.942-1.554 1.554C.44 3.427.187 4.038.013 4.754c-.18.672-.3 1.476-.347 2.699C-.013 8.688 0 9.134 0 12.755s-.013 4.067.06 5.301c.047 1.223.167 2.027.347 2.699.187.716.44 1.327.854 1.94.414.612.942 1.14 1.554 1.554.612.414 1.223.667 1.94.854.672.18 1.476.3 2.699.347C7.95 23.987 8.396 24 12.017 24s4.067-.013 5.301-.06c1.223-.047 2.027-.167 2.699-.347.716-.187 1.327-.44 1.94-.854.612-.414 1.14-.942 1.554-1.554.414-.612.667-1.223.854-1.94.18-.672.3-1.476.347-2.699.06-1.234.06-1.68.06-5.301s.013-4.067-.06-5.301c-.047-1.223-.167-2.027-.347-2.699-.187-.716-.44-1.327-.854-1.94-.414-.612-.942-1.14-1.554-1.554-.612-.414-1.223-.667-1.94-.854-.672-.18-1.476-.3-2.699-.347C16.084.013 15.638 0 12.017 0zm0 2.163c3.574 0 4.007.014 5.427.08.692.033 1.074.147 1.323.244.327.128.707.298 1.017.608.31.31.48.69.608 1.017.097.249.211.631.244 1.323.066 1.42.08 1.853.08 5.427s-.014 4.007-.08 5.427c-.033.692-.147 1.074-.244 1.323-.128.327-.298.707-.608 1.017-.31.31-.69.48-1.017.608-.249.097-.631.211-1.323.244-1.42.066-1.853.08-5.427.08s-4.007-.014-5.427-.08c-.692-.033-1.074-.147-1.323-.244-.327-.128-.707-.298-1.017-.608-.31-.31-.48-.69-.608-1.017-.097-.249-.211-.631-.244-1.323-.066-1.42-.08-1.853-.08-5.427s.014-4.007.08-5.427c.033-.692.147-1.074.244-1.323.128-.327.298-.707.608-1.017.31-.31.69-.48 1.017-.608.249-.097.631-.211 1.323-.244 1.42-.066 1.853-.08 5.427-.08zm0 3.781a6.236 6.236 0 100 12.472 6.236 6.236 0 000-12.472zm0 2.163a4.073 4.073 0 110 8.146 4.073 4.073 0 010-8.146zm8.135-2.163c0 .596-.484 1.08-1.08 1.08s-1.08-.484-1.08-1.08.484-1.08 1.08-1.08 1.08.484 1.08 1.08z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@jobulls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-accent-gold transition-colors"
                aria-label="Síguenos en YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
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
