import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }

    return (
        <img src={imgToShow} alt="Coffe Mug" className={styles.productImg} />
    )
}