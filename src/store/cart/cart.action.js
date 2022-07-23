import { CART_ACTION_TYPES } from "./cart.type"
export const addCartItems=(item)=>{
    return{
        type: CART_ACTION_TYPES.ADD_CART_ITEM,
        payload:item
    }
}
export const decrementCartItems=(id)=>{
    return{
        type:CART_ACTION_TYPES.DECREMENT_CART_ITEM,
        payload:id
    }
}
export const removeCartItem = (id)=>{
    return{
        type:CART_ACTION_TYPES.REMOVE_CART_ITEM,
        payload:id
    }
}
export const toggleCart =(bool)=>{
    return{
        type: CART_ACTION_TYPES.IS_CART_SHOWN,
        payload:bool
    }
}