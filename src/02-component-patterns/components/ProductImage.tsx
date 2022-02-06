import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export const ProductImage = ({ img = '' }) => {
    const {product} = useContext(ProductContext)
    const imgShow = img || product.img || noImage

    return (
        <img className={styles.productImg} src={imgShow} alt="Product image"/>
    )
}