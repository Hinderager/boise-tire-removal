import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Tire Recycling in Mountain Home | Boise Tire Removal',
  description: 'Professional tire recycling services in Mountain Home, Idaho. Fast, reliable tire removal. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-tire-removal.com/cities-served/mountain-home/tire-recycling' },
}

export default function MountainHomeTireRecyclingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tire Recycling in Mountain Home</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional tire removal services serving Mountain Home and surrounding areas.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p>Top Shelf Tire Removal provides professional tire recycling services throughout Mountain Home and the surrounding Treasure Valley area. We make tire disposal simple and affordable.</p>
            <p>Whether you need to remove a few tires from your property or handle a large commercial cleanup, we're here to help. Same-day service available in most Mountain Home locations.</p>
            <p>Call us today at (208) 943-5231 for a free quote. We'll give you upfront pricing and can usually schedule pickup within 24 hours.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Mountain Home</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
