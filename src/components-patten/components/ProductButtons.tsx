import styles from "../styles/styles.module.css";
import React, { createContext, ReactElement, useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({ className }: { className: string }) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter} </div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +{" "}
      </button>
    </div>
  );
};
