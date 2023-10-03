
import Hero from '@/components/hero'
import JoinNow from '@/components/joinNow'
import Overview from '@/components/overview'
import ProductOptions from '@/components/productOptions'

export default function Home() {
  return (
    <main className="container min-h-screen flex flex-col items-center lg:px-24 max-w-[1500px] py-8 sm:py-28 gap-16 sm:gap-24">
      <Hero />
      <Overview />
      <ProductOptions />
      <JoinNow />
    </main>
  )
}
