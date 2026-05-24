'use client'

import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/app/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero-green/95 backdrop-blur-sm border-b border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <p className="font-serif text-xl font-bold text-body-cream">JO BULLS</p>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search.placeholder') || 'Buscar sementales...'}
              className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-2 text-sm text-body-cream placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-accent-gold transition-colors"
              aria-label="Buscar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Navigation + Language Switcher */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-body-cream text-sm font-semibold hover:text-accent-gold transition-colors">
              {t('nav.home')}
            </a>
            <a href="/#sires" className="text-body-cream text-sm font-semibold hover:text-accent-gold transition-colors">
              {t('nav.sires')}
            </a>
            <a href="/#philosophy" className="text-body-cream text-sm font-semibold hover:text-accent-gold transition-colors">
              {t('nav.program')}
            </a>
            <a href="/#specs" className="text-body-cream text-sm font-semibold hover:text-accent-gold transition-colors">
              {t('nav.specs')}
            </a>
            <a href="/#reviews" className="text-body-cream text-sm font-semibold hover:text-accent-gold transition-colors">
              {t('nav.reviews')}
            </a>
            <a href="/contact" className="text-body-cream text-sm font-semibold hover:text-accent-gold transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
