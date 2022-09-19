import { ProductButtons } from "../components/ProductButtons";
import ProductCard from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import "../styles/custom-styles.css";
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
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" img={""} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
