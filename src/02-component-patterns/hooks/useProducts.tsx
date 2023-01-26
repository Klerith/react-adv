import { useState } from 'react'

const useProducts = () => {

    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0));
    }

    return { counter, increaseBy }
}

export default useProducts