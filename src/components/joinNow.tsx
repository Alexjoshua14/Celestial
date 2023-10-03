import { FC } from 'react'

interface JoinNowProps {

}

const JoinNow: FC<JoinNowProps> = ({ }) => {
  return (
    <section className="headingContainer items-center justify-center px-14 py-14 bg-primary-800 text-white rounded-lg">
      <h2 className="header">
        Get your free Celestial account
      </h2>
      <p className="text-lg text-gray-200 font-extralight">
        Join the 470,000+ species who rely on Celestial to create websites, sell lasers, and unite galatic empires.
      </p>
      <button className="w-fit px-8 py-3 bg-primary-100 glassmorphism-0 rounded-full">
        Sign up free
      </button>
    </section>
  )
}

export default JoinNow