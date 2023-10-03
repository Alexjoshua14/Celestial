import { FC } from 'react'

import InfoCard from './infoCard'
import { infoCardContent } from '@/data/infoCards'

interface OverviewProps {

}

const Overview: FC<OverviewProps> = ({ }) => {
  return (
    <section className="text-center flex flex-col gap-14 sm:gap-20">
      <div className="headingContainer">
        <h2 className="header">
          Create, Relax, Repeat – Celestial Manages the Detail
        </h2>
        <p className="subheader">
          With Celestial, you have the power to craft your sales page, process payments, and grant customer access—all within one unified cosmic hub.
          Celestial takes care of the intricate details, so you can focus on your intergalactic creations.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-14 sm:gap-8">
        {infoCardContent.map((info) => (
          <InfoCard info={info} key={info.id} />
        ))}
      </div>
    </section>
  )
}

export default Overview