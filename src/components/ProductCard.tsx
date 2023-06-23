import styles from "../styles/styles.module.css";

import { useProducts } from "../hooks/useProduct";
import { createContext } from "react";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProducts();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* esto se renderisa super bien y se llama Component patter  */}
        {/* <ProductImage img={product.img} /> */}

        {/* <ProductTitle title="Cofie" /> */}

        {/* <img src={NoImg} alt="No Imagen" /> */}

        {/* <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
