import { useContext } from "react";

import { ProductCardContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductCardContext);

    return (
        <span className={styles.productDescription}>
            { title ? title : product.title }
        </span>
    )
};