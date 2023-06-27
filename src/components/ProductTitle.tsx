import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

interface Prop {
  className: string;
  title?: string;
}

//de esta manera se obliga a pasar el title
export const ProductTitle = ({ title, className }: Prop) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${className} ${styles.productDescription}`}>
      {title ? title : product.title}
    </span>
  );
};
