import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Home } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Residential Tire Removal Treasure Valley | Boise Tire Removal',
  description: 'Residential tire removal services for homeowners. We pick up old tires from your garage, backyard, or property. Serving Boise, Meridian, Nampa & the Treasure Valley.',
  alternates: { canonical: 'https://boise-tire-removal.com/services/residential' },
}

const services = [
  { name: 'Property Cleanup', href: '/services/residential/property-cleanup', description: 'Remove tire piles and scattered tires from your property.' },
  { name: 'Garage Tire Removal', href: '/services/residential/garage-tires', description: 'Get rid of old tires taking up space in your garage.' },
  { name: 'Backyard Tire Removal', href: '/services/residential/backyard-tires', description: 'Clear tires from your yard, garden, or outdoor areas.' },
]

export default function ResidentialPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <Home className="w-16 h-16 text-[#FFC845] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Residential Tire Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Quick, affordable tire removal for homeowners throughout the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Got old tires cluttering your property? We'll come pick them up. No matter where they are—stacked in your garage, piled in the backyard, or scattered around your property—we handle the whole job.</p>
              <p>Most homeowners have anywhere from 2 to 20 old tires they've been meaning to deal with. Maybe they came with the house, maybe you've been replacing them over the years. Either way, we'll get them out of your way fast.</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Residential Services</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6] transition-colors">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-dark-blue font-semibold group-hover:text-[#0b7fb6]">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#FFC845] mb-2">1</div>
                  <h4 className="font-bold text-dark-blue mb-2">Call for Quote</h4>
                  <p className="text-gray-600">Tell us how many tires you have and where you're located.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FFC845] mb-2">2</div>
                  <h4 className="font-bold text-dark-blue mb-2">Schedule Pickup</h4>
                  <p className="text-gray-600">We'll set a time that works for you. Same-day service available.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FFC845] mb-2">3</div>
                  <h4 className="font-bold text-dark-blue mb-2">We Load & Haul</h4>
                  <p className="text-gray-600">We do all the work. You don't lift a finger.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Clear Out Those Tires?</h2>
          <p className="text-xl text-gray-300 mb-8">Call now for a free quote.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
