import { useState } from "react";

export const useProducts = () => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value:number) => {
        setCounter(prev => Math.max( prev + value, 0))
    }

    return {
        //propiedades
        counter,
        //metodos
        increaseBy,
    }
  
}