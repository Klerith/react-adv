import { useState } from "react";
import { Product, onChangeArg } from "../interfaces/interfaces";

 

interface useProductArgs {
  product: Product;
  onChange?:  ( args: onChangeArg) => void
  

}

export const useProducts = (  {  onChange, product} : useProductArgs ) => {
  const [counter, setcounter] = useState(0);

  const increaseBy = (value: number) => {
    /// Math.max retorna el valor maxmo
    const newValue =  Math.max(counter + value, 0);
   
    setcounter( newValue )
    onChange && onChange({ counter: newValue, product} )
  };

  return {
    counter,
    increaseBy,
  };
};
