
import { IconType } from 'react-icons'

export type LinkType = {
  href: string,
  text: string
}
export interface SubCategory {
  title: string,
  links: LinkType[]
}

export interface DropMenuItemContent {
  id: string,
  title: string,
  subCategories?: SubCategory[],
}
export interface InfoCardContent {
  id: string,
  icon: IconType,
  iconSize: number,
  flip?: boolean,
  title: string,
  description: string
}

export interface Review {
  review: string,
  reviewer: string,
}

export interface Product {
  id: string,
  product: string,
  header: string,
  description: string,
  linkText: string,
  link: string,
  reviews: Review[]
}

export interface FooterCategory {
  id: string,
  category: string,
  links: LinkType[]
}
