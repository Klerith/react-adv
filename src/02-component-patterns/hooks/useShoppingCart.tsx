import { useState } from 'react'
import { Product, ProductsCart } from '../interfaces/interfaces'

type ProductInCart = {[key:string] : ProductsCart}


type UseShoppingCartResponse  =  {
  onProductCountChange: (count: number, product: Product) => void;
  shoppingCart: ProductInCart;
}

export const useShoppingCart = (): UseShoppingCartResponse => {

  const [shoppingCart, setShoppingCart] = useState<ProductInCart>({ })

  const onProductCountChange = (count:number, product:Product) => {
    setShoppingCart((prev) => {
      // console.log(count, product.id)    
       
      const productInCart: ProductsCart = prev[product.id] || { ...product, count:0 }
     
      if( Math.max(productInCart.count + count, 0) > 0 ){
          productInCart.count += count
          return {
            ...prev,
            [productInCart.id]: productInCart
          }
      }
        /* Borra elemento del carrito */
        // const cartWithoutZeros = { ...shoppingCart }
        // delete cartWithoutZeros[product.id]
        const { [product.id] : toDelete, ...rest } = prev
        return {...rest } 
    

    })
}

  return {
    onProductCountChange,
    shoppingCart
  }
}
