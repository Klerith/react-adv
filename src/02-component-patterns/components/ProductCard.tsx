import { createContext } from 'react'
import useProduct from '../hooks/useProduct'
import { ProviderProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/IProduct';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProviderProps);

const { Provider } = ProductContext;

export interface Props{
  product   : Product,
  children? : (args : ProductCardHandlers) => JSX.Element ,
  className?: string,
  style?    : React.CSSProperties,
  onChange? : ( args: onChangeArgs ) => void,
  value?    : number,
  initialValues? : InitialValues
}


export const ProductCard = ({ product, children, className, style, onChange, value, initialValues } : Props) => {

  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

  return (
    <Provider value={{ counter, increaseBy, product, maxCount: initialValues?.maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children && children({
          count   : counter,
          maxCount: initialValues?.maxCount,
          isMaxCountReached,
          increaseBy,
          product,
          reset,
        }) }
      </div>
    </Provider>
  )
}


export default ProductCard
