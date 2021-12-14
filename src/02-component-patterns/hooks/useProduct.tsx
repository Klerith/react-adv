import { useState } from 'react'

const useProduct = () => {

  const [counter, setCounter] = useState(0)

  const increaseBy = (value: number) => {
    setCounter( prev => Math.max(0, prev + value))
  }

  return {
    counter,
    increaseBy,
  }
  
}

export default useProduct