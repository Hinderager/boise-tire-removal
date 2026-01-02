import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Tire Pile Cleanup | Boise Tire Removal',
  description: 'Large-scale tire pile removal services in the Treasure Valley. Call (208) 943-5231 for fast service.',
  alternates: { canonical: 'https://boise-tire-removal.com/services/bulk-removal/tire-piles' },
}

export default function TirePilesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tire Pile Cleanup</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Large-scale tire pile removal services.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p>Top Shelf Tire Removal provides professional tire pile cleanup services throughout the Treasure Valley. No job is too big—we handle everything from small piles to massive commercial cleanups.</p>
            <p>Call us today at (208) 943-5231 for a free quote. We'll assess the job and give you a fair, upfront price.</p>
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
