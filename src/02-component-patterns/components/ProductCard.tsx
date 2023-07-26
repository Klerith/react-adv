import { createContext } from 'react';
import { type ReactElement, type CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <ProductContext.Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div
                className={`${styles.productCard} ${className} `}
                style={style}
            >
                {children}
            </div>
        </ProductContext.Provider>
    )
}

