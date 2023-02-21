import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  onChangeArgs,
  Product,
  InitialValuesProps,
} from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValuesProps;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const maxCount = useMemo(
    () => initialValues?.maxCount,
    [initialValues?.maxCount]
  );

  const increaseBy = (value: number) => {
    // if (counter === initialValues?.maxCount) {
    //   return;
    // }
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(initialValues.maxCount, newValue);
    }
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const isMaxCountedReached = useCallback(() => {
    if (counter === maxCount) {
      return true;
    }
    return false;
  }, [counter, maxCount]);

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    maxCount,
    isMaxCountedReached,
    reset,
  };
};
