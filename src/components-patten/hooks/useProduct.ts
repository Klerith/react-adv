import React, { useState } from "react";

const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev: number) => Math.max(prev + value, 0));
  };
  return { counter, increaseBy };
};

export default useProduct;
