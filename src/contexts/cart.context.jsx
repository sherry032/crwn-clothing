// import { createContext, useReducer } from "react";

// export const CartContext = createContext({
//     showCart: false,
//     toggleCart:()=>{},
//     cartItems:[],
//     addCartItems: (item)=>{},
//     decrementCartItems: (id)=>{},
//     removeCartItem: (id)=>{},
//     totalCount: 0,
//     totalPrice: 0
// })

// export const CART_ACTION_TYPES = {
//     "ADD_CART_ITEM":"ADD_CART_ITEM",
//     "DECREMENT_CART_ITEM":"DECREMENT_CART_ITEM",
//     "REMOVE_CART_ITEM":"REMOVE_CART_ITEM",
//     "IS_CART_SHOWN": "IS_CART_SHOWN"

// }

// const cartReducer = (state, action)=>{
//     const {type, payload} = action
//     if(type === CART_ACTION_TYPES.ADD_CART_ITEM){
//         const existingItem = state.cartItems.find(product=> product.id === payload.id)
//         const totalCount = state.totalCount + 1
//         const totalPrice = state.totalPrice + payload.price
//         if(existingItem){
//             const cartItems = state.cartItems.map(product=> product.id === payload.id ? {...product, qty: product.qty + 1} : product)
//             return {...state, cartItems, totalCount, totalPrice}
//         }
//         const cartItems = [...state.cartItems, {...payload, qty: 1}]
//         return {...state, cartItems, totalCount, totalPrice}
//     }
//     if(type===CART_ACTION_TYPES.DECREMENT_CART_ITEM){
//         const totalCount = state.totalCount - 1
//         const existingItem = state.cartItems.find(product=> product.id === payload)
//         const totalPrice = state.totalPrice - existingItem.price
//         if(existingItem.qty ===1){
//             const cartItems =  state.cartItems.filter(product=> product.id !== payload)
            
//             return {...state, cartItems, totalCount, totalPrice}
//         }
//         const cartItems = state.cartItems.map(product=> product.id === payload ? {...product, qty: product.qty - 1} : product)
//         return {...state, cartItems, totalCount, totalPrice}
//     }
//     if(type ===CART_ACTION_TYPES.REMOVE_CART_ITEM){
//         const existingItem = state.cartItems.find(product=> product.id === payload)
//         const {qty, price} = existingItem
//         const totalCount = state.totalCount - qty
//         const totalPrice = state.totalPrice - qty * price 
  
//         const cartItems = state.cartItems.filter(product=> product.id !== payload)
//         return {...state, cartItems, totalCount, totalPrice}
//     }

//     if(type === CART_ACTION_TYPES.IS_CART_SHOWN){
//         const showCart = payload
//         return {...state, showCart}
//     }
// }

// const INITIAL_STATE = {
//     showCart: false,
//     cartItems:[],
//     totalCount: 0,
//     totalPrice: 0
// }

// export const CartProvider = ({children})=>{
//     const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
//     const {showCart, cartItems, totalCount, totalPrice} = state
//     const addCartItemsHandler=(item)=>{
//         dispatch({
//             type: CART_ACTION_TYPES.ADD_CART_ITEM,
//             payload:item
//         })
//     }
//     const decrementCartItemsHandler=(id)=>{
//         dispatch({
//             type:CART_ACTION_TYPES.DECREMENT_CART_ITEM,
//             payload:id
//         })
//     }
//     const removeCartItemHandler = (id)=>{
//         dispatch({
//             type:CART_ACTION_TYPES.REMOVE_CART_ITEM,
//             payload:id
//         })
//     }
//     const toggleCartHandler =(bool)=>{
//         dispatch({
//             type: CART_ACTION_TYPES.IS_CART_SHOWN,
//             payload:bool
//         })
//     }
//     const value={showCart, 
//         toggleCart: toggleCartHandler, 
//         cartItems, 
//         addCartItems: addCartItemsHandler, 
//         decrementCartItems: decrementCartItemsHandler,
//         removeCartItem:removeCartItemHandler,
//         totalCount,
//         totalPrice
//         }

//     return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
// }