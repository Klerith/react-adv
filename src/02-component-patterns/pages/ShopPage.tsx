import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: "Product 1",
    img: "./coffee-mug.png",
}

const product2 = {
  id: '2',
  title: "Product 2",
  img: "",
}

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
          product={product} 
          className="bg-dark shadow-cart text-white"
        >
          <ProductCard.Image className='custom-img' />
          <ProductCard.Title title="Component" />
          <ProductCard.Buttons className='custom-btn' />
        </ProductCard>


        <ProductCard 
          product={product2} 
          className="bg-dark shadow-cart text-white"
        >
          <ProductImage className='custom-img'/>
          <ProductTitle className='bold'/>
          <ProductButtons className='custom-btn' />
        </ProductCard>

      </div>
    </div>
  )
}

export default ShopPage
