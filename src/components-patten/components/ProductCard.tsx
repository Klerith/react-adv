import React, { createContext, ReactElement, useContext } from "react";
import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { Props, ProductContextProps } from "../interfaces/interfaces";
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        <span className={styles.productDescription}> {product.title}</span>
      </div>
    </Provider>
  );
};

export default ProductCard;
