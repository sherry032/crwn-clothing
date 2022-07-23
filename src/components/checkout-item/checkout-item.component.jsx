// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { useDispatch } from "react-redux/es/exports"
import {addCartItems, decrementCartItems, removeCartItem} from "../../store/cart/cart.action"
import {CheckoutItemContainer, NameQuantityPrice, RemoveButton, Quantity, ImageContainer} from "./checkout-item.styles"

const CheckoutItem =({cartItem})=>{
    const {name, price, qty, imageUrl, id} = cartItem
    const dispatch = useDispatch()
    // const {addCartItems, decrementCartItems, removeCartItem} = useContext(CartContext)
    const addCartItemsHandler = ()=>{
        dispatch(addCartItems(cartItem))
    }
    const decrementCartItemsHandler = ()=>{
        dispatch(decrementCartItems(id))
    }
    const removeCartItemHandler = ()=>{
        dispatch(removeCartItem(id))
    }
return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name} />
        </ImageContainer>
        <NameQuantityPrice>{name}</NameQuantityPrice>
        <Quantity>
            <div className="arrow" onClick={decrementCartItemsHandler}>&#10094;</div>
            <span className="value">{qty}</span>
            <div className="arrow" onClick={addCartItemsHandler}>&#10095;</div>
        </Quantity>
        <NameQuantityPrice>${(price * qty).toFixed(0)}</NameQuantityPrice>
        <RemoveButton onClick={removeCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
)
}

export default CheckoutItem