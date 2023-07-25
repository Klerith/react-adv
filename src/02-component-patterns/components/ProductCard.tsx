import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <ProductContext.Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </ProductContext.Provider>
    )
}

