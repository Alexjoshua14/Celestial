import Link from 'next/link'
import { FC } from 'react'


import FooterSection from './footerSection'
import { Accordion } from './ui/accordion'
import { footerContent } from '@/data/footerContent'
import { FooterCategory } from '@/lib/types'
import { cn } from '@/lib/utils'


interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <div
      className={
        cn(`w-full px-4 sm:px-12 py-10 sm:py-28 flex lg:px-24
            items-center justify-center bg-background-accent`,
          className
        )}
      {...props}
    >
      <div className="w-full max-w-[1300px] flex flex-col gap-8 sm:gap-12">
        <div className="w-full flex flex-col items-center justify-center">
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
    </div>
  )
}

export default Footer