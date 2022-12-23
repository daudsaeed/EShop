import { Fragment, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import Authentication from "../authentication/authentication";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartDropdownContext } from "../../context/cart-dropdown.context";

import "./navigation.style.scss";

const Navigation = () => {
  const [showForm, setShowForm] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { cartShown, setCartShown } = useContext(CartDropdownContext);
  // const {
  console.log(currentUser);

  // Helper methods
  const signOutHandler = async () => {
    await signOutUser();
  };

  const setCartShownHandler = () => {
    setCartShown(cartShown ? false : true);
  };

  const setShowFormHandler = () => {
    if (cartShown) {
      setCartShownHandler();
    }
    setShowForm(true);
  };

  // JSX
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="navigation__logo-container">
          <CrwnLogo className="navigation__logo" />
          <p>EShop</p>
        </Link>

        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link to="/shop" className="navigation__list-item-link">
              Shop
            </Link>
          </li>

          <li className="navigation__list-item">
            <Link to="#" className="navigation__list-item-link">
              Brands
            </Link>
          </li>

          {!currentUser ? (
            <li className="navigation__list-item" onClick={setShowFormHandler}>
              <Link to="#" className="navigation__list-item-link">
                Login
              </Link>
            </li>
          ) : (
            <li className="navigation__list-item" onClick={signOutHandler}>
              <Link className="navigation__list-item-link" to="#">
                Logout
              </Link>
            </li>
          )}

          <li
            className="navigation__list-item cart"
            onClick={setCartShownHandler}
          >
            {/* <Link to="#" className="navigation__list-item-link">
              Cart
            </Link> */}
            <CartIcon />
          </li>
        </ul>
        {cartShown ? <CartDropdown /> : null}
      </div>
      <Outlet />
      {showForm ? <Authentication setShowForm={setShowForm} /> : null}
    </Fragment>
  );
};

export default Navigation;
