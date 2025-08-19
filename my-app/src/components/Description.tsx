import { useContext, useReducer } from 'react';
import '../styles/Description.less';
import push from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';
import cart from '../assets/images/icon-cart-light.svg';
import { Action, ActionType, CartItem, ProductProps, myContext } from '../service';


interface DescriptionState {
    quantity: number,
}
function Description({...props}: ProductProps){
    const {brand, name, description, price, discount, id} = props;

    function reducer(state: DescriptionState, action: Action):DescriptionState {
        switch(action.type){
            case ActionType.add:
                return {
                    quantity: state.quantity+1,
                } 
            case ActionType.reduce:
                return {
                    quantity: state.quantity-1,
                }
            default: 
            throw Error('Unknown action: ' + action.type);
        }
    }
    const initalState: DescriptionState = {
        quantity: 0,
    } 
    const[state, dispatch] = useReducer(reducer, initalState);
    const iconsUrl= {
        add: push,
        reduce: minus,
        cart: cart,
    }
    const pushItem = useContext(myContext)!.handle;

    const handleClick = () => {
        if(state.quantity)
        {
            const item: CartItem = {
                ...props,
                quantity: state.quantity,
                amount: state.quantity*price
            } 
            pushItem(ActionType.add, id, item);
        }
    }


    const addQuantity = ()=> {
        dispatch({
            type: ActionType.add
        })
    }
    const dropQuantity = () => {
        if(state.quantity > 0){
            dispatch({
                type: ActionType.reduce
            })
        }
        
    }
    const priceInString = (price: number) => {
       if(price){
                return `$${price.toFixed(2)}`;
       } 
       else {
        return 'Free';
       }
    }
    const discountInString = (dis: number)=>{
        if(dis == 0){return "";}
        return dis*100 + '%';
    }

    const rawprice = (p: number, dis:number) => {
        if(dis){
            return priceInString(p/dis);
        }
        else{
            return "";
        }
    };

    return (
        <div className='description'>
            <span className='description__brand'>{brand}</span>      
            <h1 className='description__name'>{name}</h1>
            <p className='description__text'>{description}</p>
            <div className='description__amount'>
              <div className='description__left'>
                  <span className='description__price'>{priceInString(price)}</span>
                  <span className='description__discount'>{discountInString(discount)}</span>
              </div>
              <div className='description__right'>
               <del className='description__rawprice'>{rawprice(price,discount)}</del>
              </div>
            </div>
            <div className='description__controller'>
                <div className='description__quantity'>
                    <button onClick={dropQuantity} className='description__reduce'><img alt="reduce" src={iconsUrl.reduce}/></button>
                    <span>{state.quantity}</span>
                    <button onClick={addQuantity}><img alt="add" src={iconsUrl.add}/></button>
                </div>
                <div className='description__cart' role='button' onClick={handleClick}>
                  <img alt="" src={iconsUrl.cart}/><span>Add to cart</span>
                </div>

            </div> 
        </div>

    );
}

export default Description;