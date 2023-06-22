import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { auth, signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation.styles.jsx";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  
  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {!currentUser &&
            <NavLink to="/sign-in">Sign in</NavLink>}
          {currentUser &&
            <NavLink to="/" onClick={signOutHandler}>Sign out</NavLink>}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
