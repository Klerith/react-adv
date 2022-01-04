import { createContext, ReactElement } from 'react'
import useProduct from '../hooks/useProduct'
import { ProviderProps, Product, onChangeArgs } from '../interfaces/IProduct';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProviderProps);

const { Provider } = ProductContext;

export interface Props{
  product   : Product,
  children? : ReactElement | ReactElement[],
  className?: string,
  style?    : React.CSSProperties,
  onChange? : ( args: onChangeArgs ) => void,
}


export const ProductCard = ({ product, children, className, style, onChange } : Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product })

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children }
      </div>
    </Provider>
  )
}


export default ProductCard
