import styles from "../styles/styles.module.css";
import useCounter from "../hooks/useCounter";
import { createContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImages";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useCounter();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        <h1>Product Card</h1>
        {children}
        <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons />
      </div>
    </Provider>
  );
};

export default ProductCard;
