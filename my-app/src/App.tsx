import { useEffect, useReducer, } from 'react'
import '@/App.less'
import Header from '@/components/uis/Header'
import Product from '@/components/uis/Product/Product'
import { ActionType, CartItemReducer } from '@/services/reducer'
import { CartItemContext } from '@/services/context'
import { getCartItemsInStorage, getProductInStore, setCarItemsInStorage } from '@/services/store'

function App() {
  const [cartItems, dispatch] = useReducer(CartItemReducer, [], getCartItemsInStorage)
  const sampleProduct = getProductInStore(1);

  useEffect(() => {
    setCarItemsInStorage(cartItems);
  }, [cartItems])

  if(sampleProduct === null) {
    console.error("Sample product not found");
    return null;
  }


  const addCartItem = (productId: number, quantity: number) => {
    dispatch({
      type: ActionType.add,
      id: productId,
      quantity: quantity
    
    })
  }

  const delCartItem = (productId: number) => {
    dispatch({
      type: ActionType.del,
      id: productId
    })
  }

  return (
     
      <CartItemContext.Provider value={{
        value: cartItems,
        add: addCartItem,
        del: delCartItem
      }}>
        <div className='container'>
          <Header></Header>
          <div className='main' role='main'>
            <Product product={sampleProduct} />
          </div>
        </div>
      </CartItemContext.Provider>
  )
}

export default App;