import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage, ProductTitle, ProductButtons } from "./ProducComponents";
// import { IProductCard } from "../interfaces";
import { ProductCardHOCProps, ProductCardProps } from "../interfaces/interfaces";

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});

export default ProductCard;
export * from "./ProducComponents";
export { default as ProductContext } from "./productContext";
