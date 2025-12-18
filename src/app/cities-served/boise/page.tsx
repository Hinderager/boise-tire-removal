import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tire Removal in Boise | Boise Tire Removal',
  description: 'Professional tire removal and disposal services in Boise, Idaho. Residential, commercial, and agricultural tire pickup. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisetireremoval.com/cities-served/boise' },
}

const services = [
  { name: 'Residential Tire Removal', href: '/cities-served/boise/residential-tire-removal', description: 'Residential Tire Removal services in Boise' },
  { name: 'Commercial Tire Removal', href: '/cities-served/boise/commercial-tire-removal', description: 'Commercial Tire Removal services in Boise' },
  { name: 'Farm Tire Removal', href: '/cities-served/boise/farm-tire-removal', description: 'Farm Tire Removal services in Boise' },
  { name: 'Bulk Tire Removal', href: '/cities-served/boise/bulk-tire-removal', description: 'Bulk Tire Removal services in Boise' },
  { name: 'Tire Recycling', href: '/cities-served/boise/tire-recycling', description: 'Tire Recycling services in Boise' },
  { name: 'Tire Disposal', href: '/cities-served/boise/tire-disposal', description: 'Tire Disposal services in Boise' },
  { name: 'Same-Day Tire Removal', href: '/cities-served/boise/same-day-tire-removal', description: 'Same-Day Tire Removal services in Boise' },
  { name: 'Property Tire Cleanup', href: '/cities-served/boise/property-tire-cleanup', description: 'Property Tire Cleanup services in Boise' }
]

export default function BoisePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tire Removal in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional tire disposal services for Boise residents and businesses.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Top Shelf Tire Removal serves the Boise area with fast, affordable tire removal and recycling services. We handle everything from a single tire to bulk commercial loads.</p>
              <p>Whether you're a homeowner with old tires cluttering your garage, a business that needs regular pickup, or a property owner dealing with a tire pile, we make disposal simple. Call us for a free quote and same-day service in most Boise locations.</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Services in Boise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Boise & Surrounding Areas</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
