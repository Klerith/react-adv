import { createContext } from "react";

import useProduct from "./../hooks/useProduct";
import {
  ProductContextProps,
  ProductCardProps,
} from "./../interfaces/interfaces";

import styles from "./../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { increaseBy, counter } = useProduct();

  return (
    <Provider value={{ increaseBy, counter, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

export default ProductCard;
