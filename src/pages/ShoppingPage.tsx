import { useState } from "react";

import "../styles/coustomer.css";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";
import { Product } from "../interfaces/interfaces";

const product1 = {
  id: "01",
  title: "Coffie -img",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "02",
  title: "Coffie -Meme",
  img: "./coffee-mug2.png",
};

// de esta manera construimos un arreglo

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  counter: number;
}

export const ShoppingPage = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductConstChange = (event: any) => {
    console.log("onProductConstChange", event);
  };

  return (
    <div>
      <h1>Shopping page </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* HOC = ES TO QUIERE DECIR QUE RECIBE HIJOS   */}
        {/* <ProductCard product={product1} className="dark-gray text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title activeClass="active" title="Cofie" />
          <ProductCard.Buttons />
        </ProductCard> */}

        {products.map((producto) => (
          <ProductCard
            key={producto.id}
            className="dark-gray text-white"
            product={producto}
            onChange={(event) => onProductConstChange(event)}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" activeClass="active" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shoppin-card">
        <ProductCard
          style={{ width: "100px" }}
          className="dark-gray text-white"
          product={product2}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          style={{ width: "100px" }}
          className="dark-gray text-white"
          product={product1}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
