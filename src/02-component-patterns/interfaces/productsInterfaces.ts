import { ReactNode } from "react";

export interface IProduct {
  id: string;
  title: string;
  img?: string;
  className?: string;
}

export interface ProductProps {
  product: IProduct;
  children?: ReactNode;
}

export interface ProductContextProps {
  product: IProduct;
  counter: number;
  increasedBy: (value: number) => void;
}

export interface IProductCard {
  ({ product, children }: ProductProps): JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}
