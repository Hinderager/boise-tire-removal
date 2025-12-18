import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bulk Tire Removal for Businesses and Farms | Tire Removal Pros',
  description: 'Got a lot of tires to get rid of? Here\'s how bulk tire removal works for commercial clients in the Boise area.',
  alternates: {
    canonical: 'https://boise-tire-removal.com/blogs/bulk-tire-removal-for-businesses',
  },
}

export default function BulkTireRemovalForBusinesses() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/bulk-tire-removal.webp"
          alt="Bulk Tire Removal for Businesses"
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
            Bulk Tire Removal for Businesses and Farms
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got a pile of tires. Maybe it's accumulated over years of fleet operations, farming, or running a tire shop. Now you need them gone—all of them—and regular disposal options don't cut it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bulk tire removal for businesses is different from residential pickups. Here's how it works in the Treasure Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Who Needs Bulk Removal */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Who Needs Bulk Tire Removal?
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              We work with various commercial clients in the Boise area:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Farms and ranches.</strong> Agriculture generates huge numbers of tires—equipment, trailers, feedlot barriers. Many Canyon County farms have tire piles that have grown for decades.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tire shops and auto dealers.</strong> Customer tires stack up fast. Storage space fills up. Regular disposal becomes overwhelming.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fleet operations.</strong> Trucking companies, delivery services, municipalities—any business with vehicles generates tire waste.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Property managers and landlords.</strong> Inherited tire piles from previous tenants or businesses are common cleanup situations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Construction and demo sites.</strong> Clearing land often uncovers buried or dumped tires that need removal before the project proceeds.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Why Bulk Tires Are Different
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Large tire quantities create unique challenges:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Volume overwhelms normal channels.</strong> Drop-off facilities have limits. You can't just show up with a trailer full of 500 tires.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mixed tire types.</strong> Passenger tires, truck tires, farm equipment tires, and OTR (off-the-road) tires all have different disposal requirements and costs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Access and logistics.</strong> Loading hundreds of tires requires equipment and manpower. Farm tire piles might be in remote locations with limited road access.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Regulatory compliance.</strong> Businesses face stricter disposal requirements than homeowners. You need documentation that tires were disposed of properly.
            </p>
          </div>
        </div>
      </section>

      {/* How Bulk Removal Works */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How Bulk Tire Removal Works
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              The process for commercial clients:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Site assessment:</strong> We visit your location to count tires, assess tire types, evaluate access, and plan the removal logistics</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Custom quote:</strong> Bulk pricing is per-tire or per-load depending on quantity. Large volumes get significant price breaks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Scheduled pickup:</strong> We bring appropriate equipment—typically flatbed trailers with high capacity for large loads</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Loading and hauling:</strong> Our crew loads the tires. For very large piles, this may take multiple trips over several days</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Proper disposal:</strong> Tires go to licensed recycling facilities. We can provide documentation for your records</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Pricing */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Bulk Pricing Considerations
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              What affects commercial tire removal pricing:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Volume discounts.</strong> Per-tire pricing drops significantly at higher quantities. A hundred tires costs much less per tire than ten.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tire types.</strong> Passenger tires are cheapest to dispose of. Large truck tires cost more. Farm and construction equipment tires (especially large OTR tires) have the highest disposal fees.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Condition.</strong> Clean, intact tires cost less than tires filled with dirt, water, or debris.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Location.</strong> Sites closer to Boise with good truck access are more economical than remote locations requiring long hauls on rural roads.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Ongoing service.</strong> Businesses that need regular pickups can often negotiate better rates than one-time cleanups.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Service */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Ongoing Service for Businesses
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Many commercial clients need regular tire removal:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tire shops and dealers.</strong> Weekly or monthly scheduled pickups keep your storage under control without you thinking about it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fleet maintenance.</strong> Scheduled pickups coordinated with your tire rotation and replacement cycles.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>On-call service.</strong> Call when you've accumulated enough tires to warrant a pickup. We come within a few days.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Regular service clients get priority scheduling and consistent pricing. It's easier than managing tire disposal yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Bulk tire removal is a logistics problem, not an impossible one. With the right equipment and relationships with recycling facilities, even large tire piles can be cleared efficiently.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The key is working with a company that handles bulk commercial work regularly—not just residential pickups. We have the capacity, equipment, and disposal relationships to handle large-scale jobs throughout the Treasure Valley.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you need a one-time cleanup or ongoing service, we can put together a program that works for your business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Bulk Tire Removal?
            </h2>
            <p className="text-gray-600 mb-8">
              We provide commercial tire removal throughout Boise, Meridian, Nampa, Caldwell, and the surrounding Treasure Valley. Free site assessments and quotes.
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
