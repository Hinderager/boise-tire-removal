import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Tire Removal Treasure Valley | Boise Tire Removal',
  description: 'Commercial tire removal services for businesses. Regular pickup for auto shops, dealerships, and fleet operations. Serving Boise, Meridian, Nampa & the Treasure Valley.',
  alternates: { canonical: 'https://boise-tire-removal.com/services/commercial' },
}

const services = [
  { name: 'Auto Shop Tire Pickup', href: '/services/commercial/auto-shops', description: 'Regular scheduled tire removal for auto repair shops.' },
  { name: 'Dealership Tire Removal', href: '/services/commercial/dealerships', description: 'Tire disposal services for car dealerships.' },
  { name: 'Fleet Tire Removal', href: '/services/commercial/fleet-vehicles', description: 'Tire removal for commercial fleet operations.' },
]

export default function CommercialPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="w-16 h-16 text-[#FFC845] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial Tire Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Reliable tire disposal services for businesses throughout the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>If your business generates scrap tires, you need a reliable disposal partner. We provide scheduled pickup services for auto shops, dealerships, fleet operators, and any business that needs regular tire removal.</p>
              <p>We handle all the documentation, follow Idaho DEQ regulations, and make sure you're always compliant. No hassle, no surprises—just reliable service when you need it.</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Commercial Services</h2>
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
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Contract Services Available</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                <div>
                  <h4 className="font-bold text-dark-blue mb-2">Weekly Pickup</h4>
                  <p>Regular scheduled service to keep your inventory under control.</p>
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue mb-2">On-Demand Service</h4>
                  <p>Call when you need us—no contract required.</p>
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue mb-2">Documentation</h4>
                  <p>We provide all required disposal records for compliance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue mb-2">Volume Discounts</h4>
                  <p>Better rates for regular customers and high-volume accounts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Commercial Tire Removal?</h2>
          <p className="text-xl text-gray-300 mb-8">Call to discuss contract pricing and scheduling.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
