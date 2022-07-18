
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles.js"

const CartIcon = ({clickHandler})=>{
    const {showCart, setShowCart, totalCount}= useContext(CartContext)

    const toggleShowCart = ()=>{
        setShowCart(!showCart)
    }
    return(
        <CartIconContainer onClick={toggleShowCart}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{totalCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon