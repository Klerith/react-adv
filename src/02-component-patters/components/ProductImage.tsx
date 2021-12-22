import styles from "./../styles/styles.module.css";
import noImage from "./../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let showImage: string;

  if (img) {
    showImage = img;
  } else if (product.img) {
    showImage = product.img;
  } else {
    showImage = noImage;
  }

  return <img className={styles.productImg} src={showImage} alt="coffe Mug" />;
};

export default ProductImage;
