
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cormorant, Catamaran } from 'next/font/google'


import Footer from '@/components/footer'
import NavBar from '@/components/navBar'

const inter = Inter({ subsets: ['latin'] })
const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant' });
const catamaran = Catamaran({ subsets: ['latin'], variable: '--font-catamaran' });

export const metadata: Metadata = {
  title: 'Celestial',
  description: 'Jumpstart your galatic empire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

// ${ cormorant.variable } ${ catamaran.variable } 