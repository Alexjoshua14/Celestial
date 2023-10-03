
import { IconType } from 'react-icons'

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