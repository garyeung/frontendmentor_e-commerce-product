import { createContext } from "react";
import ICartItem from "../interfaces/CartItem";
import IProduct from "../interfaces/Product";


interface ICartItemContext {
    value: ICartItem[],
    add: (id: number, quantity: number) => void,
    delete: (id: number) => void,
}

export const CartItemContext = createContext<null|ICartItemContext>(null);

interface IProductContext {
    value: IProduct
}

export const ProductContext = createContext<null|IProductContext>(null);