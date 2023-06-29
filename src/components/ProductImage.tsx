import cofeImg from "../assets/coffee-mug.png";
import NoImg from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

import { useContext } from "react";
import { ProductContext } from "./ProductCard";

 export  interface Props {
  className?: string;
   img?: string;
   style?: React.CSSProperties;
}

export const ProductImage = ({ img = cofeImg, className , style}: Props) => {
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
    <img style={style}
      className={` ${styles.productImg} ${className}`}
      // src={img ? cofeImg : NoImg}
      src={imgToShow}
      alt="Produt- img"
    />
  );
};
