import { createContext } from "react";
export const priceInString = (price: number) => {
       if(price){
                return `$${price.toFixed(2)}`;
       } 
       else {
        return 'Free';
       }
    }
export const discountInString = (dis: number)=>{
        if(dis == 0){return "";}
        return dis*100 + '%';
    }

export const rawprice = (p: number, dis:number) => {
        if(dis){
            return priceInString(p/dis);
        }
        else{
            return "";
        }
    };


export interface ProductProps {
      id: number,
      name: string,
      brand: string,
      price: number,
      discount: number,
      pictures: string[],
      description:string,
}

export interface CartItem extends ProductProps {
    quantity:number,
    amount:  number
}

export enum ActionType {
    add,
    reduce,
}

export interface Action {
    type: ActionType,
}

export interface CartAction extends Action {
    id: number,
    payload?: CartItem,
}

interface ContextProps {
    data: CartItem[],
    handle: (action: ActionType, id:number, item?: CartItem) => void,
}

export const myContext = createContext<null|ContextProps>(null);