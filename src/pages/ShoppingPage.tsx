import React from "react";

import "../styles/coustomer.css";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";

const product = {
  id: "01",
  title: "Coffie -img",
  img: "../assets/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping page </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* HOC = ES TO QUIERE DECIR QUE RECIBE HIJOS   */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Cofie" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard className="dark-gray" product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons  />
        </ProductCard>
      </div>
    </div>
  );
};
