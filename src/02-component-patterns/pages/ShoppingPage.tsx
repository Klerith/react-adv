import {ProductCard, ProductTitle, ProductImage, ProductButtons} from "../components"

const product ={
    id: "1a2s3d",
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png"
}

const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            <ProductCard product={product}>
                <ProductImage/>
                <ProductTitle />
                <ProductButtons/>
            </ProductCard>
            <ProductCard product={product}>
                <ProductImage/>
                <ProductTitle />
                <ProductButtons/>
            </ProductCard>
        </div>
    </div>
  )
}

export default ShoppingPage