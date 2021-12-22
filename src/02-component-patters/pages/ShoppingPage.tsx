import { ProductCard } from "./../components/index";
import { ProductImage, ProductButtons, ProductTitle } from "./../components";

const products = {
  id: "1",
  title: "Coffee Mug",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={products}>
          <ProductCard.Image />
          <ProductCard.Title title="Coffe Mug" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={products}>
          <ProductImage />
          <ProductTitle title="Coffe Mug" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
