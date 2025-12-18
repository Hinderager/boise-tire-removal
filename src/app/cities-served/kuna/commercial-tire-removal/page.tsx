import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Tire Removal in Kuna | Boise Tire Removal',
  description: 'Professional commercial tire removal services in Kuna, Idaho. Fast, reliable tire removal. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisetireremoval.com/cities-served/kuna/commercial-tire-removal' },
}

export default function KunaCommercialTireRemovalPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial Tire Removal in Kuna</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional tire removal services serving Kuna and surrounding areas.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p>Top Shelf Tire Removal provides professional commercial tire removal services throughout Kuna and the surrounding Treasure Valley area. We make tire disposal simple and affordable.</p>
            <p>Whether you need to remove a few tires from your property or handle a large commercial cleanup, we're here to help. Same-day service available in most Kuna locations.</p>
            <p>Call us today at (208) 505-9352 for a free quote. We'll give you upfront pricing and can usually schedule pickup within 24 hours.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Kuna</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
