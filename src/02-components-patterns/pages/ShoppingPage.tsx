import React from "react";
import ProductCardHoc from "../components";
import ProductCard from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffe Mud - Card",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* <ProductCard product={product}>
        <ProductCard.Title title="Hola Mundo" />
        <ProductCard.Image />
      </ProductCard> */}
      <ProductCard product={product}>
        <ProductCardHoc.Title title="Hola Mundo" />
        <ProductCardHoc.Image />
        <ProductCardHoc.Button />
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
