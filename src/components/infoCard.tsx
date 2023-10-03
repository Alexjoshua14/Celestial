
import { FC, HTMLProps, ReactHTMLElement } from 'react'
import { InfoCardContent } from '@/lib/types'
import { cn } from '@/lib/utils'

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  info: InfoCardContent,
}

const InfoCard: FC<InfoCardProps> = ({ info, className, ...props }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)} {...props}>
      <div className="flex items-center justify-center p-3 aspect-square rounded-full bg-yellow-700 bg-opacity-20 opacity-50 text-yellow-950">
        <info.icon size={info.iconSize} className={info.flip ? "rotate-180" : ""} />
      </div>
      <h3 className="font-serif text-lg">
        {info.title}
      </h3>
      <p className="text-sm leading-loose text-gray-500 font-sans font-light tracking-wide">
        {info.description}
      </p>
    </div >
  )
}

export default InfoCard