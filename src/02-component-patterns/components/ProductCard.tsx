import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import {ProductProps } from '../interfaces';
import ProductContext from './productContext';

import '../styles/custom-styles.css'
import { CSSProperties } from 'react';

export interface Props extends ProductProps {
  className?: string
  style?: CSSProperties 
}

export const ProductCard = ({product, children, className, style }:Props):JSX.Element => {
    const { Provider } = ProductContext
    // console.log(styles)
    // console.log(className)
    const {counter, increasedBy} = useProduct()
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
