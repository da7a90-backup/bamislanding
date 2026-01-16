import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { locales } from '@/i18n'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bamis.mr'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  title: {
    default: 'BAMIS - Banque Al Wava Mauritanienne Islamique',
    template: '%s | BAMIS',
  },
  description:
    'Votre partenaire bancaire de confiance en Mauritanie. Solutions bancaires innovantes et services digitaux pour particuliers et entreprises.',
  keywords: [
    'banque mauritanie',
    'BAMIS',
    'banque islamique',
    'services digitaux',
    'BAMIS Digital',
    'carte bancaire mauritanie',
  ],
  authors: [{ name: 'BAMIS' }],
  openGraph: {
    type: 'website',
    locale: 'fr_MR',
    url: 'https://bamis.mr',
    siteName: 'BAMIS',
    title: 'BAMIS - Banque Al Wava Mauritanienne Islamique',
    description:
      'Votre partenaire bancaire de confiance en Mauritanie',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BAMIS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAMIS - Banque Al Wava Mauritanienne Islamique',
    description:
      'Votre partenaire bancaire de confiance en Mauritanie',
    images: ['/og-image.jpg'],
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
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
