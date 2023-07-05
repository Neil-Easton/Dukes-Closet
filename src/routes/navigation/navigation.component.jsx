import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// import { UserContext } from "../../contexts/user.context";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { CartContext } from "../../contexts/cart.context";
import { auth, signOutUser } from "../../utils/firebase/firebase.utils";
import { setCurrentUser, signOut } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation.styles.jsx";
import { useDispatch } from "react-redux";

const Navigation = () => {
  // const {currentUser, setCurrentUser} = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  // console.log("current user is: " + currentUser);
  const dispatch = useDispatch();

  // const {isCartOpen} = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  
  const signOutHandler = () => {
    dispatch(signOut());
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
