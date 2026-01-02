import { useContext, useState } from 'react';
import './Info.less';
import IconPush from '@/assets/images/icon-plus.svg?react';
import IconMinus from '@/assets/images/icon-minus.svg?react';
import IconCart from '@/assets/images/icon-cart-light.svg?react';
import { discountInString, priceInString, rawprice } from '@/services/utils';
import { CartItemContext } from '@/services/context';

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

    const addItem = useContext(CartItemContext)!.add;

    const handleClick = () => {
        if(quantity)
        {
            addItem(id, quantity);
            resetQuantity();
        }
    }

    return (
        <div className='info'>
            <span className='info__brand'>{brand}</span>      
            <h1 className='info__name'>{name}</h1>
            <p className='info__description'>{description}</p>
            <div className='info__amount'>
              <div className='info__amountPart'>
                  <span className='info__price'>{priceInString(price)}</span>
                  <span className='info__discount'>{discountInString(discount)}</span>
              </div>
              <div className='info__amountPart'>
               <del className='info__rawprice'>{rawprice(price,discount)}</del>
              </div>
            </div>
            <div className='info__controller'>
                <div className='info__quantity'>
                    <button onClick={reduceQuantity} className='info__reduce' aria-label="Reduce quantity">
                        <IconMinus />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={addQuantity} aria-label="Increase quantity">
                        <IconPush />
                    </button>
                </div>
                <button className='info__cart' onClick={handleClick}>
                  <IconCart />
                  <span>Add to cart</span>
                </button>

            </div> 
        </div>

    );
}

export default Info;