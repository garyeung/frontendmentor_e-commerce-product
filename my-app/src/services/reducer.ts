import ICartItem from "../interfaces/CartItem";

export enum ActionType {
    add,
    reduce
}

export interface CartAction {
    type: ActionType,
    id: number,
    quantity?: number,
}

export const CartItemReducer = (items: ICartItem[], action: CartAction) => {
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
            updateItems[index].quantity = action.quantity!;
          }
          else{
            updateItems.push({id: action.id, quantity: action.quantity!})
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