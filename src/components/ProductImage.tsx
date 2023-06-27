import cofeImg from "../assets/coffee-mug.png";
import NoImg from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

import { useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Props {
  className?: string;
  img?: string;
}

export const ProductImage = ({ img = cofeImg, className }: Props) => {
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
      className={` ${styles.productImg} ${className}`}
      // src={img ? cofeImg : NoImg}
      src={imgToShow}
      alt="Produt- img"
    />
  );
};
