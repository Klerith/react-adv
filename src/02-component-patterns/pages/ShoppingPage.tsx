import React from 'react'
import { ProductCard } from '../components/'

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
                    product={product}
                >
                    <ProductCard.Image />
                    <ProductCard.Title title='Coffie xD' />
                    <ProductCard.Buttons />
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