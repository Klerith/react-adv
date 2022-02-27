import { useState } from "react";


const useAdd = () => {

  const [counter, setCounter] = useState(0)

  const addOne = (counter: number) => {
    setCounter(
      counter + 1 
    )
  };

  return {counter, addOne} 

}

export default useAdd; 