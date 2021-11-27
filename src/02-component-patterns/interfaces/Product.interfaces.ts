import { ReactElement } from "react";

export interface Iprops {
  children?: ReactElement | ReactElement[],
  product: Iproduct
}

export interface Iproduct {
  id: string,
  title: string,
  img?: string,
}

export interface IproductContextProps {
  counter: number,
  increseBy: (value: number) => void,
  product: Iproduct
}