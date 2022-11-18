import React, { FC } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

const products = [
  {
    id: '1',
    title: 'Coffee Mug | Card 1',
    img: './coffee-mug.png'
  },
  {
    id: '2',
    title: 'Coffee Mug | Card 2',
  },
]

const ShoppingPage:FC = ():JSX.Element => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          { products.map(product =>(
            <ProductCard product={product} key={product.id}>
                 <ProductCard.Image />
                 <ProductCard.Title  />
                 <ProductCard.Buttons />
            </ProductCard>
          ))}
        </div>
    </div>
  )
}

export default ShoppingPage
