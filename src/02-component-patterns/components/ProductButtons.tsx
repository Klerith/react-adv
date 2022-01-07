import { useCallback, useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface PropsButtons {
  className?: string
  style?   : React.CSSProperties
}

export const ProductButtons = ( { className, style } : PropsButtons) => {
  // maxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext)
  
  // isMaxReached useCallback
  const isMaxReached = useCallback(
    () => {
      if( counter === maxCount ){
        return true
      }
      return false
    },
    [counter, maxCount],
  )

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style} >
        <button 
          onClick={() => increaseBy(-1)}
          className={styles.buttonMinus} 
        >
          -
        </button>

        <div className={styles.countLabel}>{counter}</div>

        <button 
          className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
          onClick={() => increaseBy(1)}
        >
          +
        </button>
      </div>
  )
}

export default ProductButtons