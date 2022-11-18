import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage, ProductTitle, ProductButtons } from "./ProducComponents";
import { IProductCard } from "../interfaces";

export const ProductCard: IProductCard = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});

export default ProductCard;
export * from "./ProducComponents";
export { default as ProductContext } from "./productContext";
