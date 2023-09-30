import JemHeader from '@/components/JemHeader'
import './globals.css'
import type { Metadata } from 'next'
import { Barlow_Condensed, Bebas_Neue, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebas_nueue = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas-nueue' })
const barlow_condensed = Barlow_Condensed({ subsets: ['latin'], weight: ["400", "500", "600"], variable: '--font-barlow-condensed' })

export const metadata: Metadata = {
  title: 'Jem Coding',
  description: 'making education great again',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${bebas_nueue.variable} ${barlow_condensed.variable}`}>
        <div className="w-screen h-screen flex flex-col items-stretch">
          <JemHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
