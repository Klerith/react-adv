import { ProductCard } from '../components/'
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee - Mug',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard
                    className="bg-dark"
                    product={product}
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title="Coffie xD" className="text-white" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage