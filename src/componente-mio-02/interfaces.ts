import { ReactElement } from "react";

export  interface DataCard {
  tittle: string;
  img: string;
  legend: string;
};

// recibe los elementos que va a renderizar como children y la data de la card 

export  interface CardInterface {
  data: DataCard;
  children?: ReactElement | ReactElement[];
};

export  interface ContextCardInterface {
  data: DataCard;
  counter: number;
  addOne:(value: number) => void;  
}