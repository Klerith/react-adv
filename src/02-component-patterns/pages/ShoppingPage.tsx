import ProductCart from "../components/ProductCart"
import {ProductButtons,ProductImage,ProductTitle} from "../components/childrenComponents/index"

const product = {
  id: '1',
  title: 'CoffeMug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

        <ProductCart product={product}>
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons />
        </ProductCart>
       
      </div>
    </div>
  )
}
     
export default ShoppingPage