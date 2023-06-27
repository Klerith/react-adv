import styles from "../styles/styles.module.css";

import { useProducts } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className }: Props) => {
  const { counter, increaseBy } = useProducts();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>
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
