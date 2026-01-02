import { useEffect, useReducer, } from 'react'
import '@/App.less'
import { ActionType, CartItemReducer } from '@/services/reducer'
import { CartItemContext, ProductContext } from '@/services/context'
import { getCartItemsInStorage, getProductInStore, setCarItemsInStorage } from '@/services/store'
import { Route, Routes } from 'react-router'
import { Page } from './layouts/page'
import { routes } from './routes'
import Collections from './pages/Collections'

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
        <ProductContext.Provider value={{
          value: sampleProduct
        }}>
          <Routes>
            <Route path="/" element={<Page/>}>
              <Route index element={<Collections />} />
              {routes.map((route, index) => (
                <Route key={route.name+index} path={route.path} element={route.element} />
              ))}
            </Route>
          </Routes>
        </ProductContext.Provider>
      </CartItemContext.Provider>
  )
}

export default App;