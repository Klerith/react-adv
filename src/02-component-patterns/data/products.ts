import { Product } from "../interfaces/IProduct";

const product = {
  id: '1',
  title: "Product 1",
  img: "./coffee-mug.png",
}

const product2 = {
  id: '2',
  title: "Product 2",
  img: "/coffee-mug2.png",
}

export const products: Product[] = [product, product2];