import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"


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

        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>


        <ProductCard product={product2} >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}

export default ShopPage
