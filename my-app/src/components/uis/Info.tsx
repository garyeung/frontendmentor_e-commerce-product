import { useContext, useState } from 'react';
import './Info.less';
import IconPush from '@/assets/images/icon-plus.svg?react';
import IconMinus from '@/assets/images/icon-minus.svg?react';
import IconCart from '@/assets/images/icon-cart-light.svg?react';
import {ActionType, CartItem, myContext } from '../../service';
import { discountInString, priceInString, rawprice } from '@/services/utils';

interface Props {
    brand: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    id: number,
    pictures: string[],
}

function Info({...props}: Props){
    const {brand, name, description, price, discount, id} = props;
    const [quantity, setQuantity] = useState(0);

    const addQuantity = ()=> {
        setQuantity(quantity+1);
    }

    const reduceQuantity = () => {
        if(quantity > 0){
            setQuantity(quantity-1);
        }
    }

    const resetQuantity = () => {
        setQuantity(0);
    }

    const pushItem = useContext(myContext)!.handle;

    const handleClick = () => {
        if(quantity)
        {
            const item: CartItem = {
                ...props,
                quantity: quantity,
                amount: quantity*price
            } 
            pushItem(ActionType.add, id, item);
            resetQuantity();
        }
    }

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
                    <button onClick={reduceQuantity} className='description__reduce'>
                        <IconMinus />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={addQuantity}>
                        <IconPush />
                    </button>
                </div>
                <div className='description__cart' role='button' onClick={handleClick}>
                  <IconCart />
                  <span>Add to cart</span>
                </div>

            </div> 
        </div>

    );
}

export default Info;