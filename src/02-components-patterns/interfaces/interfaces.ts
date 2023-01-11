import { ReactElement } from "react";
import { JsxElement } from "typescript";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductButtonsProps {
  increaseBy: (arg: number) => void;
  counter: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHocProps {
  ({ children, product }: Props): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Button: () => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
}
