import styles from "../styles/styles.module.css";
import React, { createContext, ReactElement, useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow = img ? img : product.img;
  return (
    <img
      className={styles.productImg}
      src={imgToShow ? imgToShow : noImage}
      alt="Coffee"
    />
  );
};
