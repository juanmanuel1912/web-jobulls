'use client'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-body-cream pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Contacto</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-hero-green leading-tight">
            Contacta a Jo Bulls, LLC
          </h1>
          <p className="font-sans text-base text-muted max-w-2xl mx-auto leading-relaxed mt-4">
            Escribe, llama o envía tu consulta por catálogo. Estamos listos para responder tu solicitud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-sm border border-border-light bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold mb-6">Información de Jo Bulls</h2>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p><strong>Contact Jo Bulls, LLC</strong></p>
              <p>Jo Bulls, LLC</p>
              <p>C/O Brock Johansen</p>
              <p>PO Box 706</p>
              <p>Castle Dale, Utah 84513</p>
              <p>(435) 749-1543</p>
              <p>
                <a href="mailto:bjohansen@emerytelcom.com" className="text-hero-green font-semibold hover:text-accent-gold">
                  bjohansen@emerytelcom.com
                </a>
              </p>
            </div>

            <div className="mt-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-hero-green mb-3">Catálogo de ventas</p>
              <a
                href="https://www.dropbox.com/scl/fi/nzekiwszdjrhyk6qsbe0c/Jo-Bulls-Sale-Catalog-2026_Final-Pages.pdf?rlkey=vn28gaf51pzq71247vj73ak22&e=1&st=cp030lq1&dl=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-hero-green text-body-cream px-5 py-3 rounded-sm font-semibold hover:bg-accent-gold transition-colors"
              >
                Ver Catálogo 2026
              </a>
            </div>
          </div>

          <div className="rounded-sm border border-border-light bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold mb-6">Escríbenos</h2>
            <form action="mailto:bjohansen@emerytelcom.com" method="post" encType="text/plain" className="space-y-5">
              <label className="block">
                <span className="font-sans text-sm font-semibold text-text-dark">Nombre</span>
                <input type="text" name="nombre" required className="mt-2 w-full rounded-sm border border-border-light bg-slate-50 px-4 py-3 text-sm outline-none focus:border-hero-green focus:ring-2 focus:ring-hero-green/20" placeholder="Tu nombre" />
              </label>
              <label className="block">
                <span className="font-sans text-sm font-semibold text-text-dark">Correo electrónico</span>
                <input type="email" name="correo" required className="mt-2 w-full rounded-sm border border-border-light bg-slate-50 px-4 py-3 text-sm outline-none focus:border-hero-green focus:ring-2 focus:ring-hero-green/20" placeholder="tucorreo@ejemplo.com" />
              </label>
              <label className="block">
                <span className="font-sans text-sm font-semibold text-text-dark">Mensaje</span>
                <textarea name="mensaje" required className="mt-2 w-full min-h-[150px] rounded-sm border border-border-light bg-slate-50 px-4 py-3 text-sm outline-none focus:border-hero-green focus:ring-2 focus:ring-hero-green/20" placeholder="Escribe tu consulta aquí..."></textarea>
              </label>
              <button type="submit" className="inline-flex items-center justify-center w-full bg-hero-green text-body-cream px-5 py-3 rounded-sm font-semibold hover:bg-accent-gold transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
