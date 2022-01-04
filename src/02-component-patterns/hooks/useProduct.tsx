import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/IProduct'
interface Props {
  product   : Product,
  onChange? : ( args: onChangeArgs ) => void,
  value?    : number,
}

const useProduct = ( { onChange, product, value = 0 }: Props ) => {

  const [counter, setCounter] = useState(value)

  const isControlled = useRef( !!onChange )

  const increaseBy = (value: number) => {

    if(isControlled.current && onChange){
      onChange( {product, count: value} )
    }

    let newValue = Math.max(0, counter + value)

    setCounter(newValue)
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy,
  }
  
}

export default useProduct