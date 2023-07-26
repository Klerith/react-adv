import { ProductCard } from '../components/';

import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';

import '../styles/custom-styles.css';

const ShoppingPage = () => {

    const { onChangeProduct, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                {
                    products.map(product => (
                        <ProductCard
                            className="bg-dark"
                            product={product}
                            key={product.id}
                            onChange={onChangeProduct}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Title title="Coffie xD" className="text-white" />
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            className="bg-dark"
                            product={product}
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={onChangeProduct}
                            key={key}
                        >

                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}

export default ShoppingPage