
import { FC } from 'react'
import Link from 'next/link'
import { SubCategory } from '@/lib/types'

interface SubCategoryProps {
  subCategoryContent: SubCategory,
}

const SubCategory: FC<SubCategoryProps> = ({ subCategoryContent }) => {
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

export default SubCategory