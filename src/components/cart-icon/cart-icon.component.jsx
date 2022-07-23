import { useSelector, useDispatch } from "react-redux/es/exports.js"

// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { selectTotalCount, selectShowCart } from "../../store/cart/cart.selector.js"
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles.js"
import { toggleCart } from "../../store/cart/cart.action.js"

const CartIcon = ()=>{
    // const {showCart, toggleCart, totalCount}= useContext(CartContext)
    const dispatch = useDispatch()
    const showCart = useSelector(selectShowCart)
    const totalCount = useSelector(selectTotalCount)
    const toggleCartHandler = ()=>{
        dispatch(toggleCart(!showCart))
    }
    return(
        <CartIconContainer onClick={toggleCartHandler}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{totalCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon