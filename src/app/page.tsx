import Hero from '@/components/hero'
import Overview from '@/components/overview'
import ProductOptions from '@/components/productOptions'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-14 py-28 gap-24">
      <Hero />
      <Overview />
      <ProductOptions />
    </main>
  )
}
