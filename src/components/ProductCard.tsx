import styles from "../styles/styles.module.css";

import { useProducts } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import {
  Product,
  ProductContextProps,
  onChangeArg,
} from "../interfaces/interfaces";

export interface Props {
  product: Product;
  value?: number;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArg) => void;
}

export const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value
}: Props) => {
  const { counter, increaseBy } = useProducts({ product, onChange, value});

  return (
    <Provider  value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
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
