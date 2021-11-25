import { createContext} from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider }  = ProductContext;



export const ProductCard = ({children, product }:ProductCardProps) => {

    const { count, handleIncrase } = useProduct();


    return (
        <Provider value={{
            count,
            handleIncrase,
            product
        }}>

            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}



