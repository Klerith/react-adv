import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from '../data/products';
import '../styles/custom-styles.css';


const product = products[0]



export const ShoppingPage = () => {
  

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard 
                key={ product.id }
                product={ product }
                className="bg-dark text-white"
                initialValues={{
                    count:4,
                    maxCount: 10
                }}
             >
                {
                    ( { reset, increaseBy, count, isMaxCountedReached, maxCount }) => (
                        <>
                           
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />     
                        
                            <button type='button' onClick={reset} > Reset </button>                   
                            { count !== 0 && <button type='button' onClick={() => increaseBy(-2)} > -2 </button>  }                 
                            { !isMaxCountedReached() && <button type='button' onClick={() => increaseBy(+2)} > +2 </button> }                  
                            <span > count:{ count } - max:{ maxCount } </span>                   
                        </>
                    )
                }
            </ProductCard>
           
    
        </div>
    )
}
