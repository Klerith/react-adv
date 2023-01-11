import { useContext } from "react";
import styles from "../../02-components-patterns/styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title }: { title: string }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
