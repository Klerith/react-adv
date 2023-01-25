import { useContext } from "react"
import ProductContext from "./productContext"
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { Props as ProductImageProps } from "./ProductImage"
import { Props as ProductTitleProps } from "./ProductTitle"
import { Props as ProdtuctButtonsProps } from "./ProductButtons"


export const ProductImage = ({img='', className = '', style }:ProductImageProps):JSX.Element => {
    const {product} = useContext(ProductContext)
    const { img:imageContext } = product
    return  <img style={style} className={`${styles.productImg} ${className}`} src={ !!img ? img : imageContext ? imageContext : noImage } alt="Coffee Mug" />
}

export const ProductTitle = ({title = '', className = '', style}: ProductTitleProps):JSX.Element => {
    const {product} = useContext(ProductContext)
    const { title: titleContext } = product
    return  <span style={style} className={`${styles.productDescription} ${className}`}>{ title ? title : titleContext }</span>
}
export const ProductButtons = ({className = '', style}: ProdtuctButtonsProps):JSX.Element => {
    
    const {counter, increasedBy} = useContext(ProductContext)
    
    return  (
        <div style={style} className={`${styles.buttonsContainer} ${className}`}>
            <button className={styles.buttonMinus} onClick={() => increasedBy(-1) }>
                -
            </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increasedBy(+1) } >
            +
        </button>
    </div>
    )
}