import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/IProduct'
interface Props {
  product   : Product,
  onChange? : ( args: onChangeArgs ) => void,
  value?    : number,
  initialValues? : InitialValues
}

const useProduct = ( { onChange, product, value = 0, initialValues }: Props ) => {

  const [counter, setCounter] = useState( initialValues?.count || value )

  const isMounted = useRef( false )


  const increaseBy = (value: number) => {

    let newValue = Math.max(counter + value, 0)
    if(initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }
    setCounter( newValue )
    onChange && onChange({  product, count: newValue })
  }

  const reset = () => {
    setCounter( initialValues?.count || 0 )
  }

  useEffect(() => {
    if( !isMounted.current ) return;
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset
  }
  
}

export default useProduct