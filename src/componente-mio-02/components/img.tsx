import { useContext } from "react";
import { CardContext } from "./card";

export const Img = () =>{

  const { data } = useContext(CardContext);
  const { img } = data;

  return(
    <img alt="foto" src={img}></img>
  )
};