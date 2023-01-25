import { ReactElement } from "react";
import { Props as ProductCardType } from "../components/ProductCard";
import { Props as PropsProductImage } from "../components/ProductImage";
import { Props as PropsProductTitle } from "../components/ProductTitle";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

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

export interface ProductCardHOCProps {
  ({ children, product, className }: ProductCardType): JSX.Element;
  Title: (Props: PropsProductTitle) => JSX.Element;
  Image: (Props: PropsProductImage) => JSX.Element;
  Buttons: ({ className }: { className?: string }) => JSX.Element;
}
