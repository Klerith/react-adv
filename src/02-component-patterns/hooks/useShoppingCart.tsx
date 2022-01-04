import { useState } from "react"
import { onChangeArgs, ProductInCart } from "../interfaces/IProduct"

const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ({count, product}: onChangeArgs) => {

    setShoppingCart( oldValue => {

      const productInCart: ProductInCart = oldValue[product.id] || { ...product, count: 0 }

      if( Math.max( productInCart.count + count, 0 ) > 0 ){
        productInCart.count += count
        return { 
          ...oldValue, 
          [product.id]: productInCart 
        }
      }

      const { [product.id]: toDelete, ...rest } = oldValue
      return rest

      // if(count === 0){
      //   const { [product.id]: toDelete, ...rest } = oldValue
      //   return rest
      // }
      // return {
      //   ...oldValue,
      //   [product.id]: {
      //     ...product,
      //     count
      //   }
      // }
    })
    
  }

  return {
    shoppingCart,
    onProductCountChange,
  }
}

export default useShoppingCart
