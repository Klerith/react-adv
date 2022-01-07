import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0];

const ShopPage = () => {


  return (
    <div>
      <h1>Shop Page</h1>

      <div style={{
        display: "Flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>

      <ProductCard 
        key={product.id}
        product={product} 
        className="bg-dark shadow-cart text-white"
        initialValues={{ 
          count: 4,
          maxCount: 5
        }}
      >
        {
          ( { reset, increaseBy, isMaxCountReached, count } ) => (
            <>
              <ProductImage className='custom-img'/>
              <ProductTitle className='bold'/>
              <ProductButtons className='custom-btn' />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {
                !isMaxCountReached &&
                <button onClick={() => increaseBy(2)}>+2</button>
              }
              <span>{ count }</span>

            </>
          )
        }
      </ProductCard>

      </div>
    </div>
  )
}

export default ShopPage
