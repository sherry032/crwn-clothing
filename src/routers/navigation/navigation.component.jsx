import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLog } from "../../assets/crown.svg"

import { UserContext } from "../../contexts/user.context"
import {signOutUser} from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation.styles"

const Navigation =()=>{
  const {currentUser} = useContext(UserContext)
  const {showCart} = useContext(CartContext)

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