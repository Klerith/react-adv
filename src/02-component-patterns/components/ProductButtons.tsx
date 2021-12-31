import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface PropsButtons {
  className?: string
  style?   : React.CSSProperties
}

export const ProductButtons = ( { className, style } : PropsButtons) => {

  const { counter, increaseBy } = useContext(ProductContext)
  
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
          className={styles.buttonAdd}
          onClick={() => increaseBy(1)}
        >
          +
        </button>
      </div>
  )
}

export default ProductButtons