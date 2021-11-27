import { Iprops } from "../interfaces/Product.interfaces"

import styles from "../styles/styles.module.css"
import useProduct from '../hooks/useProduct';
import { ProductContext } from "../context/Product.Context";

const ProductCart = ({children ,product}:Iprops) => {
  
  const {Provider} = ProductContext;
  const {counter, increseBy} = useProduct()

  return (
    <Provider value={{
      counter,
      increseBy,
      product
    }}>

      <div className={ styles.productCard }>
      
        {children}

      </div>
    </Provider>
  )
}

export default ProductCart
