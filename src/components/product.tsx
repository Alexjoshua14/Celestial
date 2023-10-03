import { Product } from '@/lib/types'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import { IoStar } from 'react-icons/io5'

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
}

const Product: FC<ProductProps> = ({ product, className, ...props }) => {
  return (
    <div className={cn("flex flex-col gap-24", className)} {...props}>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="title">
            {product.product}
          </p>
          <h3 className="header">
            {product.header}
          </h3>
          <p className="subheader">
            {product.description}
          </p>
          <Link href={product.link} className="text-primary-800 font-medium" >
            {`${product.linkText} ->`}
          </Link>
        </div>
        <div className="p-14">
          <div className="w-full h-full filler-image" />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <div className="flex items-center justify-center gap-2 text-yellow-500">
          <IoStar size={24} />
          <IoStar size={24} />
          <IoStar size={24} />
          <IoStar size={24} />
          <IoStar size={24} />
        </div>
        <p className="text-xl leading-relaxed font-serif">
          {product.reviews[0].review}
        </p>
        <p className="text-lg text-gray-500 font-light">
          {`— ${product.reviews[0].reviewer}`}
        </p>
      </div>
    </div>
  )
}

export default Product