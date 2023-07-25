import { ProductCard as ProductCardComponent } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardComponent, {
    Title   : ProductTitle,
    Image   : ProductImage,
    Buttons : ProductButtons,
})