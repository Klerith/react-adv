import{ FC } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';



const ShoppingPage:FC = ():JSX.Element => {
  // Record<string, ProductsCart>
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          { products.map(product =>(
              <ProductCard 
                product={product}
                className='bg-dark text-white'
                value={ shoppingCart[product.id]?.count || 0 }
                onChange = {(count, product) => onProductCountChange(count, product)}
                key={product.id}
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
                    style={{
                      display:'flex',
                      justifyContent:'center'
                    }}
                   />
              </ProductCard>
          ))}
         
           {/* <ProductCard 
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
              product={products[1]} 
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
              product={products[2]} 
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
            </ProductCard> */}
        </div>
        <div className='shopping-cart'>
            {
              (
                Object.entries(shoppingCart).map( ([key, product]) => (
                  <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                    style={{width: '100px'}}
                    value={product.count}
                    onChange = {(count, product) => onProductCountChange(count, product)}
                    key={key}
                  >
                     <ProductCard.Image 
                      className='custom-image'
                      style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                       }}
                     />
                     <ProductCard.Buttons 
                      className='custom-buttons'
                      style={{
                        display:'flex',
                        justifyContent:'center'
                      }}

                     />
                </ProductCard>
                ))
              )
            }
           
        </div>
        {/* <div>
          <code>
            {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div> */}
    </div>
  )
}

export default ShoppingPage
