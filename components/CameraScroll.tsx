'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface OverlayProps {
  scrollYProgress: MotionValue<number>
  start: number
  end: number
  children: React.ReactNode
  className?: string
}

/* ─────────────────────────────────────────────
   Overlay: fades in-out + slight Y shift
───────────────────────────────────────────── */
function Overlay({ scrollYProgress, start, end, children, className = '' }: OverlayProps) {
  const mid = (start + end) / 2
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, mid, end - 0.05, end],
    [0, 1, 1, 1, 0]
  )
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [24, 0, 0, -24]
  )
  const filter = useTransform(
    scrollYProgress,
    [start, start + 0.04, end - 0.04, end],
    ['blur(6px)', 'blur(0px)', 'blur(0px)', 'blur(6px)']
  )

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   CTA Overlay: pointer-events enabled
───────────────────────────────────────────── */
function CtaOverlay({ scrollYProgress, start, end }: { scrollYProgress: MotionValue<number>; start: number; end: number }) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, 0.98, 1],
    [0, 1, 1, 0]
  )
  const y = useTransform(scrollYProgress, [start, start + 0.05], [24, 0])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-end justify-center pb-24 md:pb-16"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={() => scrollTo('sires')}
          className="btn-ghost text-sm"
          aria-label="Ver galería de sementales"
        >
          Ver Sementales
        </button>
        <button
          onClick={() => scrollTo('program')}
          className="border border-accent-gold text-accent-gold font-sans text-sm font-semibold tracking-widest uppercase px-7 py-3 rounded-sm transition-all duration-200 hover:bg-accent-gold hover:text-hero-green focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 cursor-pointer"
          aria-label="Conocer el programa de cría"
        >
          Programa de Cría
        </button>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function CameraScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const frameIndexRef = useRef(0)
  const rafRef = useRef<number>(0)

  const [frames, setFrames] = useState<string[]>([])
  const [loadedCount, setLoadedCount] = useState(0)
  const [ready, setReady] = useState(false)
  const [manifestError, setManifestError] = useState(false)

  const { scrollYProgress } = useScroll({ target: containerRef })

  // Hoisted transforms — must be at top level, no conditionals
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  /* ── Load manifest ── */
  useEffect(() => {
    fetch('/frames/manifest.json')
      .then((r) => {
        if (!r.ok) throw new Error('manifest not found')
        return r.json()
      })
      .then((data: string[]) => setFrames(data))
      .catch(() => setManifestError(true))
  }, [])

  /* ── Preload images ── */
  useEffect(() => {
    if (!frames.length) return

    const imgs: HTMLImageElement[] = []
    let loaded = 0

    frames.forEach((src, i) => {
      const img = new window.Image()
      img.src = src
      img.onload = img.onerror = () => {
        loaded++
        setLoadedCount(loaded)
        if (loaded === frames.length) setReady(true)
      }
      imgs[i] = img
    })

    imagesRef.current = imgs
  }, [frames])

  /* ── Map scroll → frame index ── */
  useEffect(() => {
    if (!ready) return
    const total = imagesRef.current.length

    const unsubscribe = scrollYProgress.on('change', (v) => {
      frameIndexRef.current = Math.min(
        Math.round(v * (total - 1)),
        total - 1
      )
    })

    return unsubscribe
  }, [scrollYProgress, ready])

  /* ─── Canvas draw helper ─── */
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = imagesRef.current[frameIndexRef.current]
    if (!img || !img.complete || img.naturalWidth === 0) return

    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight

    // "contain" scaling (in CSS pixels; canvas is pre-scaled by dpr)
    const dpr = window.devicePixelRatio || 1
    const cssW = cw / dpr
    const cssH = ch / dpr
    const scale = Math.min(cssW / iw, cssH / ih)
    const dw = iw * scale
    const dh = ih * scale
    const dx = (cssW - dw) / 2
    const dy = (cssH - dh) / 2

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    
    ctx.clearRect(0, 0, cssW, cssH)
    // Floor coordinates to avoid sub-pixel blurring
    ctx.drawImage(img, Math.floor(dx), Math.floor(dy), Math.floor(dw), Math.floor(dh))
  }, [])

  /* ─── RAF draw loop ─── */
  useEffect(() => {
    if (!ready) return

    let lastFrame = -1

    const loop = () => {
      if (frameIndexRef.current !== lastFrame) {
        drawFrame()
        lastFrame = frameIndexRef.current
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [ready, drawFrame])

  /* ─── Resize + DPR handling ─── */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Use full native pixel density — no cap
    const dpr = window.devicePixelRatio || 1

    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
    }

    drawFrame()
  }, [drawFrame])

  useEffect(() => {
    resizeCanvas()
    const observer = new ResizeObserver(resizeCanvas)
    observer.observe(document.documentElement)
    return () => observer.disconnect()
  }, [resizeCanvas])

  /* ─── Manifest error state ─── */
  if (manifestError) {
    return (
      <section className="flex items-center justify-center h-screen bg-hero-green text-body-cream text-center px-6">
        <div>
          <p className="font-serif text-2xl mb-2">No se encontró el manifest de frames.</p>
          <p className="text-sm opacity-70">Ejecuta <code className="bg-white/10 px-2 py-1 rounded text-xs">npm run dev</code> para regenerarlo.</p>
        </div>
      </section>
    )
  }

  const total = frames.length
  const progress = total > 0 ? Math.round((loadedCount / total) * 100) : 0

  return (
    /* Tall container drives scroll */
    <div ref={containerRef} className="relative" style={{ height: '380vh' }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-hero-green">
        
        {/* Background Image: Authentic Ranch */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/pasture_real.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-30 grayscale-[10%] brightness-[0.5] contrast-[1.1]"
          />
          {/* Subtle vignette/darkening to focus on center */}
          <div className="absolute inset-0 bg-gradient-to-b from-hero-green/50 via-transparent to-hero-green/70" />
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10"
          style={{ 
            mixBlendMode: 'screen', 
            imageRendering: 'auto',
            // @ts-ignore - non-standard property for extra sharpness in some browsers
            imageRendering: '-webkit-optimize-contrast',
            filter: 'contrast(1.1) brightness(1.06) saturate(1.05)',
          } as React.CSSProperties}
          aria-label="Animación de semental JO BULLS"
          role="img"
        />

        {/* Dark green overlay at top — blends canvas edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 35%, rgba(27,42,30,0.55) 100%)',
          }}
        />

        {/* ── Loader ── */}
        {!ready && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-hero-green z-30">
            <p className="section-label text-accent-gold mb-6 font-serif">JO BULLS</p>
            <div className="w-48 h-px bg-white/20 relative overflow-hidden rounded-full">
              <div
                className="absolute inset-y-0 left-0 bg-accent-gold transition-all duration-150 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-sans text-xs text-white/40 mt-3 tracking-widest">{progress}%</p>
          </div>
        )}

        {/* ── Overlay 1: 0–18% — Brand intro ── */}
        {ready && (
          <Overlay scrollYProgress={scrollYProgress} start={0} end={0.18}>
            <div className="text-center px-6 max-w-2xl">
              <p className="section-label text-accent-gold mb-4">Genética Bovina de Élite</p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-body-cream leading-none tracking-tight mb-6">
                JO BULLS
              </h1>
              <p className="font-sans text-lg text-white/70 mb-8 leading-relaxed">
                La cumbre de la excelencia genética.
              </p>
              <button
                onClick={() => document.getElementById('sires')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost pointer-events-auto"
              >
                Explorar Sementales
              </button>
            </div>
          </Overlay>
        )}

        {/* ── Overlay 2: 25–45% — Genetics ── */}
        {ready && (
          <Overlay scrollYProgress={scrollYProgress} start={0.25} end={0.45}>
            <div className="text-center px-6 max-w-xl">
              <p className="section-label text-accent-gold mb-4">Selección rigurosa</p>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-body-cream leading-tight">
                Genética Simbrah de élite,<br />forjada en décadas de selección.
              </p>
            </div>
          </Overlay>
        )}

        {/* ── Overlay 3: 55–75% — Legacy ── */}
        {ready && (
          <Overlay scrollYProgress={scrollYProgress} start={0.55} end={0.75}>
            <div className="text-center px-6 max-w-xl">
              <p className="section-label text-accent-gold mb-4">Legado</p>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-body-cream leading-tight">
                Cada semental, un legado.
              </p>
            </div>
          </Overlay>
        )}

        {/* ── Overlay 4: 85–100% — CTA ── */}
        {ready && (
          <CtaOverlay scrollYProgress={scrollYProgress} start={0.85} end={1} />
        )}

        {/* ── Scroll indicator ── */}
        {ready && (
          <motion.div
            style={{
              opacity: scrollIndicatorOpacity,
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            aria-hidden="true"
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse-slow" />
          </motion.div>
        )}

        {/* ── Nav overlay ── */}
        <nav
          className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-5"
          aria-label="Navegación principal"
        >
          <a
            href="#"
            className="font-serif text-xl font-bold text-body-cream tracking-wide focus:outline-none focus:ring-2 focus:ring-accent-gold rounded"
            aria-label="JO BULLS — Ir al inicio"
          >
            JO BULLS
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Sementales', href: '#sires' },
              { label: 'Filosofía', href: '#philosophy' },
              { label: 'Programa', href: '#program' },
              { label: 'Genómica', href: '#specs' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-xs text-white/70 hover:text-body-cream transition-colors duration-150 tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-accent-gold rounded"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="font-sans text-xs bg-accent-gold text-hero-green font-semibold tracking-widest uppercase px-5 py-2 rounded-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-hero-green"
          >
            Contacto
          </a>
        </nav>
      </div>
    </div>
  )
}
