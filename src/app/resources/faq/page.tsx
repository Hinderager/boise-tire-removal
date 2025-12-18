import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Boise Tire Removal',
  description: 'Common questions about tire removal and disposal in Boise and the Treasure Valley. Get answers about pricing, pickup, and recycling.',
  alternates: { canonical: 'https://boisetireremoval.com/resources/faq' },
}

export default function FAQPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything you need to know about tire removal and disposal.</p>
        </div>
      </section>
      <FAQ />
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
