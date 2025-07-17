import React from "react";
import products from "../data";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectedCartItem } from "../feature/cart/cartSlicee";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Product = () => {
  const cartItem = useSelector(selectedCartItem);
  const dispatch = useDispatch();
  function handleCart(item) {
    dispatch(addToCart(item));
    toast.success("Item Added to Cart!", {
      position: "top-right",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
  return (
    <div>
      <ToastContainer />
      <div className="flex align-center justify-center gap-1 mb-0.5">
        <h2>Products</h2>
      </div>
      <div className="container">
        <div className="row m-0.5">
          {products.map((item) => (
            <div key={item.id} className="container col-md-4 gap-1 mb-4">
              <div className="card bg-dark" style={{ width: "18rem" }}>
                <div className="p-3 flex align-center justify-center">
                  <img
                    src={item.img}
                    className="card-img-top p-2:"
                    alt="img"
                    style={{ width: "250px", height: "200px" }}
                  />
                </div>
                <div className="card-body text-light text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc}</p>
                  <div className="">
                    <a href="#" className="btn btn-primary mx-3">
                      {item.price} Rs
                    </a>
                    <a
                      onClick={() => handleCart(item)}
                      href="#"
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
