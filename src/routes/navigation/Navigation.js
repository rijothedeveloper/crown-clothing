import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserConext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cartIcon/CartIcon";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import CartDropDown from "../../components/cartDropDown/CartDropDown";
import { CartContext } from "../../contexts/Cart.Context";

const Navigation = () => {
  const { currentUser } = useContext(UserConext);
  const { isCartOpen, totalQuantity } = useContext(CartContext);

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
