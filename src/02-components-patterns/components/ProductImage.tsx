import { useContext } from "react";

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noimage from '../assets/no-image.jpg';


export const ProductImage = ({ img = ''}) => {

    const { product } = useContext(ProductContext);
    let showImage:string;


    if( img ){
        showImage = img;
    }else if( product.img ) {
        showImage = product.img;
    }else {
        showImage = noimage;
    }

    return (
    <img className={ styles.productImg } src={ showImage } alt="product" />
    )
}