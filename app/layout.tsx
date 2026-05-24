import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { LanguageProvider } from './LanguageContext'
import Header from '@/components/Header'
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
    'Sementales Hereford Negro de alto rendimiento. Décadas de selección rigurosa al servicio de su rebaño. Miembros ABHA · Adaptados a ambientes extremos.',
  keywords: ['JO BULLS', 'genética bovina', 'sementales Hereford Negro', 'EPD', 'mejoramiento genético'],
  openGraph: {
    title: 'JO BULLS — Genética Bovina de Élite',
    description: 'Ganado que prospera en ambientes extremos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
