import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface PropsButtons {
  className?: string
}

export const ProductButtons = ( { className } : PropsButtons) => {

  const { counter, increaseBy } = useContext(ProductContext)
  
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
        <button 
          onClick={() => increaseBy(-1)}
          className={styles.buttonMinus} 
        >
          -
        </button>

        <div className={styles.countLabel}>{counter}</div>

        <button 
          className={styles.buttonAdd}
          onClick={() => increaseBy(1)}
        >
          +
        </button>
      </div>
  )
}

export default ProductButtons