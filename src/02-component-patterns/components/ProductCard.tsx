import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import {ProductProps } from '../interfaces';
import ProductContext from './productContext';

import '../styles/custom-styles.css'
import { CSSProperties, useEffect } from 'react';
import { Product } from '../interfaces/interfaces';

export interface Props extends ProductProps {
  className?: string
  style?: CSSProperties
  onChange?: (count:number, product: Product ) => void
  value?: number
}

export const ProductCard = ({product, children, className, style, onChange, value }:Props):JSX.Element => {
    const { Provider } = ProductContext
    // console.log(styles)
    // console.log(className)

    
    const {counter, increasedBy} = useProduct({ initialState: 0 , onChange, product, value  } )
    
  return (
    <>
      <Provider value={{
          product,
          counter,
          increasedBy
      }}>
          <div className={ `${styles.productCard} ${className}` } style= { style }>
            {children}
          </div>
      </ Provider>
    </>
  )
}
