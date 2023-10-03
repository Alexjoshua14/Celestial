import { FC } from 'react'
import SignUp from './signUp'

interface JoinNowProps {

}

const JoinNow: FC<JoinNowProps> = ({ }) => {
  return (
    <section className="headingContainer items-center justify-center px-14 py-12 bg-primary-800 text-white rounded-lg">
      <h2 className="header">
        Get your free Celestial account
      </h2>
      <p className="text-lg text-gray-200 font-extralight">
        Join the 470,000+ species who rely on Celestial to create websites, sell lasers, and unite galatic empires.
      </p>
      <SignUp />
    </section>
  )
}

export default JoinNow