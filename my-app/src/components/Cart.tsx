import  { useContext, useEffect, useState } from "react";
import CartIcon from '../assets/images/icon-cart-dark.svg?react';
import deleteUrl from '../assets/images/icon-delete.svg';
import { ActionType, CartItem, myContext, priceInString } from "../service";
import '../styles/Cart.less';


function Cart(){
    const [active, setActive] = useState(false);
    const cart = useContext(myContext);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
     if(cart!.data.length !== 0){
         setItemsCount(countItems(cart!.data));
     }
     else {
         setItemsCount(0);
     }
    }, [cart]) 

    function countItems(items: CartItem[]){
        let count = 0;
        items.forEach((item) => {
            count += item.quantity;
        })
        return count;
    }
    const displayCartItem = (Items: CartItem[],) => {
        if(Items.length){
        
        return Items.map( (item, index) => {
            return (
            <>
             <Item {...item} key={index}/>
            </>
            );
        })
        }
    }
    const items = displayCartItem(cart!.data);
    return (
        <div className="cart">
          <div onClick={()=>{setActive(!active)}} className="cart__button" role="button">
            <span className={"cart__count " + (itemsCount === 0 ? "" : "cart__count--active")}>{itemsCount}</span>
            <CartIcon />
            </div>

          <div className={`cart__content ` + (active? 'cart__content--active': "") }>
          <h3>Cart</h3> 
          <div className="cart__items">
              {(itemsCount === 0)? <EmptyCart/> : (<>{items!} <Checkout/></>)}
          </div>
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