import { Metadata } from 'next'
import { Phone, Briefcase, DollarSign, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Career Opportunities | Boise Tire Removal',
  description: 'Join the Top Shelf Tire Removal team. We are looking for reliable team members who want to make a difference in the Treasure Valley.',
  alternates: { canonical: 'https://boisetireremoval.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're growing and looking for hardworking people to join us.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Tire Removal is a growing local business, and we're always looking for reliable team members who take pride in their work. If you're someone who likes physical work, enjoys solving problems, and wants a job where you can see the results at the end of the day, we'd like to hear from you.</p>
              <p>We serve the entire Treasure Valley, helping homeowners and businesses dispose of unwanted tires responsibly. It's honest work, and our customers appreciate what we do.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Competitive Pay</h3>
                <p className="text-gray-600">Fair wages for hard work.</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Respect & Safety</h3>
                <p className="text-gray-600">We take care of our team and prioritize safety.</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Room to Grow</h3>
                <p className="text-gray-600">Opportunities for advancement as we expand.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What We Look For</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Reliable and shows up on time</li>
                <li>• Can handle physical work and lift heavy loads</li>
                <li>• Valid driver's license and clean driving record</li>
                <li>• Good attitude and willingness to work as part of a team</li>
                <li>• Passes background check</li>
              </ul>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Interested?</h2>
              <p className="text-gray-600 mb-6">Give us a call to discuss current openings.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
