'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does tire removal cost per tire?',
    answer: 'It depends on how many tires you have and where you\'re located. For small jobs (1-10 tires), you\'re looking at around $3-5 per tire. If you\'ve got 50 or more, the per-tire rate drops. Call us for a free quote—no surprises, no games.'
  },
  {
    question: 'Do you pick up tires that are still on the rims?',
    answer: 'Yep, we take tires with or without rims. Tires on rims are heavier and take a bit more effort, so there might be a small upcharge. Just tell us what you have when you call and we\'ll give you an honest price.'
  },
  {
    question: 'How quickly can you pick up my tires?',
    answer: 'Usually within 24-48 hours. If it\'s urgent, we can often do same-day service. Just call and we\'ll figure out what works for your schedule.'
  },
  {
    question: 'What types of tires do you take?',
    answer: 'Pretty much all of them. Car tires, truck tires, tractor tires, ATV tires, lawn mower tires—you name it. Whether you have 2 or 200, we\'ll take care of it.'
  },
  {
    question: 'What happens to the tires after you haul them away?',
    answer: 'We work with certified recycling facilities. The tires get shredded and turned into rubber mulch, playground surfaces, athletic tracks, or used as fuel in industrial settings. We don\'t cut corners or dump illegally. Proper recycling is part of the job.'
  },
  {
    question: 'Can you handle bulk tire pickup for commercial properties?',
    answer: 'Definitely. We work with auto shops, tire dealers, fleet managers—anyone who needs regular tire disposal. We can set up recurring pickups so it\'s one less thing on your plate.'
  },
  {
    question: 'Do you offer same-day tire removal service?',
    answer: 'We do when our schedule allows. If you need tires gone fast, give us a call. We\'ll let you know what we can do. Most of the time, we can make it happen.'
  },
  {
    question: 'What areas do you serve in the Treasure Valley?',
    answer: 'We cover Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and the surrounding areas. If you\'re not sure whether we serve your location, just call. We\'ll let you know.'
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2089435231">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 943-5231</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
