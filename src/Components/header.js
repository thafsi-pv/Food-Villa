import React from "react";
import { FiShoppingCart } from 'react-icons/fi'
import {TbDiscount2} from 'react-icons/tb'
import {IoMdHelpBuoy} from 'react-icons/io'
import {BiUser,BiHome} from 'react-icons/bi'


const Title = () => {
  return (
    <div>
      <a>
        <p className="logo">F<span className="logospan">oo</span>dVilla</p>
      </a>
    </div>
  );
};

function header() {
  return (
    <div className="header">
      <Title/>
      <div className="nav">
        <ul className="nav-items">
          <li><BiHome className="ico"/>Home</li>
          <li><TbDiscount2 className="ico"/>Offers</li>
          <li><IoMdHelpBuoy className="ico"/> Help</li>
          <li><BiUser className="ico"/>Sign In</li>
          <li><FiShoppingCart className="ico" /> Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default header;
