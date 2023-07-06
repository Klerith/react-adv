import { Product } from "../interfaces/interfaces";

const product1 = {
  id: "01",
  title: "Coffie -img",
  img: "./coffee-mug.png",
};

// comentadio
//se re sube

export const product2 = {
  id: "02",
  title: "Coffie -Meme",
  img: "./coffee-mug2.png",
};

// de esta manera construimos un arreglo

export const products: Product[] = [product1, product2];
