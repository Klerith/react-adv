import cofeImg from "../assets/coffee-mug.png";
import NoImg from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = cofeImg }) => {
  const { product } = useContext(ProductContext); 

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = NoImg;
  }

  return (
    <img
      className={styles.productImg}
      // src={img ? cofeImg : NoImg}
      src={imgToShow}
      alt="Produt- img"
    />
  );
};
