import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { Product } from '../interfaces/IProduct';

const product = {
    id: '1',
    title: "Product 1",
    img: "./coffee-mug.png",
}

const product2 = {
  id: '2',
  title: "Product 2",
  img: "/coffee-mug2.png",
}

const products: Product[] = [product, product2];

const ShopPage = () => {
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
          >
            <ProductImage className='custom-img'/>
            <ProductTitle className='bold'/>
            <ProductButtons className='custom-btn' />
          </ProductCard>
        ))}

      </div>

      <div className="shopping-card">
      <ProductCard 
            product={product2} 
            className="bg-dark text-white"
            style={{width: "100px"}}
          >
            <ProductImage className='custom-img'/>
            <ProductButtons className='custom-btn' />
          </ProductCard>
      </div>
    </div>
  )
}

export default ShopPage
