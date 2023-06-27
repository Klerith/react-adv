import React from "react";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";

import  '../styles/styles.module.css'





const product = {
  id: "01",
  title: "Coffie -img",
  img: "../assets/coffee-mug.png",
};


export const ShoppingPage = () => {
  return (
    <div  className="bg-dark">
      <h1>Shopping page </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* HOC = ESTO QUIERE DECIR QUE RECIBE HIJOS   */}
        <ProductCard product={product}>
          <ProductCard.Image   />
          <ProductCard.Title title="Cofie" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
