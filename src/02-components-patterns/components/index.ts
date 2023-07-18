import { ProductCardHOCProps } from './../interfaces/interfaces';

//De esta manera lo hacemos para usar los nombres de cada componente.
//De esta manera lo hacemos para usar los nombres de los componentes asociandolos a los hijos
//ProductCard.Image


import { ProductTitle } from "./ProducTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";

export { ProductTitle } from "./ProducTitle";
export { ProductButtons } from "./ProductButtons";
// export { ProductCard } from "./ProductCard";
export { ProductImage } from "./ProductImage";

//Asignamos propiedades al product card
export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} )

export default ProductCard