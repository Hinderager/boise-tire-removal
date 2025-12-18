import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Does Tire Removal Cost? | Tire Removal Pros',
  description: 'Tire disposal fees vary by type and quantity. Here\'s what to budget for tire removal in the Boise area.',
  alternates: {
    canonical: 'https://boise-tire-removal.com/blogs/tire-removal-cost',
  },
}

export default function TireRemovalCost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/tire-removal-pricing.webp"
          alt="Tire Removal Cost"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How Much Does Tire Removal Cost?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got tires to get rid of. Before you call around for quotes, it helps to know what's normal. Tire disposal pricing in the Boise area varies quite a bit depending on how many tires, what type, and how you're getting them removed.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a realistic breakdown of what tire removal costs.
            </p>
          </div>
        </div>
      </section>

      {/* Cost by Tire Type */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Cost by Tire Type
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Not all tires cost the same to dispose of:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Passenger car tires:</strong> $3-8 per tire. These are the cheapest and most common. Standard sedan, SUV, and light truck tires fall in this category.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Light truck/SUV tires:</strong> $5-10 per tire. Larger and heavier than passenger tires, but still within standard processing equipment capabilities.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Commercial truck tires:</strong> $10-25 per tire. Semi tires and large commercial vehicle tires require more handling and cost more to dispose.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Farm/tractor tires:</strong> $15-50+ per tire depending on size. Large tractor tires are heavy and difficult to process.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Off-the-road (OTR) tires:</strong> $50-200+ per tire. Mining equipment, large loaders, and similar equipment have massive tires that require specialized handling.
            </p>
          </div>
        </div>
      </section>

      {/* Drop-Off vs Pickup */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Drop-Off vs. Pickup Service
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              How you get rid of tires affects the price:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Self drop-off at tire shop:</strong> Cheapest option. $2-5 per passenger tire when buying new tires, $3-8 for drop-off only</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Self drop-off at transfer station:</strong> Similar to tire shop prices plus any facility admission fees</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Professional pickup:</strong> Higher per-tire cost but includes labor, transportation, and convenience. Better value for larger quantities</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Minimum charges:</strong> Most pickup services have minimum fees since it's not worth driving across town for one tire</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Pickup Pricing */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Professional Pickup Pricing
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              What to expect when hiring a removal service:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Small residential jobs (1-10 tires):</strong> $75-150 typically, which includes a service call plus per-tire fees. The minimum charge covers travel and handling time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Medium jobs (10-50 tires):</strong> Per-tire pricing drops as quantity increases. Expect $5-10 per tire for standard sizes at these volumes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Large/commercial jobs (50+ tires):</strong> Bulk pricing kicks in. Per-tire costs can drop to $3-6 for large quantities of standard tires.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Mixed tire types:</strong> Jobs with a mix of passenger, truck, and specialty tires get quoted based on the specific inventory.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects the Price */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Affects Your Price
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond tire type and quantity, other factors matter:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Location.</strong> Jobs within Boise, Meridian, and Nampa city limits typically have standard pricing. Rural locations or farther communities may have travel fees.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Accessibility.</strong> Tires stacked neatly near your driveway cost less than tires scattered across a property or buried in brush.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tire condition.</strong> Clean, dry tires are easier to handle than tires full of water, mud, or debris.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Rims attached.</strong> Tires still on rims cost more because the rims must be removed before recycling.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Regular vs. one-time service.</strong> Businesses needing ongoing tire pickup can often negotiate better per-tire rates than one-time customers.
            </p>
          </div>
        </div>
      </section>

      {/* Hidden Costs to Watch For */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Hidden Costs to Watch For
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              When comparing quotes, make sure you understand what's included:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disposal fees.</strong> Some quotes are "pickup only" with disposal fees additional. Make sure the quote includes proper disposal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Minimum charges.</strong> A quote of "$5 per tire" might not mention the $75 minimum. Ask about minimums upfront.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Rim removal.</strong> If your tires are on rims, confirm whether rim removal is included or extra.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Loading labor.</strong> Does the price include loading the tires, or are you expected to have them stacked and ready?
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              For a few passenger tires, dropping them off yourself at a tire shop or transfer station is cheapest—typically $3-8 per tire. For larger quantities, professional pickup makes more sense and the per-tire cost drops significantly.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When getting quotes for pickup service, make sure you understand the total cost including disposal, minimums, and any extras. A complete quote prevents surprises.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whatever you do, don't let cost drive you toward illegal dumping. The fines for getting caught far exceed any amount you'd save—and you will get caught eventually.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Get a Quick Quote
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us what you've got and we'll give you a straightforward price. No hidden fees, no surprises.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Tire Removal Resources
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
