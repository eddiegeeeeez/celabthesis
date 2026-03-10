import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'CE Lab Portal — University of Mindanao',
  description:
    'Official document portal for Civil Engineering thesis students at the University of Mindanao. Download testing results, clearance forms, borrowing slips, and lab request documents — no sign-in required.',
  keywords: [
    'Civil Engineering',
    'Laboratory',
    'University of Mindanao',
    'Thesis',
    'Document Portal',
  ],
  openGraph: {
    title: 'CE Lab Portal — University of Mindanao',
    description:
      'Download official Civil Engineering laboratory documents for your thesis. Free for all enrolled thesis students.',
    type: 'website',
    locale: 'en_PH',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
