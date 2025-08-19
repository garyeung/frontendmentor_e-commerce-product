import { useReducer, } from 'react'
import './App.less'
import Header from './components/Header'
import Product from './components/Product'
import { ActionType, CartAction, CartItem,  myContext } from './service'

function App() {
  const initalCartItems: CartItem[] = [];
  const [cartItems, dispatch] = useReducer(reducer, initalCartItems)

  const changeCartItems = (action: ActionType, id:number, item?: CartItem) => {
    dispatch({
      type: action,
      id: id,
      payload: item,
    })
  }
  
  function reducer(items: CartItem[], action: CartAction){
    const updateItems = [...items];
    const findItem = (n: number)=> {
      return updateItems.findIndex((it)=> {
        return it.id === n
      })
    }
    const index = findItem(action.id)
    switch (action.type){
      case ActionType.add:
          if(index !== -1){
            updateItems[index] = action.payload!;
          }
          else{
            updateItems.push(action.payload!)
          }
          break;
      
      case ActionType.reduce: 
          if(index !== -1){
            updateItems.splice(index, 1);
          }
          break;
      default: 
      throw Error('Unknown action: ' + action.type);
     }
    
    return updateItems;
  }

  return (
     
      <myContext.Provider value={{data:cartItems, handle: changeCartItems}}>
      <div className='container'>
        <Header></Header>
     <div className='main' role='main'>
        <Product />
     </div>
    </div>
      </myContext.Provider>
  )
}

export default App;