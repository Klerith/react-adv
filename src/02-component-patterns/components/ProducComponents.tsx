import { useContext } from "react"
import ProductContext from "./productContext"
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'


export const ProductImage = ({img=''}):JSX.Element => {
    const {product} = useContext(ProductContext)
    const { img:imageContext } = product
    return  <img className={styles.productImg} src={ !!img ? img : imageContext ? imageContext : noImage } alt="Coffee Mug" />
}

export const ProductTitle = ({title = ''}):JSX.Element => {
    const {product} = useContext(ProductContext)
    const { title: titleContext } = product
    return  <span className={styles.productDescription}>{ title ? title : titleContext }</span>
}
export const ProductButtons = ():JSX.Element => {
    
    const {counter, increasedBy} = useContext(ProductContext)
    
    return  (
        <div className={styles.buttonsContainer}>
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