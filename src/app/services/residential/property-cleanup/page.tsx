import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Cleanup | Boise Tire Removal',
  description: 'Remove tire piles from residential properties in the Treasure Valley. Call (208) 505-9352 for fast service.',
  alternates: { canonical: 'https://boisetireremoval.com/services/residential/property-cleanup' },
}

export default function PropertyCleanupPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Property Cleanup</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Remove tire piles from residential properties.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p>Top Shelf Tire Removal provides professional property cleanup services throughout the Treasure Valley. We make tire disposal simple and affordable with fast, reliable service.</p>
            <p>Call us today at (208) 505-9352 for a free quote. Same-day service available in most areas.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
