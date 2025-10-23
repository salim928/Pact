import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pactium - Building Intelligent Products That Scale Africa',
  description: 'Web apps, mobile apps, and AI agents — from pilot to production. Empowering Africa through technology.',
  keywords: 'AI, Africa, Tech, Startups, LegalBro, Semma AI, Movva, AgriTech, LegalTech',
  authors: [{ name: 'Pactium' }],
  icons: {
    icon: '/pactium-icon.png',
    shortcut: '/pactium-icon.png',
    apple: '/pactium-icon.png',
  },
  openGraph: {
    title: 'Pactium - Building Intelligent Products That Scale Africa',
    description: 'Web apps, mobile apps, and AI agents — from pilot to production.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Pactium',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pactium - Building Intelligent Products That Scale Africa',
    description: 'Web apps, mobile apps, and AI agents — from pilot to production.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}