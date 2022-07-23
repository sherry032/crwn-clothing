// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { useSelector } from "react-redux/es/exports"
import {selectCartItems, selectTotalPrice} from "../../store/cart/cart.selector"
import CheckoutItem from "../checkout-item/checkout-item.component"
import PaymentForm from "../payment-form/payment-form.component"
import {CheckoutContainer, CheckoutHeader, Total, HeaderBlock} from  "./checkout.styles"
const Checkout = ()=>{
    // const {cartItems, totalPrice } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectTotalPrice)
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
            <PaymentForm />
        </CheckoutContainer>
    )
}

export default Checkout