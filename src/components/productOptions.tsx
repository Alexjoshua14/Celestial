import { FC } from 'react'
import { contentOptions } from '@/data/products'
import Product from './product'

interface ProductOptionsProps {

}

const ProductOptions: FC<ProductOptionsProps> = ({ }) => {
  return (
    <section className="flex flex-col gap-20">
      <div className="headingContainer">
        <h2 className="header">
          What Types of Products Can You Offer with Celestial?
        </h2>
        <p className="subheader">
          Celestial gives you the flexibility to sell a variety of products, allowing your creator business to reach new heights in the digital realm.
        </p>
      </div>
      <div className="flex flex-col gap-32">
        {contentOptions.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductOptions