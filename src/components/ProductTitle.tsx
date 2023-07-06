import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Prop {
  className?: string;
  title?: string;
  activeClass?: string;
  style?: React.CSSProperties;
}

//de esta manera se obliga a pasar el title
export const ProductTitle = ({ title, className, style }: Prop) => {
  const { product } = useContext(ProductContext);

  return (
    <span style={style} className={`${className} ${styles.productDescription}`}>
      {title ? title : product.title}
    </span>
  );
};
