import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Layers } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Bulk Tire Removal Treasure Valley | Boise Tire Removal',
  description: 'Large-scale bulk tire removal services. Tire pile cleanup, illegal dump cleanup, and property clearing. Serving Boise, Meridian, Nampa & the Treasure Valley.',
  alternates: { canonical: 'https://boise-tire-removal.com/services/bulk-removal' },
}

const services = [
  { name: 'Tire Pile Cleanup', href: '/services/bulk-removal/tire-piles', description: 'Large-scale tire pile removal services.' },
  { name: 'Illegal Dump Cleanup', href: '/services/bulk-removal/illegal-dumps', description: 'Cleanup of illegally dumped tires.' },
  { name: 'Property Clearing', href: '/services/bulk-removal/property-clearing', description: 'Complete tire removal from properties.' },
]

export default function BulkRemovalPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <Layers className="w-16 h-16 text-[#FFC845] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Bulk Tire Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Large-scale tire removal for properties, cleanups, and bulk disposal projects.</p>
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
              <p>Got a serious tire problem? Maybe you bought a property with 200 tires in the back lot. Or you're dealing with an illegal dump site. Or you're clearing land and found a massive tire pile. We handle it.</p>
              <p>No job is too big. We've hauled away everything from 50-tire piles to entire fields covered in discarded tires. We'll assess the site, give you a flat rate for the whole job, and get it cleaned up fast.</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Bulk Removal Services</h2>
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
              <h3 className="text-2xl font-bold text-dark-blue mb-4">How Bulk Removal Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#FFC845] mb-2">1</div>
                  <h4 className="font-bold text-dark-blue mb-2">Site Assessment</h4>
                  <p className="text-gray-600">We come out to look at the job. Photos work too if it's straightforward.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FFC845] mb-2">2</div>
                  <h4 className="font-bold text-dark-blue mb-2">Flat-Rate Quote</h4>
                  <p className="text-gray-600">We give you one price for the entire cleanup. No surprises.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FFC845] mb-2">3</div>
                  <h4 className="font-bold text-dark-blue mb-2">Complete Removal</h4>
                  <p className="text-gray-600">We haul everything away and dispose of it properly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Got a Big Tire Cleanup Project?</h2>
          <p className="text-xl text-gray-300 mb-8">Call for a site visit and free quote.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
