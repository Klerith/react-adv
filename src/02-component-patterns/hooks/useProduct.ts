import { useState } from 'react';

export const useProduct = () => {

    const [counter, setCouter] = useState(0);

    const increaseBy = (value: number) => {
        setCouter(prev => Math.max(prev + value, 0))
    }

    return {
        counter, 
        increaseBy
    }
}