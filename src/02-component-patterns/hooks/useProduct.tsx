import { useState, useEffect, useRef } from "react";
import { Product } from "../interfaces/interfaces";

type UseProductType = {
  counter: number;
  increasedBy: (value: number) => void;
};

type OnChangeType = (count: number, product: Product) => void;

type UseProductArgsType = {
  initialState: number;
  onChange?: OnChangeType;
  product?: Product;
  value?: number;
};

export const useProduct = ({
  initialState,
  onChange,
  product,
  value,
}: UseProductArgsType): UseProductType => {
  const [counter, setcounter] = useState(initialState);

  const isControlled = useRef(!!onChange);
  // console.log("hook", value, counter, !!onChange, !!product);
  const increasedBy = (value: number): void => {
    if (isControlled.current) {
      onChange!(value, product!);
      return;
    }
    const newValue = Math.max(counter + value, 0);
    setcounter(newValue);
  };

  useEffect(() => {
    setcounter(value!);
  }, [value, product]);

  return {
    counter,
    increasedBy,
  };
};
