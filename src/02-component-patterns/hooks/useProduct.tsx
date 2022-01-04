import { useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/IProduct'
interface Props {
  product   : Product,
  onChange? : ( args: onChangeArgs ) => void,
}

const useProduct = ( { onChange, product }: Props ) => {

  const [counter, setCounter] = useState(0)

  const increaseBy = (value: number) => {
    let newValue = Math.max(0, counter + value)
    
    setCounter(newValue)
    if(onChange) onChange({product, count: newValue })
  }

  return {
    counter,
    increaseBy,
  }
  
}

export default useProduct