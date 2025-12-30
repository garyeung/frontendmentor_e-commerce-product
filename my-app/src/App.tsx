import { useReducer, } from 'react'
import './App.less'
import Header from './components/Header'
import Product from './components/Product'
import { ActionType, CartItemReducer } from './services/reducer'
import { CartItemContext } from './services/context'
import { getCartItemsInStorage } from './services/store'

function App() {
  const [cartItems, dispatch] = useReducer(CartItemReducer, [], getCartItemsInStorage)

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
            <Product />
          </div>
        </div>
      </CartItemContext.Provider>
  )
}

export default App;