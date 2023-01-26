import { useContext } from "react";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductCardContext } from "./ProductCard";

export const ProductImage = ({ image = "" }) => {
    let imgToShow: string;

    const { product } = useContext(ProductCardContext);

    if (image) {
        imgToShow = image
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img className={styles.productImg} src={imgToShow} alt="Product img" />
    )
};
