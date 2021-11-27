import { useContext } from "react"
import { ProductContext } from "../../context/Product.Context"
import styles from "../../styles/styles.module.css"

export const ProductButtons = () => {

  const {counter, increseBy} = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button 
        className={styles.buttonMinus}
        onClick={() => increseBy( -1 )}
      >-</button>
      <div 
        className={styles.countLabel}> {counter} </div>
      <button 
        className={styles.buttonAdd}
        onClick={() => increseBy( 1 )}
      >+</button>
    </div>
  )

}