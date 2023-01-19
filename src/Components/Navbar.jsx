import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginModel from "../LoginPage/LoginModel";

function Header() {
  const [showLoginModel, setShowLoginModel] = useState(false);

  const loginModelHanding = () => {
    showLoginModel ? setShowLoginModel(false) : setShowLoginModel(true);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img alt="ing" className="header__logo--image"
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
        />
        <a className="header__link" href="https://www.flipkart.com/plus">
          <em>
            Explore{" "}
            <spam className="header__link--plus">
              Plus
              <img
                alt="ing"
                className="header__link--plusIcon"
                src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
              />
            </spam>
          </em>
        </a>
      </div>

      <div className="header__search">
        <input
          className="header__search--inputBox"
          type="text"
          placeholder="Search for products, brands and more..."
        ></input>

        {/* <span className="header__search--icon" /> */}
      </div>



      <div className="header__options">
        {/* <div className='n'> */}
        <div className="" onClick={() => loginModelHanding()}>

          <button className="header__options--login">Login</button>
        </div>
        <div className="header_options--seller"><p>Become a Seller</p></div>
        <div className="header__options--more">
          <p>More▽</p>
          <div className="header__options--moreIcon" />
        </div>
        <div className="header__options--cart">
          <div className="header__options--cartIcon" />
          {/* <div className="link cursor d-flex align-center"><span className="https://img.icons8.com/ios-glyphs/2x/shopping-cart.png"></span> </div> */}
          {/* <Link to="/cart" className="link cursor d-flex align-center"><span className="material-icons-outlined">
                              <span class="glyphicon glyphicon-shopping-cart"></span>

                        </span>Cart</Link> */}
                        {/* <FontAwesomeIcon icon="fas fa-shopping-cart" /> */}
                        {/* <Link href="/"><i className="fas fa-shopping-cart">Cart</i></Link> */}
                        {/* <i class='fas fa-shopping-cart' style='font-size:36px'></i> */}
                        {/* <ShoppingCartIcon className="navbar__cartIcon" /> */}
              <span> 
              <a href="cart.html">  {`Cart:`}  </a>
              </span>
                     {/* <span>Cart</span> */}
        </div>
      </div>
      <LoginModel
        showLoginModel={showLoginModel}
        setShowLoginModel={setShowLoginModel}
      />
    </div>
  );
}

export default Header;


