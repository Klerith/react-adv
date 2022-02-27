import { createContext } from "react";
import useAdd from "../useAdd";
import  { CardInterface, ContextCardInterface } from "../interfaces";

export const CardContext = createContext({} as ContextCardInterface);
const { Provider } = CardContext;

const Card = ({ children, data }: CardInterface) => {
  
  const { counter , addOne } = useAdd();

  return(
    <Provider value={{
      data,
      counter,
      addOne,
    }}>
      <div style={{'display': 'flex', 'border': '1px solid', 'height': '500px', 'width': '200px'}}>
        {children}
      </div>
    </Provider>
  )
};

export default Card;   