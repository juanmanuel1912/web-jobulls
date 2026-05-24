'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-2 rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
          language === 'es'
            ? 'bg-accent-gold text-hero-green'
            : 'text-accent-gold border border-accent-gold hover:bg-accent-gold/10'
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-2 rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
          language === 'en'
            ? 'bg-accent-gold text-hero-green'
            : 'text-accent-gold border border-accent-gold hover:bg-accent-gold/10'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
