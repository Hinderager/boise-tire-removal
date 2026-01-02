import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Fleet Tire Removal | Boise Tire Removal',
  description: 'Tire removal for commercial fleet operations in the Treasure Valley. Call (208) 943-5231 for fast service.',
  alternates: { canonical: 'https://boise-tire-removal.com/services/commercial/fleet-vehicles' },
}

export default function FleetVehiclesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Fleet Tire Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Tire removal for commercial fleet operations.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p>Top Shelf Tire Removal provides professional fleet tire removal services throughout the Treasure Valley. We make tire disposal simple and affordable with fast, reliable service.</p>
            <p>Call us today at (208) 943-5231 for a free quote. Same-day service available in most areas.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
