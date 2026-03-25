import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'JO BULLS — Genética Bovina de Élite',
  description:
    'Sementales Simbrah de alto rendimiento. Décadas de selección rigurosa al servicio de su hato. Registro oficial AMCA · Trazabilidad genética garantizada.',
  keywords: ['JO BULLS', 'genética bovina', 'sementales Simbrah', 'EPD', 'mejoramiento genético'],
  openGraph: {
    title: 'JO BULLS — Genética Bovina de Élite',
    description: 'La cumbre de la excelencia genética Simbrah.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
