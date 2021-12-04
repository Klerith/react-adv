import { useState } from 'react';


export const useProduct = () => {

    const [count, setCount] = useState(0);


    const handleIncrase = (value:number) => {
        setCount(prev => Math.max( prev + value, 0));
    }

    
    return {
        count,
        handleIncrase
    }
}
