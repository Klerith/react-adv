import { useContext } from "react";
import styles from "../../02-components-patterns/styles/styles.module.css";
import noImg from "../../02-components-patterns/assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImg;
  }
  return <img className={styles.productImg} src={imgToShow} alt="" />;
};
