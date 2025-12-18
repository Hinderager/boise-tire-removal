import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Recycle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Tire Recycling Works in Idaho | Tire Removal Pros',
  description: 'Old tires get a second life in surprising ways. Here\'s what happens to tires after pickup in Idaho.',
  alternates: {
    canonical: 'https://boise-tire-removal.com/blogs/tire-recycling-idaho',
  },
}

export default function TireRecyclingIdaho() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/tire-recycling-process.webp"
          alt="How Tire Recycling Works"
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
            How Tire Recycling Works in Idaho
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You hand over your old tires for disposal. They get loaded on a truck and driven away. But then what? Do they just pile up somewhere?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Actually, most tires collected in Idaho get recycled into useful products. Here's what happens to your old tires after pickup.
            </p>
          </div>
        </div>
      </section>

      {/* Why Tires Can't Be Landfilled */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Why Tires Can't Be Landfilled
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Idaho law prohibits putting whole tires in landfills. Here's why:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tires don't compress.</strong> Their shape traps air, taking up space that could be used for other waste. They also tend to work their way back to the surface over time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fire risk.</strong> Underground tire fires are extremely difficult to extinguish and can burn for years, releasing toxic fumes and contaminating groundwater.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Valuable materials.</strong> Tires contain rubber, steel, and fiber that can be recovered and reused. Landfilling wastes these resources.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Better alternatives exist.</strong> Modern tire recycling technology makes landfilling unnecessary for most tires.
            </p>
          </div>
        </div>
      </section>

      {/* The Recycling Process */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              The Tire Recycling Process
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              What happens at a tire recycling facility:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Shredding:</strong> Tires are fed into industrial shredders that cut them into rough chunks. Multiple passes reduce the material to smaller and smaller pieces</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Steel separation:</strong> Powerful magnets pull out the steel belts and bead wire. This steel gets recycled into new steel products</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Fiber separation:</strong> Air classification and screening removes the textile fibers from the rubber</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Rubber processing:</strong> The rubber crumb is cleaned, screened to size, and packaged for various end uses</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              The result: about 85% of the tire gets turned into reusable material.
            </p>
          </div>
        </div>
      </section>

      {/* What Recycled Tires Become */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Recycled Tires Become
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Old tires get new life in surprising applications:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Rubberized asphalt.</strong> Ground rubber mixed into road paving material makes quieter, longer-lasting roads. You've probably driven on roads containing recycled tires.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Playground surfaces.</strong> The springy rubber mulch on playgrounds is often made from recycled tires. It provides cushioning to prevent injuries.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Athletic surfaces.</strong> Running tracks, sports fields with artificial turf, and gym flooring often incorporate tire rubber.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tire-derived fuel.</strong> Cement kilns and paper mills burn processed tires as fuel. Tires have energy content comparable to coal but generate less pollution.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Landscaping products.</strong> Rubber mulch for gardens and landscaping lasts longer than wood mulch and doesn't attract termites.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Construction materials.</strong> Tire rubber goes into railroad crossings, dock bumpers, roof coatings, and various industrial products.
            </p>
          </div>
        </div>
      </section>

      {/* Idaho's Tire Recycling Infrastructure */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Tire Recycling in Idaho
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              How Idaho handles tire recycling:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Collection and transport.</strong> Tires collected in the Boise area typically get consolidated at local facilities before being shipped to regional processors.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Processing facilities.</strong> The Northwest has several tire recycling plants that handle material from Idaho. Some shredded material goes to tire-derived fuel users in the region.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>DEQ oversight.</strong> The Idaho Department of Environmental Quality regulates tire disposal and recycling. Licensed haulers must document proper disposal of collected tires.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Disposal fees fund the system.</strong> The fees you pay for tire disposal help support the collection and recycling infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* What Can't Be Recycled */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Can't Easily Be Recycled
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some tires present recycling challenges:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Large off-the-road (OTR) tires.</strong> Mining and heavy equipment tires are difficult to process due to their size. They often end up being used whole for engineering applications or cut for specific uses.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Contaminated tires.</strong> Tires filled with dirt, water, or debris are harder to process. This is one reason keeping stored tires clean and dry matters.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Tires on rims.</strong> Rims must be removed before tire recycling. Some facilities won't accept tires still mounted on wheels.
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
              When you dispose of tires properly in the Boise area, most of the material gets recycled into useful products—roads, playgrounds, fuel, and more. Very little actually goes to waste.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The disposal fees you pay support this recycling infrastructure. It's a much better outcome than tires piling up in illegal dumps or sitting in your backyard.
            </p>

            <p className="text-gray-600 leading-relaxed">
              So when you pay that $3-5 disposal fee, you're not just getting rid of a tire—you're funding a system that turns waste into roads, playgrounds, and useful products across the region.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Tire Removal?
            </h2>
            <p className="text-gray-600 mb-8">
              We make sure your tires go to licensed recycling facilities. Serving Boise, Meridian, Nampa, and the Treasure Valley.
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
