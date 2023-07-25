import { useContext } from 'react';
import { type CSSProperties } from 'react';

import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    img?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ className, img, style }: Props) => {

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
        <img src={imgToShow}
            alt="Coffe Mug"
            className={`${styles.productImg} ${className} `}
            style={style}
        />
    )
}