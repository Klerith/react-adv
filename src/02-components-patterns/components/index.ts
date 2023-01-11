import { ProductButtons } from "./ProductButtons";
import ProductCard from "./ProductCard";
import { ProductImage } from "./ProductImages";
import { ProductTitle } from "./ProductTitle";

export { ProductImage } from "./ProductImages";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

export const ProductCardHoc = Object.assign(ProductCard, {
  Title: ProductTitle,
  Button: ProductButtons,
  Image: ProductImage,
});

export default ProductCardHoc;
