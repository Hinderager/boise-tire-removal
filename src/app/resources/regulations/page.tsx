import { Metadata } from 'next'
import { Phone, AlertTriangle, FileText, Shield, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tire Disposal Regulations in Idaho | Boise Tire Removal',
  description: 'Learn about Idaho tire disposal laws, regulations, and penalties. Stay compliant with state and local requirements.',
  alternates: { canonical: 'https://boisetireremoval.com/resources/regulations' },
}

export default function RegulationsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Idaho Tire Disposal Laws</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What you need to know about legal tire disposal.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Idaho takes tire disposal seriously. The state has specific regulations about how tires must be handled, and violating them can cost you. Whether you're a homeowner with a few old tires or a business that generates them regularly, here's what you need to know.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-8">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Important Legal Notice</h3>
                  <p className="text-gray-600 text-sm">This page provides general information about Idaho tire disposal regulations. It's not legal advice. For specific questions about compliance, contact the Idaho Department of Environmental Quality (DEQ).</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex gap-4 mb-4">
                  <Scale className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-dark-blue">Illegal Dumping Penalties</h2>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p><strong>It's illegal to:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Dump tires on public or private land without permission</li>
                    <li>Burn tires (outside of licensed facilities)</li>
                    <li>Dispose of tires in regular landfills (most don't accept them)</li>
                    <li>Leave tires in waterways or drainage areas</li>
                  </ul>
                  <p className="mt-4"><strong>Penalties:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fines up to $5,000 per violation</li>
                    <li>Cleanup costs (you pay to have them removed)</li>
                    <li>Possible criminal charges for repeat offenders</li>
                    <li>Civil liability if dumping causes environmental damage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex gap-4 mb-4">
                  <FileText className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-dark-blue">Business Requirements</h2>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>If you're a business that generates scrap tires (auto shops, tire dealers, fleet operators), you must:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use a licensed waste tire transporter (like us)</li>
                    <li>Keep records of tire disposal for at least 3 years</li>
                    <li>Not accumulate more than 1,500 tires on-site without a permit</li>
                    <li>Store tires properly (covered, no water accumulation)</li>
                    <li>Have a disposal contract in place</li>
                  </ul>
                  <p className="mt-4">Businesses that fail to comply can face regular inspections, fines, and potential license issues.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex gap-4 mb-4">
                  <Shield className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-dark-blue">Homeowner Guidelines</h2>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>For residential tire disposal:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You can't put tires in regular trash collection</li>
                    <li>Most transfer stations charge a fee per tire</li>
                    <li>Some tire shops take old tires when you buy new ones (usually a fee)</li>
                    <li>You can hire a licensed hauler (simplest option)</li>
                    <li>Never bury tires or burn them</li>
                  </ul>
                  <p className="mt-4">Homeowners generally aren't subject to the same strict rules as businesses, but illegal dumping penalties still apply.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Approved Disposal Methods</h2>
                <div className="space-y-3 text-gray-600">
                  <p>Under Idaho law, scrap tires must go to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Licensed tire recycling facilities</li>
                    <li>Permitted waste tire storage facilities</li>
                    <li>Approved waste-to-energy facilities</li>
                    <li>Facilities approved for tire-derived products</li>
                  </ul>
                  <p className="mt-4">When you use Top Shelf Tire Removal, we handle all of this for you. We only work with state-approved processors and can provide documentation if you need it.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-blue p-8 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Stay Compliant the Easy Way</h2>
              <p className="mb-4">Don't worry about tracking down regulations or finding approved facilities. We handle the entire process legally and properly.</p>
              <p className="text-sm text-gray-300">For businesses, we can provide all required disposal documentation for your records.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Dispose of Tires the Legal Way</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
