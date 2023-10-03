import { FooterCategory } from '@/lib/types'
import { FC } from 'react'
import FooterSection from './footerSection'
import { Accordion } from './ui/accordion'
import { footerContent } from '@/data/footerContent'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <div
      className={
        cn(`w-full px-12 py-28 flex flex-col gap-12 
            items-center justify-center bg-background-accent`,
          className
        )}
      {...props}
    >
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <Accordion type="single" collapsible className="w-full">
          {footerContent.map((section) => (
            <FooterSection key={section.id} section={section} />
          ))}
        </Accordion>
      </div>
      <div className="w-full flex items-center justify-start brand gap-3">
        <p>
          <s>
            Celestial Labs, Inc. © 2023
          </s>
        </p>
        <Link href="/" className="link">
          <p className="underline underline-offset-4">
            Terms
          </p>
        </Link>
        <Link href="/" className="link">
          <p className="underline underline-offset-4">
            Privacy
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Footer