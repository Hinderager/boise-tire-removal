import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Award, Shield, Users, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Boise Tire Removal',
  description: 'Learn about Top Shelf Tire Removal. Local tire disposal experts serving the Treasure Valley. Licensed, insured, and committed to responsible recycling.',
  alternates: { canonical: 'https://boisetireremoval.com/about-us' },
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Top Shelf Tire Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Your trusted local tire disposal and recycling experts in the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Tire Removal is a locally owned and operated tire disposal company serving homeowners and businesses throughout the Treasure Valley. We handle everything from a single tire in your garage to entire tire piles on commercial properties.</p>
              <p>We're not just about hauling away your old tires. We're committed to responsible recycling and keeping Idaho clean. Every tire we pick up gets processed properly, either recycled into new products or disposed of according to state regulations.</p>
              <p>Whether you're a homeowner with a few old tires cluttering your property, a farmer with equipment tires to replace, or an auto shop looking for regular pickup service, we make tire disposal simple and affordable.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Award className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed waste haulers with comprehensive insurance coverage.</p>
              </div>
              <div className="text-center">
                <Recycle className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">Every tire is recycled or disposed of responsibly per Idaho regulations.</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Local Team</h3>
                <p className="text-gray-600">Treasure Valley residents serving our neighbors.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/about-us/testimonials" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Customer Reviews</h4>
                <p className="text-sm text-gray-600">See what our customers say about us</p>
              </Link>
              <Link href="/about-us/licenses-insurance" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Licenses & Insurance</h4>
                <p className="text-sm text-gray-600">Our credentials and coverage</p>
              </Link>
              <Link href="/about-us/why-choose-us" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Why Choose Us</h4>
                <p className="text-sm text-gray-600">What makes us different</p>
              </Link>
              <Link href="/about-us/careers" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Careers</h4>
                <p className="text-sm text-gray-600">Join our team</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Rid of Those Old Tires?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
