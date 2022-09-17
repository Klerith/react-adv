import React from "react";
import { ProductButtons } from "../components/ProductButtons";
import ProductCard from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
const product = {
  id: "2",
  title: "jugaso ",
  img: "./coffee-mug.png",
};
const ShoppingPage = () => {
  return (
    <div>
      <h2>Shopping Card</h2>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
