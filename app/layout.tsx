import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thapanee. | UX/UI Designer & Full-Stack Developer',
  description: 'Designing with Logic. Building with Purpose. Portfolio of a CS student passionate about creating intuitive, human-centered digital experiences.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/my-notion-face-transparent.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/my-notion-face-transparent.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/my-notion-face-transparent.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/my-notion-face-transparent.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
