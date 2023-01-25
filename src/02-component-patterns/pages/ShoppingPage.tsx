import{ FC } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'


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
          {/* { products.map(product =>(
            <ProductCard product={product} key={product.id}>
                 <ProductCard.Image />
                 <ProductCard.Title  />
                 <ProductCard.Buttons />
            </ProductCard>
          ))} */}
           <ProductCard 
            product={products[0]}
            className='bg-dark text-white'
            >
                 <ProductCard.Image 
                  className='custom-image'
                  style={{
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                   }}
                 />
                 <ProductCard.Title  
                  className='text-bold'
                 />
                 <ProductCard.Buttons 
                  className='custom-buttons'
                 />
            </ProductCard>
            <ProductCard 
              product={products[0]} 
              className='bg-dark text-white'
              >
                 <ProductImage 
                 className='custom-image'
                 style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                 }}
                 />
                 <ProductTitle  
                  className='text-bold'
                 />
                 <ProductButtons 
                 className='custom-buttons'
                 />
            </ProductCard>
            <ProductCard 
              product={products[1]} 
              style = {{
                backgroundColor: '#70D1F8'
              }}
              >
                 <ProductImage 
                 style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                 }}
                 />
                 <ProductTitle
                  style={{
                    display:'flex',
                    justifyContent:'end',
                    fontWeight:'bold'
                   }}   
                 />
                 <ProductButtons
                 style={{
                  display:'flex',
                  justifyContent:'end'

                 }} 
                 />
            </ProductCard>
        </div>
    </div>
  )
}

export default ShoppingPage
