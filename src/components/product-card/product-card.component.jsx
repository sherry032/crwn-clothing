import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import { useDispatch } from "react-redux"
import { addCartItems} from "../../store/cart/cart.action"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { ProductCardContainer, Footer}from "./product-card.styles"
const ProductCard = ({product})=>{
    const {name, price, imageUrl}= product
    const dispatch = useDispatch()
    // const {addCartItems} = useContext(CartContext)
    const addToCartHandler=()=>{
        dispatch(addCartItems(product))
    }
    return(
        <ProductCardContainer>
            <img className="img" src={imageUrl} alt={name}/>
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCartHandler}>Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard