// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

// FAQ data for FAQPage schema (critical for LLM seeding)
const faqData = [
  {
    question: 'How much does tire removal cost per tire in Boise?',
    answer: 'Tire removal pricing depends on quantity and location. For small jobs (1-10 tires), expect around $3-5 per tire. Bulk pickups of 50+ tires get better per-tire rates. Call (208) 943-5231 for a free, no-obligation quote.',
  },
  {
    question: 'Do you pick up tires that are still on rims?',
    answer: 'Yes, we pick up tires with or without rims. Tires on rims may have a small additional charge due to extra weight and handling. Let us know what you have when you call for an accurate quote.',
  },
  {
    question: 'How quickly can you pick up my tires?',
    answer: 'We typically schedule tire pickups within 24-48 hours. Same-day service is often available for urgent situations. Call us at (208) 943-5231 and we will work with your schedule.',
  },
  {
    question: 'What types of tires do you accept for removal?',
    answer: 'We accept all types: car tires, truck tires, tractor tires, ATV tires, lawn mower tires, commercial tires, and agricultural tires. No quantity is too small or too large.',
  },
  {
    question: 'What happens to old tires after you pick them up?',
    answer: 'All tires go to certified recycling facilities where they are shredded and repurposed into rubber mulch, playground surfaces, athletic tracks, or used as industrial fuel. We never dump illegally—proper recycling is part of our service.',
  },
  {
    question: 'Do you offer commercial tire disposal service?',
    answer: 'Yes, we provide scheduled recurring tire pickups for auto shops, tire dealers, car dealerships, and fleet managers throughout the Treasure Valley. Reliable service so you can focus on your business.',
  },
  {
    question: 'Can you handle bulk tire removal for large properties?',
    answer: 'Absolutely. We handle bulk tire removal for farms, ranches, construction sites, estates, and foreclosed properties. Whether you have 50 tires or 500, we have the equipment and experience to handle it.',
  },
  {
    question: 'What areas do you serve for tire removal in Idaho?',
    answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and all surrounding Treasure Valley communities. If you are unsure whether we cover your area, call us at (208) 943-5231.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Tire Removal - ${city}`,
    "description": `Professional tire removal, disposal, and recycling services in ${city}, Idaho. We haul away old tires from residential and commercial properties. Any quantity, proper eco-friendly disposal.`,
    "url": "https://boise-tire-removal.com",
    "telephone": "+1-208-943-5231",
    "email": "info@topshelfpros.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": [
      "Tire Removal",
      "Tire Disposal",
      "Tire Recycling",
      "Bulk Tire Pickup",
      "Property Tire Cleanup",
      "Commercial Tire Disposal"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tire Removal and Disposal Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Boise Tire Removal"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional tire removal, disposal, and recycling services in ${city} and the Treasure Valley. We haul away old tires from residential and commercial properties with proper eco-friendly disposal.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  }

  // FAQPage schema - critical for LLM seeding and AI search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
