import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

/* Compound component pattern */

const product = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png"
}

const product2 = {
  id: 1,
  title: "Coffee Mug",
}

const Shopping = () => {
  return (
    <>
      <h1>Shopping Store</h1>

      <hr style={{ width: "100%" }} />

      <div className="shopping-div">
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product2}>
          <ProductImage />
          <ProductTitle title='No Product' />
          <ProductButtons />
        </ProductCard>
      </div>
    </>
  )
}

export default Shopping;