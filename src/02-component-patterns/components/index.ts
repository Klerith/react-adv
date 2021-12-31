import {ProductCard as ProductCardHOC} from './ProductCard';
import { ProductCardProps } from '../interfaces/IProduct';

import ProductTitle from './ProductTitle';
import ProductButtons from './ProductButtons';
import ProductImage from './ProductImage';

export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons'
export { ProductImage } from './ProductImage'


export const ProductCard: ProductCardProps = Object.assign( ProductCardHOC,{
  Title   : ProductTitle,
  Buttons : ProductButtons,
  Image   : ProductImage
})


export default ProductCard
