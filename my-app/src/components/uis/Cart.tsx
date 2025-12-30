import  { useContext, useEffect, useRef, useState } from "react";
import CartIcon from '@/assets/images/icon-cart-dark.svg?react';
import './Cart.less';
import { useClickOutside } from "@/hooks/useClickOutside";
import { CartItemContext } from "@/services/context";
import ICartItem from "@/interfaces/CartItem";
import Checkout from "./Cart/Checkout";
import Empty from "./Cart/Empty";
import Item from "./Cart/Item";
import { getProductInStore } from "@/services/store";


function Cart(){
    const cartItems = useContext(CartItemContext)!.value;
    const [active, setActive] = useState(false);
    const [itemsCount, setItemsCount] = useState(0);
    const cartRef = useRef<HTMLDivElement>(null);

    useClickOutside(cartRef, ()=> {
        setActive(false);
    })

    useEffect(() => {
     if(cartItems.length !== 0){
         setItemsCount(counting(cartItems));
     }
     else {
         setItemsCount(0);
     }
    }, [cartItems]) 

    const handleActive = () => {
        setActive(!active);
    }

    function counting(items: ICartItem[]){
        let count = 0;
        items.forEach((item) => {
            count += item.quantity;
        })
        return count;
    }
    const ListCartItem = (Items: ICartItem[],) => {
        
    return <ul className="cart__items">{   
        Items.map( (item, index) => {
            const product = getProductInStore(item.id)
            if(product === null){
                return null;
            }
            return (
            <li key={index+item.id}>
             <Item 
             picture={product.pictures[0]}
             name={product.name}
             price={product.price}
             quantity={item.quantity}
             id={item.id}
             />
            </li>
            );
        })
    }</ul>
    }

    const itemList = ListCartItem(cartItems);

    return (
        <div className="cart" ref={cartRef}>
          <button onClick={handleActive} className="cart__button">
            <span className={"cart__count " + (itemsCount === 0 ? "" : "cart__count--active")}>{itemsCount}</span>
            <CartIcon />
          </button>

          <div
          className={`cart__container ` + (active? 'cart__container--active': "") }>
            <h3 className="cart__title">Cart</h3> 
            <div className="cart__content">
            {
                itemsCount === 0?
                <Empty/>
                :
                <>
                 {itemList}
                 <Checkout/>
                </>
            }
            </div>
          </div>
        </div>
    );
}

export default Cart;