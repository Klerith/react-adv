import { useContext } from "react";
import noImage from '../assets/no-image.jpg'
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export interface PropsImg {
  img?      : string;
  className?: string;
  style?   : React.CSSProperties
}

export const ProductImage = ( { img, className, style }: PropsImg ) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img
  } else if (product.img) {  
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img 
      className={`${styles.productImg} ${className}`} 
      src={ imgToShow } 
      alt="Producto" 
      style={style}
    />
  )
}

export default ProductImage