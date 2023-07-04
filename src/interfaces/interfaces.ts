import { Props as ProductButtonProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImgProps } from "../components/ProductImage";
import { Prop as ProductTitlesProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardsHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;

  Title: (Props: ProductTitlesProps) => JSX.Element;

  Image: (Props: ProductImgProps) => JSX.Element;

  Buttons: (Props: ProductButtonProps) => JSX.Element;
}


export interface onChangeArg {
  product: Product
  counter: number

}