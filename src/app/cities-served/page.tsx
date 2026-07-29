import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Cities We Serve | Boise Tire Removal',
  description: 'Tire removal and disposal across the Treasure Valley: Boise, Meridian, Nampa, Caldwell, Eagle, Star, Kuna, Garden City, Middleton, Mountain Home. (208) 943-5231.',
  alternates: { canonical: 'https://boise-tire-removal.com/cities-served' },
}

const cities = [
  { name: 'Boise', slug: 'boise', county: 'Ada County', description: 'Residential, commercial, and shop tire pickup across the city.' },
  { name: 'Meridian', slug: 'meridian', county: 'Ada County', description: 'Garage cleanouts and auto shop pickups throughout Meridian.' },
  { name: 'Nampa', slug: 'nampa', county: 'Canyon County', description: 'Tire hauling for homes, shops, and rural properties in Nampa.' },
  { name: 'Caldwell', slug: 'caldwell', county: 'Canyon County', description: 'Farm and residential tire removal around Caldwell.' },
  { name: 'Eagle', slug: 'eagle', county: 'Ada County', description: 'Tire pickup for homes and acreage in the Eagle area.' },
  { name: 'Garden City', slug: 'garden-city', county: 'Ada County', description: 'Quick pickups for shops and small businesses in Garden City.' },
  { name: 'Kuna', slug: 'kuna', county: 'Ada County', description: 'Ag and equipment tire removal on properties south of Boise.' },
  { name: 'Star', slug: 'star', county: 'Ada County', description: 'Tire removal for homes, farms, and job sites in Star.' },
  { name: 'Middleton', slug: 'middleton', county: 'Canyon County', description: 'Tractor tires and tire piles cleared from Middleton acreage.' },
  { name: 'Mountain Home', slug: 'mountain-home', county: 'Elmore County', description: 'We run out to Mountain Home for larger tire jobs.' },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Tire pickup and recycling across the Treasure Valley.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We cover the whole valley, and the job looks a little different depending on where you are. In town it&apos;s usually a handful of passenger tires out of a garage. Out toward Kuna or Middleton it&apos;s tractor tires and old piles behind a barn.</p>
              <p>Find your city below for details on what we pick up there and how soon we can be out.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities-served/${city.slug}`}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-xl font-bold text-dark-blue">{city.name}</h2>
                      <p className="text-xs text-gray-500">{city.county}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{city.description}</p>
                  <p className="text-sm text-dark-blue font-medium mt-3">See tire removal here &rarr;</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure If We Come Your Way?</h2>
          <p className="text-gray-300 mb-6">Give us a call. We cover more of the valley than this list.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
