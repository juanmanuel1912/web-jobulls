import CameraScroll from '@/components/CameraScroll'
import Products from '@/components/Products'
import CatalogCTA from '@/components/CatalogCTA'
import Gallery from '@/components/Gallery'
import Videos from '@/components/Videos'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import Specs from '@/components/Specs'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      {/* Hero — Scrollytelling */}
      <CameraScroll />

      {/* Elite Sires Gallery */}
      <Products />

      {/* Catalog CTA */}
      <CatalogCTA />

      {/* Photo Gallery */}
      <Gallery />

      {/* Videos Section */}
      <Videos />

      {/* Breeding Philosophy */}
      <Features />

      {/* Breeding Programs */}
      <UseCases />

      {/* Genomics & Specs */}
      <Specs />

      {/* Testimonials */}
      <Reviews />

      {/* Footer + Final CTA */}
      <Footer />
    </main>
  )
}
