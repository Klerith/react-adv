import { useContext } from "react";
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';


export const ProductButtons = () => {

    const { count, handleIncrase} = useContext(ProductContext);

    return (
        <div className={ styles.buttonsContainer }>
            <button onClick={() => handleIncrase(-1) } className={ styles.buttonMinus }> - </button>
            <div className={ styles.countLabel }> { count } </div>
            <button onClick={ () => handleIncrase(+1) } className={ styles.buttonAdd }> + </button>
        </div>
    )
}