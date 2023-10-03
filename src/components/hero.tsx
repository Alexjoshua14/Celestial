import { FC } from 'react'

interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {
  return (
    <section className="grid grid-cols-2">
      <article className="w-full flex flex-col pr-14 gap-3">
        <p className="title">
          Digital Products
        </p>
        <h1 className="text-4xl font-medium leading-relaxed font-serif">
          Sell online courses, podcasts, webinars, radio transmissions, maps, and anything you can think of on Celestial
        </h1>
        <p className="text-lg font-light text-gray-500 leading-loose">
          With Celestial, you have everything you need at your fingertips.
          We handle product hosting, secure payments,
          and efficient delivery to your intergalatic audience.
          Your celestial creations, your control.
        </p>
        <button className="bg-primary-800 w-fit px-8 py-4 glassmorphism-1 rounded-full text-white text-lg font-light tracking-wide">
          Get your free account
        </button>
      </article>
      <div className="w-full h-full flex items-center justify-center p-10">
        <div className="w-full aspect-square filler-image">

        </div>
      </div>
    </section>
  )
}

export default Hero