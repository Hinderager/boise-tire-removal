import { Metadata } from 'next'
import { Phone, Recycle, Factory, Leaf, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tire Recycling Information | Boise Tire Removal',
  description: 'Learn how tires are recycled in Idaho. Understand the environmental impact and what happens to your old tires.',
  alternates: { canonical: 'https://boise-tire-removal.com/resources/recycling-info' },
}

export default function RecyclingInfoPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How Tires Are Recycled</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Every tire we pick up gets a second life.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Tires don't decompose. Leave one in a landfill and it'll still be there in 500 years. That's why proper recycling matters. When you use Top Shelf Tire Removal, your old tires don't just disappear—they get turned into something useful.</p>
              <p>Here's how tire recycling actually works and why it's worth doing right.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <Factory className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Tire-Derived Fuel</h3>
                  <p className="text-gray-600">Shredded tires burn hotter than coal and are used by cement kilns and power plants as an alternative fuel source. It's one of the most common uses for recycled tires.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Recycle className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Rubber Crumb</h3>
                  <p className="text-gray-600">Tires are ground into tiny rubber pieces used in playground surfaces, running tracks, and rubberized asphalt. You've probably walked on recycled tires and didn't even know it.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Leaf className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Landscape Mulch</h3>
                  <p className="text-gray-600">Shredded tires make durable, long-lasting mulch for landscaping projects. It doesn't rot, doesn't attract pests, and lasts for years.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Civil Engineering</h3>
                  <p className="text-gray-600">Whole tires are used in construction projects for erosion control, retaining walls, and road embankments. They're strong, durable, and cost-effective.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Why Proper Disposal Matters</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>Environmental Protection:</strong> Illegally dumped tires collect water and become breeding grounds for mosquitoes. They're also fire hazards—tire fires are nearly impossible to put out and release toxic smoke.</p>
                <p><strong>Legal Compliance:</strong> Idaho has strict rules about tire disposal. Dumping tires illegally can result in fines up to $5,000 plus cleanup costs.</p>
                <p><strong>Resource Conservation:</strong> Recycling one ton of tires saves about 1.5 tons of CO2 emissions compared to making new materials from scratch.</p>
                <p><strong>Community Health:</strong> Tire piles attract rodents and insects, pose fire risks, and are eyesores. Proper removal keeps neighborhoods safe and clean.</p>
              </div>
            </div>

            <div className="bg-dark-blue p-8 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Our Recycling Commitment</h2>
              <p className="mb-4">We work exclusively with licensed tire processors who follow Idaho DEQ regulations. Every load we pick up is documented and tracked to an approved recycling facility.</p>
              <p className="text-sm text-gray-300">We can provide disposal documentation for commercial customers who need proof of proper recycling for environmental compliance.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Dispose of Your Tires Responsibly</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
