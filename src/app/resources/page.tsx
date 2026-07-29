import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, Recycle, Scale } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Tire Removal Resources | Boise Tire Removal',
  description: 'What you need to know about getting rid of tires in Idaho: disposal laws and penalties, how pricing works, where recycled tires end up, and common questions.',
  alternates: { canonical: 'https://boise-tire-removal.com/resources' },
}

const resources = [
  {
    icon: HelpCircle,
    name: 'Frequently Asked Questions',
    href: '/resources/faq',
    description: 'How pickup works, whether rims need to come off, minimum counts, and scheduling.',
  },
  {
    icon: DollarSign,
    name: 'Pricing',
    href: '/resources/pricing',
    description: 'How tire disposal is priced and why size, quantity, and location change the number.',
  },
  {
    icon: Scale,
    name: 'Idaho Disposal Laws',
    href: '/resources/regulations',
    description: 'Illegal dumping penalties, what businesses are required to do, and approved disposal methods.',
  },
  {
    icon: Recycle,
    name: 'How Tires Get Recycled',
    href: '/resources/recycling-info',
    description: 'What happens to a tire after we pick it up, and the products it gets turned into.',
  },
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tire Disposal Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">The rules, the costs, and what really happens to old tires in Idaho.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Tire disposal has more rules attached to it than most people expect. Idaho treats scrap tires differently from regular waste, and dumping them the wrong way carries real penalties.</p>
              <p>We put together these guides so you know where you stand before you deal with a pile in Boise, Nampa, or out on a Middleton property. Read what applies to you, then call if you&apos;d rather we just take care of it.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="group bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-[#FFC845] mb-4" />
                    <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{resource.name}</h2>
                    <p className="text-gray-600">{resource.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Skip the Research</h2>
          <p className="text-gray-300 mb-6">We handle the hauling and the paperwork side of disposal.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
