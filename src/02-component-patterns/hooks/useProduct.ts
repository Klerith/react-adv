import { useState } from "react"

type UseProductType = {
    counter: number;
    increasedBy: (value: number) => void;
}

export const useProduct = (initialState:number = 0):UseProductType => {
    const [counter, setcounter] = useState(initialState)

    const increasedBy = (value:number) => {
        setcounter(prev => Math.max(prev + value , 0))
    }

    return {
        counter, 
        increasedBy
    }
}