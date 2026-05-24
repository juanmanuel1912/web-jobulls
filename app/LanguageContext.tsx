'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.sires': 'Sementales',
    'nav.program': 'Programa',
    'nav.specs': 'Genómica',
    'nav.reviews': 'Testimonios',
    'nav.contact': 'Contacto',
    
    'hero.title': 'JO BULLS',
    'hero.subtitle': 'Ganado que prospera en ambientes extremos desde Castle Dale, Utah.',
    'hero.cta': 'Explorar Sementales',
    
    'features.title': 'Ganado Hereford Negro Adaptado',
    'features.subtitle': 'Nuestro objetivo es crear ganado que prospere en ambientes difíciles.',
    'features.desc': 'Transformamos nuestra herencia Hereford tradicional a genética negra moderna. Somos miembros certificados de la American Black Hereford Association (ABHA).',
    
    'features.f1': 'Adaptación a Ambientes Extremos',
    'features.f1_desc': 'Nuestro ganado prospera donde otros fracasan. Castle Dale recibe solo 7 pulgadas de lluvia anual.',
    
    'features.f2': 'Altitud y Movimiento',
    'features.f2_desc': 'El ganado sube a 10,600 pies de elevación en verano. Recorren 25 millas en 3 días.',
    
    'features.f3': 'Selección Natural Continua',
    'features.f3_desc': 'Los ambientes duros aplican presión natural sobre el rebaño.',
    
    'features.f4': 'Herencia Hereford Negro Puro',
    'features.f4_desc': 'Transformamos nuestra línea Hereford tradicional a genética negra moderna.',
    
    'footer.cta_title': 'Transforma tu rebaño con JO BULLS.',
    'footer.cta_desc': 'Solicita nuestro catálogo de sementales Hereford Negro.',
    'footer.catalog': 'Explorar Catálogo JO BULLS',
    'footer.advisor': 'Hablar con un Asesor',
    'footer.brand': 'Herefords Negros de élite. ABHA Certified. Johansen, Utah.',
  },
  en: {
    'nav.home': 'Home',
    'nav.sires': 'Sires',
    'nav.program': 'Program',
    'nav.specs': 'Genomics',
    'nav.reviews': 'Testimonials',
    'nav.contact': 'Contact',
    
    'hero.title': 'JO BULLS',
    'hero.subtitle': 'Cattle that thrive in extreme environments from Castle Dale, Utah.',
    'hero.cta': 'Explore Sires',
    
    'features.title': 'Black Hereford Cattle Adapted',
    'features.subtitle': 'Our goal is to create cattle that thrive in harsh environments.',
    'features.desc': 'We transform our traditional Hereford heritage into modern black genetics. We are certified members of the American Black Hereford Association (ABHA).',
    
    'features.f1': 'Adaptation to Extreme Environments',
    'features.f1_desc': 'Our cattle thrive where others fail. Castle Dale receives only 7 inches of rain annually.',
    
    'features.f2': 'Altitude and Movement',
    'features.f2_desc': 'Cattle climb to 10,600 feet elevation in summer. They travel 25 miles in 3 days.',
    
    'features.f3': 'Continuous Natural Selection',
    'features.f3_desc': 'Harsh environments apply natural pressure on the herd.',
    
    'features.f4': 'Pure Black Hereford Heritage',
    'features.f4_desc': 'We transform our traditional Hereford line into modern black genetics.',
    
    'footer.cta_title': 'Transform your herd with JO BULLS.',
    'footer.cta_desc': 'Request our Black Hereford sire catalog.',
    'footer.catalog': 'Explore JO BULLS Catalog',
    'footer.advisor': 'Speak with an Advisor',
    'footer.brand': 'Elite Black Herefords. ABHA Certified. Johansen, Utah.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    // Load language from localStorage on mount (client-side only)
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'es' || saved === 'en')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
