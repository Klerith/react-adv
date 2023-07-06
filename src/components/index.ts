import { ProductCardsHOCProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOS } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

// object.assing es para asignar un nuevo valor al objeto

export const ProductCard : ProductCardsHOCProps =  Object.assign(ProductCardHOS, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
