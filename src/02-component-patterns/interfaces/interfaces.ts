import { ReactElement } from "react";

export interface IProductCardContext {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
}

export interface IProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: number;
  title?: string;
  img?: string;
}

export interface ProductCardButtons {
  counter: number;
  increaseBy: (value: number) => void;
}

export interface IProductCardHOC {
  ({ product, children }: IProductCardProps): JSX.Element;
  Image: ({ image }: { image?: string }) => JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
