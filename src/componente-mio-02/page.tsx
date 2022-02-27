import Card from "./components/card";
import { Img } from "./components/img";
import {Tittle} from "./components/tittle";

const dataEj = {
  tittle: 'prueba-01',
  legend: 'leyenda-01',
  img: './coffee-mug.png'
};


export const CardPage = () => {
  return(
    <>
      <Card data={dataEj}>
        <Tittle></Tittle>
        <Img></Img>
      </Card>
    </>
  )
};


