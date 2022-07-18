import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import {CheckoutItemContainer, NameQuantityPrice, RemoveButton, Quantity, ImageContainer} from "./checkout-item.styles"

const CheckoutItem =({cartItem})=>{
    const {name, price, qty, imageUrl, id} = cartItem
    const {addCartItems, decrementCartItems, removeCartItem} = useContext(CartContext)
    const addCartItemsHandler = ()=>{
        addCartItems(cartItem)
    }
    const decrementCartItemsHandler = ()=>{
        decrementCartItems(id)
    }
    const removeCartItemHandler = ()=>{
        removeCartItem(id)
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