import { CartItemContext } from "@/services/context";
import { priceInString } from "@/services/utils";
import { useContext } from "react";
import DeleteIcon from '@/assets/images/icon-delete.svg?react';

interface ItemProps {
    picture: string,
    name: string,
    price: number,
    quantity: number,
    id: number
}

export default function Item({picture, name, price, quantity, id}:ItemProps){
    const handleClick = useContext(CartItemContext)!.del;

    return(
        <div className="cart__item">
           <div className="cart__itemPart">
             <img className="item__image" src={picture} alt="product"/> 
           </div>
           <div className="cart__itemPart">
             <h5 className="item__title">{name}</h5>
             <p className="item__amount">{`${priceInString(price)} x ${quantity}`}<span className="item__bold">{priceInString(price*quantity)}</span></p>
           </div>
           <div className="cart__itemPart">
             <button className="item__delete" onClick={() =>handleClick(id)}><DeleteIcon/></button>
           </div>
        </div>
    );
}