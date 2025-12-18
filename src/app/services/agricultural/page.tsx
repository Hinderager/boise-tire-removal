import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Warehouse } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agricultural Tire Removal Treasure Valley | Boise Tire Removal',
  description: 'Farm and agricultural tire removal services. We handle tractor tires, equipment tires, and large ag tires. Serving Boise, Meridian, Nampa & the Treasure Valley.',
  alternates: { canonical: 'https://boisetireremoval.com/services/agricultural' },
}

const services = [
  { name: 'Farm Tire Removal', href: '/services/agricultural/farm-tires', description: 'Disposal of agricultural and farm equipment tires.' },
  { name: 'Tractor Tire Removal', href: '/services/agricultural/tractor-tires', description: 'Large tractor tire removal and disposal.' },
  { name: 'Equipment Tire Removal', href: '/services/agricultural/equipment-tires', description: 'Heavy equipment and machinery tire removal.' },
]

export default function AgriculturalPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <Warehouse className="w-16 h-16 text-[#FFC845] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Agricultural Tire Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Farm and equipment tire disposal for the Treasure Valley agricultural community.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Agricultural tires are a different beast. They're huge, they're heavy, and most places won't touch them. We handle farm and equipment tires of all sizes, from small tractor tires to massive combine and irrigation equipment tires.</p>
              <p>We've worked with farms and ranches all over the Treasure Valley. We know these tires are expensive to replace and a pain to dispose of. We make the disposal part easy.</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Agricultural Services</h2>
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
              <h3 className="text-2xl font-bold text-dark-blue mb-4">We Handle Large Tires</h3>
              <div className="space-y-3 text-gray-600">
                <p>Agricultural tires require special equipment and processing. We're set up to handle:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tractor tires (all sizes)</li>
                  <li>Combine and harvester tires</li>
                  <li>Irrigation equipment tires</li>
                  <li>Skid steer and loader tires</li>
                  <li>Implement and trailer tires</li>
                  <li>ATV and utility vehicle tires</li>
                </ul>
                <p className="mt-4">Pricing depends on size and condition. Call for a quote based on what you've got.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Farm Tire Removal?</h2>
          <p className="text-xl text-gray-300 mb-8">Call for pricing on agricultural tires.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
