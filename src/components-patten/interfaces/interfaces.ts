import { ReactElement } from "react";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
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
