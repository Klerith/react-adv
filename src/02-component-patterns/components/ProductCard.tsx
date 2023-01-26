import { createContext } from "react";

import { IProductCardContext, IProductCardProps } from "../interfaces/interfaces";
// import { ProductButtons, ProductImage, ProductTitle } from "./";

import useProducts from "../hooks/useProducts";

import styles from "../styles/styles.module.css";

export const ProductCardContext = createContext({} as IProductCardContext);

export const ProductCard = ({ product, children }: IProductCardProps) => {    
    const { counter, increaseBy } = useProducts();

    return (
        <ProductCardContext.Provider
            value={{
                product,
                counter,
                increaseBy
            }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </ProductCardContext.Provider>
    )
};

/* 
    Se puede asignar componentes a otro componente de este modo 
    cuando los componentes a añadir se encuentran en el mismo archivo. 
*/

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
