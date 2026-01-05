import type { Metadata } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-tire-removal.com'),
  title: 'Tire Removal Boise | Same-Day Tire Disposal & Recycling Service',
  description: 'Need old tires gone? We haul away any quantity in Boise, Meridian, Nampa, and the Treasure Valley. Proper recycling, fair pricing. Call (208) 943-5231 for free quote.',
  keywords: 'tire removal Boise, tire disposal Boise, bulk tire pickup, commercial tire disposal, property tire cleanup, tire recycling Idaho, Meridian, Nampa, Caldwell, Eagle',
  openGraph: {
    title: 'Tire Removal Boise | Same-Day Tire Disposal & Recycling Service',
    description: 'Professional tire removal and recycling in Boise and surrounding areas. We pick up any quantity of old tires with proper eco-friendly disposal.',
    url: 'https://boise-tire-removal.com',
    siteName: 'Top Shelf Tire Removal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tire Removal Boise | Same-Day Tire Disposal Service',
    description: 'Professional tire removal and recycling in Boise. We haul away any quantity with proper eco-friendly disposal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://boise-tire-removal.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
            
            gtag('config', 'AW-11134633087');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '533217938868618');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=533217938868618&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <QuoteFormProvider>
          <Header />
          <VisibleBreadcrumb />
          {children}
          <Footer />
        </QuoteFormProvider>
        <StructuredData />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </body>
    </html>
  )
}
