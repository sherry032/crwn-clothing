import {CartItemContainer, ItemDetails, Name, Img} from "./cart-item.styles"

const CartItem = ({cartItem})=>{
    const {name, qty, imageUrl, price}=cartItem
    return(
        <CartItemContainer>
            <Img src={imageUrl} alt={name}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span className="price">
                    {qty} X ${price}
                </span>
            </ItemDetails>
            
        </CartItemContainer>
    )
}

export default CartItem