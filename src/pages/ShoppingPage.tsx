import "../styles/coustomer.css";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";
import { useShoppingCardt } from "../hooks/useShoppingCart";
import { product2 } from "../data/products";

export const ShoppingPage = () => {
  const { onProductConstChange, shoppingCard, products } = useShoppingCardt();

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
            value={shoppingCard[producto.id]?.counter || 0}
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
          <ProductButtons
            className="custom-buttons"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </ProductCard>
        {
          // el Object.entries es para cuando no se deja hacer el .map y necesitamos obtener los valores de entreda o mapearlo
          // pero tiene que salir si o si dos valores , en este caso la key y el product
          Object.entries(shoppingCard).map(([key, product]) => (
            <ProductCard
              key={key}
              style={{ width: "100px" }}
              className="dark-gray text-white"
              product={product}
              value={product.counter}
              onChange={onProductConstChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          ))
        }
      </div>

      {/* <div>
        <code>{JSON.stringify(shoppingCard, null, 5)}</code>
      </div> */}
    </div>
  );
};
