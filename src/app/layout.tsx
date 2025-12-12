import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boise Tire Removal | Coming Soon',
  description: 'Professional tire removal and disposal services in Boise, Idaho. We haul away old tires from homes, businesses, and properties.',
  keywords: 'tire removal, Boise, Idaho, tire disposal, tire hauling, old tire pickup',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
