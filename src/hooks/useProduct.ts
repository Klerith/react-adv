import { useEffect, useRef, useState } from "react";
import { Product, onChangeArg } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArg) => void;
  value?: number;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setcounter] = useState(value);
   
  const isControlled   = useRef( !!onChange)


  const increaseBy = (value: number) => {
    /// Math.max retorna el valor maxmo
    if (isControlled.current ) {
         return onChange!({counter: value,  product})
       }

    const newValue = Math.max(counter + value, 0);
         
  
    setcounter(newValue);
    onChange && onChange({ counter: newValue, product });
  };

  useEffect(() => {
    setcounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
