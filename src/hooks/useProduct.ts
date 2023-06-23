import { useState } from "react";

export const useProducts = () => {
  const [counter, setcounter] = useState(0);

  const increaseBy = (value: number) => {
    /// Math.max retorna el valor maxmo
    setcounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
