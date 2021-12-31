import { useContext } from "react";
import styles from '../styles/styles.module.css'

import { ProductContext } from './ProductCard';

export interface PropsTitle {
  title?    : string;
  className?: string;
}

export const ProductTitle = ({ title, className }: PropsTitle) => {

  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} >
      {title ? title : product.title}
    </span>
  )
}

export default ProductTitle