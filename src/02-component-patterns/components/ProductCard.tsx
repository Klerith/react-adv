import { createContext } from 'react'
import useProduct from '../hooks/useProduct'
import { ProviderProps, Props } from '../interfaces/IProduct';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProviderProps);

const { Provider } = ProductContext;


export const ProductCard = ({ product, children } : Props) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>

        {/* <ProductImage img={product.img} /> */}
        {/* <ProductTitle title={product.title} /> */}
        {/* <ProductButtons counter={counter} increaseBy={increaseBy} />  */}

        { children }
      </div>
    </Provider>
  )
}


// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

export default ProductCard
