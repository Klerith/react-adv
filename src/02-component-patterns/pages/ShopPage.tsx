import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import useShoppingCart from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'

const ShopPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart()

  return (
    <div>
      <h1>Shop Page</h1>

      <div style={{
        display: "Flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>

        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product} 
            className="bg-dark shadow-cart text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className='custom-img'/>
            <ProductTitle className='bold'/>
            <ProductButtons className='custom-btn' />
          </ProductCard>
        ))}

      </div>

      <div className="shopping-card">
        {
          shoppingCart && Object.values(shoppingCart).map((product) => (

            <ProductCard
              key={product.id}
              product={product} 
              className="bg-dark text-white"
              style={{width: "100px"}}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductImage className='custom-img'/>
              <ProductButtons className='custom-btn' />
            </ProductCard>
            ))
          }
      </div>

    </div>
  )
}

export default ShopPage
