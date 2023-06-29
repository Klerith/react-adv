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
        <ProductCard product={product} className="dark-gray text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title activeClass="active" title="Cofie" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard className="dark-gray text-white" product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" activeClass="active" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70d1f8" }}>
          <ProductImage
            style={{
              justifyContent: "center",
              margin: "auto",
              display: "flex",
              boxShadow: "10px 10px 10px rgba(0,0,0,2)",
              opacity: "0.9",
            }}
          />
          <ProductTitle
            style={{
              color: "gray",
              paddingTop: "10px",
              height: "60px",
              position: "absolute",
              fontWeight: "bold",
            }}
          />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
