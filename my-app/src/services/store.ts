import IProduct from "../interfaces/Product";
import ICartItem from "../interfaces/CartItem"

import product1 from '@/assets/images/image-product-1.jpg';
import product2 from '@/assets/images/image-product-2.jpg';
import product3 from '@/assets/images/image-product-3.jpg';
import product4 from '@/assets/images/image-product-4.jpg';

export const getCartItemsInStorage  = () => {
    const cartItemsRaw = localStorage.getItem("cartItems")
    
    let cartItems:ICartItem[] = []

    if(cartItemsRaw){
        try {
            const parse = JSON.parse (cartItemsRaw); 
            if(Array.isArray(parse)){
                cartItems =  parse 
            }
        } catch (error) {
           cartItems = [] 
           console.error("error to parse cart items in localstorage: ", error)
        }
    }

    return cartItems
}

export const setCarItemsInStorage = (carItems: ICartItem[]) => {
    try {
       const carItemsRaw = JSON.stringify(carItems) 
       localStorage.setItem("cartItems", carItemsRaw) 
       return true

    } catch (error) {
       console.error("can not storage cart items in storage: ", error) 
       return false;
    }
}

export const getProduct = (id: number):IProduct|null => {
        const result = productStore.find(p => p.id === id)
        if(result) {
            return result;
        }
        return null
}



const productStore: IProduct[] = [
    {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    brand: 'Sneaker Company',
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125, 
    discount: 0.5,
    pictures: [product1,product2,product3, product4],

    }
]