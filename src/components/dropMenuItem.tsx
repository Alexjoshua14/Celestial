
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import Link from 'next/link'
import React, { FC } from 'react'


import SubCategory from './subCategory'
import { AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Separator } from './ui/separator'
import { DropMenuItemContent } from '@/lib/types'

interface DropMenuItemProps extends React.HTMLAttributes<AccordionPrimitive.AccordionItemProps> {
  section: DropMenuItemContent
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
          <div className="flex flex-col gap-6">
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