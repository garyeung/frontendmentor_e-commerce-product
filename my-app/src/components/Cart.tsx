import  { useContext, useEffect, useRef, useState } from "react";
import CartIcon from '../assets/images/icon-cart-dark.svg?react';
import deleteUrl from '../assets/images/icon-delete.svg';
import { ActionType, CartItem, myContext, priceInString } from "../service";
import '../styles/Cart.less';
import { useClickOutside } from "@/hooks/useClickOutside";


function Cart(){
    const cart = useContext(myContext);
    const [active, setActive] = useState(false);
    const [itemsCount, setItemsCount] = useState(0);
    const cartRef = useRef<HTMLDivElement>(null);

    useClickOutside(cartRef, ()=> {
        setActive(false);
    })

    useEffect(() => {
     if(cart!.data.length !== 0){
         setItemsCount(counting(cart!.data));
     }
     else {
         setItemsCount(0);
     }
    }, [cart]) 

    const handleActive = () => {
        setActive(!active);
    }

    function counting(items: CartItem[]){
        let count = 0;
        items.forEach((item) => {
            count += item.quantity;
        })
        return count;
    }
    const ListCartItem = (Items: CartItem[],) => {
        
    return <ul className="cart__items">{   
        Items.map( (item, index) => {
            return (
            <li key={index+item.id}>
             <Item {...item}/>
            </li>
            );
        })
    }</ul>
    }

    const itemList = ListCartItem(cart!.data);

    return (
        <div className="cart" ref={cartRef}>
          <button onClick={handleActive} className="cart__button">
            <span className={"cart__count " + (itemsCount === 0 ? "" : "cart__count--active")}>{itemsCount}</span>
            <CartIcon />
          </button>

          <div
          className={`cart__container ` + (active? 'cart__container--active': "") }>
            <h3 className="cart__title">Cart</h3> 
            {
                itemsCount === 0?
                <EmptyCart/>
                :
                <>
                 {itemList}
                 <Checkout/>
                </>
            }
          </div>
        </div>
    );
}

function Item({pictures, name, price, quantity, amount, id}:CartItem){
    const handleClick = useContext(myContext)!.handle;

    return(
        <div className="cart__item">
           <img className="item__image" src={pictures[0]} alt="product"/> 
           <h5 className="item__title">{name}</h5>
           <p className="item__amount">{`${priceInString(price)} x ${quantity}`}<span className="item__bold">{priceInString(amount)}</span></p>
           <button className="item__delete" onClick={() =>handleClick(ActionType.reduce, id)}><img alt="delete" src={deleteUrl}/></button>
        </div>
    );
}

function Checkout() {
    const checkout = () =>{
        //sample
    };

    return (<button className="cart__checkout" onClick={checkout}>Checkout</button>);


}

function EmptyCart(){

    return (<p className="cart__empty">Your cart is empty.</p>);
}

export default Cart;