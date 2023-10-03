'use client'

import { FC } from 'react'

import Link from 'next/link'

import { AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { FooterCategory } from '@/lib/types'

interface FooterSectionProps {
  section: FooterCategory,
}

const FooterSection: FC<FooterSectionProps> = ({ section }) => {
  return (

    <AccordionItem value={section.category} className="border-none">
      <AccordionTrigger className="flex justify-between text-lg font-serif hover:no-underline hover:text-primary-800">
        <p className="">
          {section.category}
        </p>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="flex flex-col gap-6 text-base">
          {section.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} target={link.href === '/' ? "" : '_blank'} className="footerLink">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>

  )
}

export default FooterSection