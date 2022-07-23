import { CART_ACTION_TYPES } from "./cart.type"

const INITIAL_STATE = {
    showCart: false,
    cartItems:[],
}


export const cartReducer = (state=INITIAL_STATE, action)=>{
    const {type, payload} = action
    if(type === CART_ACTION_TYPES.ADD_CART_ITEM){
        const existingItem = state.cartItems.find(product=> product.id === payload.id)
        if(existingItem){
            const cartItems = state.cartItems.map(product=> product.id === payload.id ? {...product, qty: product.qty + 1} : product)
            return {...state, cartItems}
        }
        const cartItems = [...state.cartItems, {...payload, qty: 1}]
        return {...state, cartItems}
    }
    if(type===CART_ACTION_TYPES.DECREMENT_CART_ITEM){
        const existingItem = state.cartItems.find(product=> product.id === payload)
        if(existingItem.qty ===1){
            const cartItems =  state.cartItems.filter(product=> product.id !== payload)
            return {...state, cartItems}
        }
        const cartItems = state.cartItems.map(product=> product.id === payload ? {...product, qty: product.qty - 1} : product)
        return {...state, cartItems}
    }
    if(type ===CART_ACTION_TYPES.REMOVE_CART_ITEM){
        const cartItems = state.cartItems.filter(product=> product.id !== payload)
        return {...state, cartItems}
    }

    if(type === CART_ACTION_TYPES.IS_CART_SHOWN){
        const showCart = payload
        return {...state, showCart}
    }

    return state
}