import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from "../checkout-item/checkout-item.component"
import {CheckoutContainer, CheckoutHeader, Total, HeaderBlock} from  "./checkout.styles"
const Checkout = ()=>{
    const {cartItems} = useContext(CartContext)
    const totalPrice = cartItems.reduce((total, item)=> total + item.price * item.qty, 0)
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock>Description</HeaderBlock>
                <HeaderBlock>Quantity</HeaderBlock>
                <HeaderBlock>Price</HeaderBlock>
                <HeaderBlock>Remove</HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(item=><CheckoutItem cartItem={item} key={item.id}/>)}
            <Total>Total: ${totalPrice}</Total>
        </CheckoutContainer>
    )
}

export default Checkout