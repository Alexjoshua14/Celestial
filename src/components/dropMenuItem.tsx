
import React, { FC } from 'react'
import Link from 'next/link'
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { DropMenuItemContent, SubCategory } from '@/lib/types'
import { Separator } from './ui/separator'

interface DropMenuItemProps extends React.HTMLAttributes<AccordionPrimitive.AccordionItemProps> {
  section: DropMenuItemContent
}

const SubCategory = ({ subCategoryContent }: { subCategoryContent: SubCategory }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="title font-medium">
        {subCategoryContent.title}
      </h2>
      <ul className="flex flex-col gap-3">
        {subCategoryContent.links?.map((link) => (
          <li key={link.text}>
            <Link href={link.href} className="navLink">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  )
}

const DropMenuItem: FC<DropMenuItemProps> = ({ section }) => {
  return section.subCategories ?
    (
      <AccordionItem value={section.id} className="border-none flex flex-col gap-6" >
        <AccordionTrigger className="header p-0 hover:no-underline">
          <p>
            {section.title}
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            {section.subCategories.map((content) => (
              <React.Fragment key={content.title}>
                <SubCategory subCategoryContent={content} />
                <Separator className="bg-yellow-800 bg-opacity-30" />
              </React.Fragment>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    )
    : (
      <AccordionItem value={"Examples"} className="border-none">
        <Link href="/">
          {section.title}
        </Link>
      </AccordionItem>
    )
}

export default DropMenuItem