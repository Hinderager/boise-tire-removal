import { Metadata } from 'next'
import { Phone, Shield, FileCheck, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Tire Removal',
  description: 'Top Shelf Tire Removal is fully licensed and insured for tire disposal and hauling services in Idaho.',
  alternates: { canonical: 'https://boisetireremoval.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fully credentialed and covered for your peace of mind.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When you hire Top Shelf Tire Removal, you're working with a legitimate, fully licensed and insured business. We take the proper legal and safety precautions seriously because it protects you and protects us.</p>
              <p>We maintain all required licenses for waste hauling and tire disposal in Idaho. We're not just some guys with a truck—we're a professional operation that follows state regulations and industry best practices.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Fully Insured</h3>
                <p className="text-gray-600">Comprehensive liability coverage protects your property.</p>
              </div>
              <div className="text-center">
                <FileCheck className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Licensed Haulers</h3>
                <p className="text-gray-600">All required state and local permits current.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Compliant Disposal</h3>
                <p className="text-gray-600">We follow Idaho DEQ regulations for tire recycling.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What This Means for You</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>Property Protection:</strong> If anything goes wrong during the job, you're covered. Our insurance handles property damage claims.</p>
                <p><strong>Legal Compliance:</strong> You can be confident your tires are being disposed of legally. We have documentation for every load we process.</p>
                <p><strong>Worker Coverage:</strong> Our team is covered by workers' comp, so you're not liable if someone gets hurt on your property.</p>
                <p><strong>Business Legitimacy:</strong> We're a real business with a real address, not a fly-by-night operation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Credentials?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
