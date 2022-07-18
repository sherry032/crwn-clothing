import { createContext, useState, useReducer } from "react";

export const CartContext = createContext({
    showCart: false,
    setShowCart:()=>{},
    cartItems:[],
    addCartItems: (item)=>{},
    decrementCartItems: (id)=>{},
    removeCartItem: (id)=>{},
    totalCount: 0
})

const cartItemsReducer = (state=[], action)=>{
    if(action.type ==="ADD"){
        const existingItem = state.find(product=> product.id === action.item.id)
        if(existingItem){
            
            return state.map(product=> product.id === action.item.id ? {...product, qty: product.qty + 1} : product)
        }

        return [...state, {...action.item, qty: 1}]
    }
    if(action.type==="DECREMENT"){
        const existingItem = state.find(product=> product.id === action.id)
        if(existingItem.qty ===1){
            return state.filter(product=> product.id !== action.id)
        }
        return state.map(product=> product.id === action.id ? {...product, qty: product.qty - 1} : product)
    }
    if(action.type ==="REMOVE"){
        return state.filter(product=> product.id !== action.id)
    }
}

export const CartProvider = ({children})=>{
    const [showCart, setShowCart]= useState(false)
    const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, [])
    const totalCount = cartItems.reduce((acc,item)=> item.qty + acc, 0)
    const addCartItemsHandler=(item)=>{
        dispatchCartItems({
            type:"ADD",
            item
        })
    }
    const decrementCartItemsHandler=(id)=>{
        dispatchCartItems({
            type:"DECREMENT",
            id
        })
    }
    const removeCartItemHandler = (id)=>{
        dispatchCartItems({
            type:"REMOVE",
            id
        })
    }
    const value={showCart, setShowCart, 
        cartItems, 
        addCartItems: addCartItemsHandler, 
        decrementCartItems: decrementCartItemsHandler,
        removeCartItem:removeCartItemHandler,
        totalCount
        }

    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}