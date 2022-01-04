import { Props as IProductCard } from "../components/ProductCard";

import { PropsButtons } from "../components/ProductButtons";
import { PropsImg } from "../components/ProductImage";
import { PropsTitle } from '../components/ProductTitle';

export interface Product {
  id    : string,
  title : string,
  img?  : string,
}

export interface ProviderProps {
  counter   : number,
  product   : Product
  increaseBy: (value: number) => void,
}


export interface ProductCardProps {
  ({ product, children }: IProductCard ): JSX.Element,
  Title  : (  Props : PropsTitle  )  => JSX.Element,
  Image  : (  Props : PropsImg    )  => JSX.Element,
  Buttons: (  Props : PropsButtons)  => JSX.Element
}


export interface onChangeArgs {
  product: Product,
  count: number,
}