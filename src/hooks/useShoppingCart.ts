import { useState } from "react";
import { ProductInCart, onChangeArg } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCardt = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductConstChange = ({ counter, product }: onChangeArg) => {
    console.log({ counter });
    // console.log(counter, product);
    /// los tres puntos trae todo o copia todo el arreglo o el objeto
    /// es decir que muestra todos los datos que en este caso ya existen en producto
    setShoppingCard((oldShoppinCard) => {
      if (counter <= 0) {
        delete oldShoppinCard[product.id];

        return {
          ...oldShoppinCard,
        };
      }

      return {
        ...oldShoppinCard,
        [product.id]: { ...product, counter },
      };
    });
  };

  return {
    products,
    onProductConstChange,
    shoppingCard,
    setShoppingCard,
  };
};
