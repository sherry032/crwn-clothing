import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { ReactComponent as CrwnLog } from "../../assets/crown.svg"
import { selectCurrentUser} from "../../store/user/user.selector"
import { selectShowCart } from "../../store/cart/cart.selector"
// import { UserContext } from "../../contexts/user.context"
// import {signOutUser} from "../../utils/firebase/firebase.utils"
import {signOutStart} from "../../store/user/user.action"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
// import { CartContext } from "../../contexts/cart.context"
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation.styles"

const Navigation =()=>{
  const currentUser = useSelector(selectCurrentUser)
  const dispatch= useDispatch()
  // const {currentUser} = useContext(UserContext)
  // const {showCart} = useContext(CartContext)
  const showCart = useSelector(selectShowCart)
  const signOutUser = ()=>{
    dispatch(signOutStart())
  }
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
            <CrwnLog className="logo"/>
            </LogoContainer>
            <NavLinksContainer className="nav-links-container">
                <NavLink to="/shop">SHOP</NavLink>
                {currentUser ? <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>:<NavLink to="/auth">SIGN IN</NavLink>}
                <CartIcon/>
            </NavLinksContainer>
            {showCart && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation