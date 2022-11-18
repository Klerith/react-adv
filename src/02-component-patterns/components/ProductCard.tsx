import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import {ProductProps } from '../interfaces';
import ProductContext from './productContext';



export const ProductCard = ({product, children}:ProductProps):JSX.Element => {
    const { Provider } = ProductContext
    // console.log(styles)
    const {counter, increasedBy} = useProduct()
  return (
    <Provider value={{
        product,
        counter,
        increasedBy
    }}>
        <div className={styles.productCard}>
           {children}
        </div>
    </ Provider>
  )
}
