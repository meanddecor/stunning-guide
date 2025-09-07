import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'APM Ventures - Strategic Business Portfolio Investment',
  description: 'The $100M+ Vision: From Miami\'s Best to Global Legacy - Six complementary ventures generating $2M+ annual profit within 24 months',
  keywords: 'investment, hospitality, hotel consulting, export company, business portfolio, venture capital',
  authors: [{ name: 'APM Ventures' }],
  openGraph: {
    title: 'APM Ventures - Strategic Business Portfolio Investment',
    description: 'Six synergistic businesses that compound value: cash-generating assets fund technology development, creating enterprise value exceeding $100M within 36 months.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}