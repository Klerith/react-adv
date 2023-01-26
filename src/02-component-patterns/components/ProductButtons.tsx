import { useContext } from "react";

import { ProductCardContext } from "./ProductCard";
import { ProductCardButtons } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
    const { counter, increaseBy }: ProductCardButtons = useContext(ProductCardContext);

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
};