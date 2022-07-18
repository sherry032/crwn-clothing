import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom"
import { CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.js"
const CartDropdown=()=>{
    const {cartItems, setShowCart} = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutHandler = ()=>{
        navigate("/checkout")
        setShowCart(false)
    }
return(
    <CartDropdownContainer>
        {cartItems.length === 0 ? <EmptyMessage>Your cart is empty.</EmptyMessage> :
        (<CartItems>
            {cartItems.map(item=><CartItem key={item.id} cartItem={item}/>)}
        </CartItems>)}
        <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
)
}

export default CartDropdown