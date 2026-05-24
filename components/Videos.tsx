'use client'

export default function Videos() {
  return (
    <section id="videos" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="section-label mb-3">Videos del Rancho</p>
          <h2 className="section-heading max-w-3xl mx-auto">
            Mira a Jo Bulls en acción y descubre nuestro trabajo en campo.
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Videos extraídos del sitio oficial de Jo Bulls. Observa el ganado, el traslado a pastoreo y la selección en ambientes extremos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-sm overflow-hidden shadow-xl">
            <div className="relative pb-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/R-WdcHCw_M4"
                title="Jo Bulls Ranch Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6 bg-hero-green text-body-cream">
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-accent-gold mb-3">Video Oficial</p>
              <h3 className="font-serif text-2xl font-bold mb-3">Jo Bulls Ranch en Movimiento</h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                Video documental del rancho Jo Bulls. Mira cómo el ganado hace el traslado a la montaña y cómo se seleccionan los Herefords Negros en su ambiente natural.
              </p>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden shadow-xl bg-[#f6f7f3] p-6 flex flex-col justify-between">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-hero-green mb-3">Narrativa del Rancho</p>
              <h3 className="font-serif text-3xl font-bold mb-4">Selección en ambiente extremo</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                En Jo Bulls, el ganado recorre 25 millas hacia las montañas de Manti-La Sal y vive entre 5,700 y 10,600 pies de elevación. Esta sección muestra el desempeño real de los Herefords negros.
              </p>
            </div>
            <div className="grid gap-4">
              <a
                href="https://www.youtube.com/watch?v=R-WdcHCw_M4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between bg-hero-green text-body-cream px-5 py-3 rounded-sm font-semibold hover:bg-accent-gold transition-colors"
              >
                Ver en YouTube
                <span aria-hidden="true">→</span>
              </a>
              <div className="rounded-sm border border-border-light bg-white p-4">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted mb-2">Video extraído de:</p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  http://www.jobulls.com/
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
