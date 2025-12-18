import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tire Disposal Options in Boise: What Are Your Choices? | Tire Removal Pros',
  description: 'Old tires can\'t go in the trash. Here are your legal options for tire disposal in the Boise area.',
  alternates: {
    canonical: 'https://boise-tire-removal.com/blogs/tire-disposal-options-boise',
  },
}

export default function TireDisposalOptionsBoise() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/tire-disposal-options.webp"
          alt="Tire Disposal Options in Boise"
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
            Tire Disposal Options in Boise
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got old tires in your garage, yard, or driveway. Maybe they came off your vehicle, accumulated from an old project, or were left behind by previous owners. Now you need to get rid of them.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The problem: tires can't go in regular trash. Idaho law prohibits putting tires in landfills. So what are your options in the Boise area? Here's a complete rundown.
            </p>
          </div>
        </div>
      </section>

      {/* Option 1: Tire Retailers */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Option 1: Tire Retailers
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The most common option for a few tires:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>When buying new tires.</strong> Shops charge $2-5 per tire for disposal as part of your purchase. They're required to take your old tires.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Dropping off old tires.</strong> Many shops accept tires even without a purchase, though fees may be slightly higher ($3-8 per tire typically).
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Where to go.</strong> Les Schwab, Discount Tire, Big O Tires, Costco Tire Center, and local shops throughout Boise, Meridian, and Nampa all accept tires.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> 1-4 passenger tires. Quick and convenient if you're already getting tires serviced.
            </p>
          </div>
        </div>
      </section>

      {/* Option 2: Transfer Stations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 2: County Transfer Stations
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Local waste facilities accept tires:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ada County.</strong> Hidden Hollow Landfill and transfer stations accept tires. Fees are per tire—passenger tires around $3-5, truck tires $5-10, large equipment tires higher.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Canyon County.</strong> Pickles Butte Landfill and local transfer stations have similar programs with comparable fees.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Limits apply.</strong> Most facilities limit residential drop-offs to 4-8 tires per visit. Larger quantities may require special arrangements or commercial accounts.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> Moderate quantities (up to 8 tires), especially if you're already making a dump run with other items.
            </p>
          </div>
        </div>
      </section>

      {/* Option 3: Collection Events */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Option 3: Community Collection Events
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Periodic free or reduced-cost events:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Earth Day events:</strong> Many communities hold free tire collection in April as part of Earth Day activities</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Community cleanup days:</strong> Watch for announcements from your city or county about periodic cleanup events</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>DEQ programs:</strong> Idaho DEQ occasionally sponsors tire collection events, especially in rural areas</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              <strong>Best for:</strong> Saving money if you can wait for an event. Check city websites and local news for announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Option 4: Professional Removal */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 4: Professional Tire Removal Services
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Hire someone to come get them:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Pickup from your location.</strong> We come to your home or business and load the tires. No hauling required on your part.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Any quantity.</strong> From a few tires in your garage to hundreds on a farm—professional services can handle any volume.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>All tire types.</strong> Passenger, truck, farm equipment, OTR—we take everything. Transfer stations and retailers sometimes won't accept large or unusual tires.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> Larger quantities, heavy/bulky tires, or situations where you don't have transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Option 5: Repurposing */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 5: Repurpose or Sell
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes tires still have value:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Usable tread remaining.</strong> Tires with decent tread can sometimes be sold on Facebook Marketplace or Craigslist, especially if they're uncommon sizes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Garden and landscaping.</strong> Some people want tires for planters, retaining walls, or playground equipment. List them free on local marketplaces.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Animal use.</strong> Farms sometimes want tires for silage covers or feedlot barriers. Rural listings may find takers.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Reality check:</strong> Most old tires aren't wanted by anyone. If you can't give them away within a week or two, move on to paid disposal options.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Cost Comparison
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Typical costs for passenger tires in the Boise area:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tire retailers (with purchase):</strong> $2-5 per tire
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tire retailers (drop-off only):</strong> $3-8 per tire
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Transfer stations:</strong> $3-5 per tire (passenger), plus dump admission fee
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Collection events:</strong> Free (when available)
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Professional pickup:</strong> Varies by quantity and tire type—call for quote
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
              You have options for getting rid of old tires legally in Boise. For a few tires, drop-off at a tire shop or transfer station is cheapest. For larger quantities or heavy tires, professional pickup is often the most practical choice.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Whatever you do, don't dump tires illegally. The fines far exceed proper disposal costs, and you're creating environmental problems for the community.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Pick the option that fits your situation and budget. All of them beat having tires pile up in your yard.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Tire Pickup?
            </h2>
            <p className="text-gray-600 mb-8">
              We pick up tires throughout Boise, Meridian, Nampa, and the Treasure Valley. Any quantity, any type.
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
