import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValuesProps, ProductCardHandler } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
   // children?: React.ReactElement | React.ReactElement[];
    children?: (args: ProductCardHandler) => JSX.Element
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?:InitialValuesProps
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props ) => {

    const { counter, increaseBy, maxCount,  isMaxCountedReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product, 
            maxCount,
            isMaxCountedReached
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children && children( 
                    { 
                        count: counter, 
                        isMaxCountedReached, 
                        product, 
                        maxCount, 
                        increaseBy, 
                        reset 
                    })
                }
            </div>
        </Provider>
    )
}
