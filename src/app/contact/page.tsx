import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SchedulingForm from '@/components/SchedulingForm'

export const metadata: Metadata = {
  title: 'Contact Us | Boise Tire Removal',
  description: 'Contact Top Shelf Tire Removal for fast, affordable tire disposal in the Treasure Valley. Call (208) 505-9352 or request a quote online.',
  alternates: { canonical: 'https://boisetireremoval.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Get in touch for fast tire removal services in the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-dark-blue mb-6">Get a Free Quote</h2>
                <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you with pricing, usually within a few hours. Or just call us for an immediate quote.</p>
                <SchedulingForm />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-dark-blue mb-6">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-dark-blue mb-1">Phone</h3>
                      <a href="tel:2085059352" className="text-lg text-gray-600 hover:text-dark-blue">(208) 505-9352</a>
                      <p className="text-sm text-gray-500">Call or text for fastest response</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-dark-blue mb-1">Email</h3>
                      <a href="mailto:info@topshelfpros.com" className="text-lg text-gray-600 hover:text-dark-blue">info@topshelfpros.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-dark-blue mb-1">Service Area</h3>
                      <p className="text-gray-600">Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, Middleton, Mountain Home, and surrounding Treasure Valley areas</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-dark-blue mb-1">Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: By appointment</p>
                      <p className="text-sm text-gray-500 mt-1">Same-day service available</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-dark-blue mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex gap-2">
                      <span className="text-[#FFC845]">•</span>
                      <span>Free, no-obligation quote</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFC845]">•</span>
                      <span>Same-day or next-day service in most areas</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFC845]">•</span>
                      <span>Upfront pricing with no hidden fees</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFC845]">•</span>
                      <span>We do all the loading and hauling</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFC845]">•</span>
                      <span>Responsible recycling and disposal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Prefer to Talk?</h2>
          <p className="text-gray-300 mb-6">Call us now for an immediate quote.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
