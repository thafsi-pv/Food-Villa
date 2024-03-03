import React, { useState, useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { TbDiscount2 } from "react-icons/tb";
import { IoMdHelpBuoy } from "react-icons/io";
import { BiUser, BiHome } from "react-icons/bi";
import { SiIfood } from "react-icons/si";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import logo from "../Assets/Img/foodvillaLogo.jpeg";

const Title = () => {
  return (
    <div>
      <a>
        <p className="flex items-center text-xl space-x-1 font-bold">
          {/* <span>F</span>
          <span className="text-orange-500 mt-2">
            <SiIfood />
          </span>
          <span>dVilla</span> */}
          <img data-testid="logo" className="h-12" src={logo} alt="" />
        </p>
      </a>
    </div>
  );
};

function header() {
  const { user } = useContext(UserContext);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between h-18 p-5 shadow-lg fixed top-0 w-full backdrop-blur-md">
      <div>
        <Title />
      </div>
      <div className="flex">
        <ul className="flex justify-between space-x-5">
          <li>
            <Link to="/" className="flex items-center hover:text-orange-500">
              <BiHome className="w-5 h-5" />
              <p className="font-semibold text-sm">Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center hover:text-orange-500"
            >
              <BiHome className="w-5 h-5" />
              <p className="font-semibold text-sm">About Us</p>
            </Link>
          </li>

          <li>
            <Link
              to="/offers"
              className="flex items-center hover:text-orange-500"
            >
              <TbDiscount2 className="w-5 h-5" />
              <p className="font-semibold text-sm">Offers</p>
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="flex items-center hover:text-orange-500"
            >
              <IoMdHelpBuoy className="w-5 h-5" />
              <p className="font-semibold text-sm">Help</p>
            </Link>
          </li>
          <li className="flex items-center hover:text-orange-500">
            <BiUser className="w-5 h-5" />
            <p className="font-semibold text-sm">Sign In</p>
          </li>
          <li className="flex items-center hover:text-orange-500">
            <Link to="/cart">
              <div className="relative">
                <FiShoppingCart className="w-5 h-5" />
                <div className="absolute -right-4 -top-4">
                  <span className="text-center text-sm bg-orange-500 rounded-full px-2 ml-2 text-white" data-testid="cart">
                    {cartItems?.length}
                  </span>
                </div>
              </div>
            </Link>
          </li>

          <li className="flex items-center hover:text-orange-500">
            <BiUser className="w-5 h-5" />
            <p className="font-semibold text-sm">{user.name}</p>
          </li>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setLoggedIn(false);
            }}
          >
            LogOut
          </button>
        ) : (
          // This code creates a button with the text "LogIn" that, when clicked,
          //will set the loggedIn state to true and link to the "/login" page.
          <Link to="/login">
            <button
              onClick={() => {
                setLoggedIn(true);
              }}
            >
              LogIn
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default header;
