import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Illegal Tire Dumping in Idaho: Fines and Consequences | Tire Removal Pros',
  description: 'Dumping tires illegally in Idaho isn\'t worth the risk. Here\'s what you\'re facing if caught—fines, cleanup costs, and potential criminal charges.',
  alternates: {
    canonical: 'https://boise-tire-removal.com/blogs/illegal-tire-dumping-penalties',
  },
}

export default function IllegalTireDumpingPenalties() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/illegal-tire-dumping.webp"
          alt="Illegal Tire Dumping Penalties"
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
            Illegal Tire Dumping: Fines and Consequences
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got old tires you need to get rid of. Paying for disposal feels annoying when there's a convenient ditch or empty lot nearby. It's just tires—how bad could dumping them be?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Pretty bad, actually. Idaho takes illegal tire dumping seriously. Here's what you're risking if you skip proper disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Why It's Illegal */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Why Tire Dumping Is Taken Seriously
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Illegally dumped tires create real problems:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mosquito breeding grounds.</strong> Tires collect rainwater and create perfect breeding habitat for mosquitoes, including those that carry West Nile virus—a genuine concern in Idaho.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fire hazards.</strong> Tire fires are extremely difficult to extinguish, produce toxic smoke, and can burn for weeks. Once ignited, they cause air quality emergencies and groundwater contamination.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Environmental damage.</strong> As tires break down, they leach chemicals into soil and groundwater. This contamination is expensive to remediate.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Cleanup costs shift to taxpayers.</strong> When tires are dumped on public land, the cleanup costs fall on the community. That's why enforcement is aggressive.
            </p>
          </div>
        </div>
      </section>

      {/* The Penalties */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What You're Risking
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Idaho law provides substantial penalties for illegal tire disposal:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Fines up to $10,000:</strong> First-time violations can result in fines of several thousand dollars. Repeat offenders face steeper penalties</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Cleanup costs:</strong> You're responsible for removing the tires AND restoring the site. Professional remediation can cost far more than the original fine</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Criminal charges:</strong> Large-scale dumping can result in misdemeanor or felony charges depending on quantity and location</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Business consequences:</strong> Commercial dumpers face license revocation, civil lawsuits, and reputational damage</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Compare that to proper disposal costs of a few dollars per tire. The math is clear.
            </p>
          </div>
        </div>
      </section>

      {/* How People Get Caught */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How People Get Caught
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              You might think you won't get caught. People do get caught:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Witnesses.</strong> Someone sees your truck, takes a photo, reports the license plate. This happens more often than you'd think, especially in rural areas where residents watch for dumpers.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Trail cameras.</strong> Land owners and agencies increasingly use game cameras to catch illegal dumping in remote areas.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Traceable items.</strong> Tires sometimes have identifying information—service stickers, inventory marks, or accompanying trash that links back to the source.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Investigations.</strong> Large dump sites trigger investigations. Authorities are motivated to find responsible parties who can be made to pay cleanup costs.
            </p>
          </div>
        </div>
      </section>

      {/* Common Dumping Mistakes */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Dumping Scenarios That Aren't "Okay"
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some people think certain situations don't count as illegal dumping:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>"It's my own property."</strong> You can store limited tires on your own property, but accumulating large quantities or allowing them to become a nuisance can trigger code violations and required cleanup.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>"I got permission from the landowner."</strong> Private property owners can't authorize illegal dumping. Both the dumper and the landowner can face penalties.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>"It's a commercial dumpster."</strong> Putting tires in dumpsters that aren't designated for tire disposal is still illegal dumping.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>"There were already tires there."</strong> Adding to an existing illegal dump site doesn't make it legal. It makes you liable too.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Alternatives */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Legal Alternatives Are Affordable
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Proper tire disposal in the Boise area isn't expensive:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tire retailers.</strong> Most shops charge $2-5 per tire for disposal when you buy new tires. Some accept old tires for similar fees even without a purchase.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Transfer stations.</strong> Ada County facilities accept tires for a few dollars each. Canyon County has similar options.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Collection events.</strong> Local governments occasionally hold free or reduced-cost tire collection days.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Professional removal.</strong> For larger quantities, hire a licensed service. The cost is much less than the fines and cleanup costs from illegal dumping.
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
              Illegal tire dumping can cost you thousands in fines and cleanup costs, plus potential criminal charges. Legal disposal costs a few dollars per tire.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The risk-reward calculation is clear: just pay for proper disposal. It's cheaper, easier, and you won't be looking over your shoulder wondering if you'll get caught.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you have more tires than you can easily dispose of yourself, call a removal service. We charge reasonable rates and handle disposal properly—with documentation if you need it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Legal Tire Disposal?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle tire removal properly throughout the Treasure Valley. Affordable rates, licensed disposal, no hassles.
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
