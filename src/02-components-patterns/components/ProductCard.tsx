import { createContext, useContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductCardsProps, ProductContextProps } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps)
//Proveedor de información
const { Provider } = ProductContext;

//Necesitamos que reciba childrens.
export const ProductCard = ({ children, product }: ProductCardsProps) => {

  const { counter, increaseBy } = useProduct()

  return(
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ styles.productCard }>
        {children} 
      </div>
    </Provider>
  )
}
