import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket)
  return (
    <div className="header">
      {/* Logo on the left -> img  */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Menu on the right */}
      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guess!</span>
            <span className="header__optionLineTwo">Signin</span>
          </div>
        </Link>

        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link className="header__link" to="/checkout">
          {/* basket icon with number */}
          {/* shop basket icon  */}
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            {/* number of item in the basket       */}
            <span className="header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
