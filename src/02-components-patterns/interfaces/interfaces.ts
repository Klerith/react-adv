

import { Props as ProductCardsProps } from '../components/ProductCard'
import { ProductTitleProps } from '../components/ProducTitle';
import { ProductImageProps } from '../components/ProductImage';
import { ProductButtonsProps } from '../components/ProductButtons';
export interface Product {
    id: string,
    title: string,
    img?: string
}
  
export interface ProductContextProps {
    counter: number,
    increaseBy: ( value: number ) => void,
    product: Product,
}

//Definir interface 
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardsProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
}