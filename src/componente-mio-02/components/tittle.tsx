import { useContext } from "react";
import { CardContext } from "./card";

export const Tittle = () =>{

  const { data } = useContext(CardContext);
  const { tittle } = data;

  return(
    <h5>{tittle}</h5>
  )
};