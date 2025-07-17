import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectedCartItem,selectedCartTotal } from '../feature/cart/cartSlicee'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const cartItem = useSelector(selectedCartItem);
  const totalPrice = useSelector(selectedCartTotal);
  return (
    <>
      <div className="nav-bar">
        <div className="left bg-amber-300 rounded text-amber-950 pt-1">
          <h5  onClick={()=>navigate("/")}className="pl-4 pr-4 cursor-pointer" >
            E-commmerce
          </h5>
          </div>
        <div className="middle">
          <button className="bg-amber-300 pr-3 pl-3 pt-1 pb 1 text text-amber-950 rounded" >
            <h5>Cart Price = {totalPrice} Rs</h5>
          </button>
        </div>
        <div className="right pr-3 cursor-pointer bg-light-300 p-2 text-amber-950 rounded">
          <button type="button" className="btn btn-primary position-relative">
          <span onClick={()=>navigate("/cart")} class="material-symbols-outlined">
            shopping_cart
          </span>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {cartItem.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        </div>
      </div>
    </>
  )
};

export default Navbar;