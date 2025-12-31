import { Metadata } from 'next'
import { Phone, CheckCircle, Clock, DollarSign, Truck, Recycle, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Boise Tire Removal',
  description: 'Why choose Top Shelf Tire Removal? Fast service, fair prices, and responsible disposal. We make tire removal simple.',
  alternates: { canonical: 'https://boise-tire-removal.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Top Shelf?</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Here's what makes us different.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>There are other tire disposal companies out there. So why work with us? Here's the honest answer: we show up when we say we will, we charge what we quote, and we do the work right. That shouldn't be special, but apparently it is.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Same-Day Service Available</h3>
                  <p className="text-gray-600">Got a pile of tires you need gone today? We offer same-day pickup in most areas. Call before noon and we'll usually get to you that afternoon.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <DollarSign className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Upfront Pricing</h3>
                  <p className="text-gray-600">We'll give you a price over the phone. No surprises when we show up. The quote we give is the price you pay.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Truck className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">We Do All the Work</h3>
                  <p className="text-gray-600">You don't have to move the tires to the curb or do any prep. Just show us where they are and we'll load everything up.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Recycle className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Responsible Recycling</h3>
                  <p className="text-gray-600">Every tire gets recycled or disposed of properly. We work with certified processors and follow all Idaho DEQ regulations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Locally Owned</h3>
                  <p className="text-gray-600">We're your neighbors. We live and work in the Treasure Valley, and our reputation matters to us.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">No Job Too Big or Small</h3>
                  <p className="text-gray-600">One tire or a hundred tires—doesn't matter to us. We handle everything from single pickups to commercial contracts.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Simple, Honest Service</h2>
              <p className="text-gray-600 mb-6">We're not trying to be fancy. We just want to help you get rid of your old tires without any hassle.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Let's Get Those Tires Out of Your Way</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
