import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cartIcon/CartIcon";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import CartDropDown from "../../components/cartDropDown/CartDropDown";
// import { CartContext } from "../../contexts/Cart.Context";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  selectIsCartOpen,
  selectTotalQuantity,
} from "../../store/cart/cart.selector";

const Navigation = () => {
  // const { currentUser } = useContext(UserConext);
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen, totalQuantity } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <Fragment>
      <NavigationContainer>
        <div>
          <LogoContainer to="/">
            <CrownLogo className="logo" />
          </LogoContainer>
        </div>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGH IN</NavLink>
          )}
          <CartIcon quantity={totalQuantity} />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
