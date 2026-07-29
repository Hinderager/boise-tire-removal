import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Home, Building2, Wheat, Truck } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Tire Removal Services | Boise Tire Removal',
  description: 'Tire removal for homes, businesses, farms, and big tire piles across Boise, Meridian, Nampa, and the Treasure Valley. Any quantity, proper recycling. (208) 943-5231.',
  alternates: { canonical: 'https://boise-tire-removal.com/services' },
}

const services = [
  {
    icon: Home,
    name: 'Residential Tire Removal',
    href: '/services/residential',
    description: 'A few old tires in the garage, the side yard, or the back of a shed. We load them and go.',
  },
  {
    icon: Building2,
    name: 'Commercial Tire Removal',
    href: '/services/commercial',
    description: 'Scheduled pickups for auto shops, dealerships, and fleets that go through tires every week.',
  },
  {
    icon: Wheat,
    name: 'Agricultural Tire Removal',
    href: '/services/agricultural',
    description: 'Tractor tires, implement tires, and the oversized ag rubber most haulers turn down.',
  },
  {
    icon: Truck,
    name: 'Bulk Tire Removal',
    href: '/services/bulk-removal',
    description: 'Tire piles, illegal dumps, and property cleanups where the count runs into the hundreds.',
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Tire Removal Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">From four tires in the garage to a pile of a thousand, we haul them all.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Tires are one of the few things you can&apos;t just set on the curb. Landfills won&apos;t take them whole, and Idaho has rules about where they can end up.</p>
              <p>So we sort it out for you. Pick the service that matches your situation below &mdash; every one of them ends the same way, with your tires going to a licensed recycler instead of a ditch somewhere.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-[#FFC845] mb-4" />
                    <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{service.name}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Got Tires to Get Rid Of?</h2>
          <p className="text-gray-300 mb-6">Tell us roughly how many and where they are. We&apos;ll quote it.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
