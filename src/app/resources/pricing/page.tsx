import { Metadata } from 'next'
import { Phone, DollarSign, Truck, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tire Removal Pricing | Boise Tire Removal',
  description: 'Transparent pricing for tire removal in Boise and the Treasure Valley. Learn about our rates and what affects the cost.',
  alternates: { canonical: 'https://boisetireremoval.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tire Removal Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Simple, transparent pricing for tire disposal.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We price tire removal based on what you've got and where you're located. It's straightforward—no hidden fees or surprise charges. We'll give you a quote over the phone, and that's what you'll pay.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Calculator className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Per-Tire Pricing</h3>
                <p className="text-gray-600">Small loads priced by the tire—usually the best option for 1-10 tires.</p>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Flat-Rate Loads</h3>
                <p className="text-gray-600">Large quantities get a flat rate—more cost effective for bigger jobs.</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Commercial Rates</h3>
                <p className="text-gray-600">Regular service contracts available for auto shops and dealerships.</p>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">What Affects the Price?</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Type of Tire:</strong> Passenger car tires cost less than truck tires, which cost less than tractor tires. Size matters.</p>
                  <p><strong>Number of Tires:</strong> The more you have, the better the per-tire rate usually gets.</p>
                  <p><strong>Location:</strong> If you're way out in the sticks, there might be an extra trip charge. Most Treasure Valley locations are fine.</p>
                  <p><strong>Accessibility:</strong> Tires stacked in your garage? Easy. Buried in a back lot under weeds? That takes more time.</p>
                  <p><strong>Condition:</strong> Regular old tires are standard pricing. Tires full of dirt, on rims, or partially burned might cost more to process.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Typical Pricing Ranges</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between border-b pb-2">
                    <span><strong>1-5 Passenger Tires:</strong></span>
                    <span>$10-15 per tire</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span><strong>Light Truck Tires:</strong></span>
                    <span>$15-25 per tire</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span><strong>Large Truck/Equipment:</strong></span>
                    <span>$25-75+ per tire</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span><strong>Tractor/Farm Equipment:</strong></span>
                    <span>$75-200+ per tire</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span><strong>Bulk Loads (20+ tires):</strong></span>
                    <span>Custom flat rate</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">Prices are estimates and can vary based on specific circumstances. Call for an exact quote.</p>
              </div>

              <div className="bg-dark-blue p-8 rounded-lg text-white">
                <h2 className="text-2xl font-bold mb-4">Want an Exact Quote?</h2>
                <p className="mb-4">Just tell us what you've got and where you're located. We'll give you a firm price right over the phone.</p>
                <p className="text-sm text-gray-300">Most quotes take less than 2 minutes. No pressure to book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Your Quote Now</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
