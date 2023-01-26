import { ProductButtons } from "./ProductButtons";
import { ProductCard  as ProductCardHOC} from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

import { IProductCardHOC } from "../interfaces/interfaces";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: IProductCardHOC = Object.assign( ProductCardHOC, { 
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons
});


