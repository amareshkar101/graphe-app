import React from "react";
import Logo from "../assets/logo.png";
import Bag from "../assets/bag.png";
import Cart from "../assets/cart.png";
import Location from "../assets/location.png";
import Profile from "../assets/profilepic.png";
import Wishlist from "../assets/wishlist.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-div">
          <img src={Logo} className="logo" />
        </div>

        <div className="mid-div">
          <img src={Profile} className="profile" />

          <div className="bag-div">
            <img src={Bag} className="bag" />
          </div>

          <div className="location-div">
            <img src={Location} className="location" />
            <p className="location-text">Los Angeles</p>
          </div>
        </div>

        <div className="cart-div">
          <img src={Cart} className="cart" />
        </div>
      </div>

      <div className="below">
        <div className="text-div">
          <p>34</p>
        </div>
        <div>
          <img src={Wishlist} className="wishlist" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
