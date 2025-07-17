import React from "react";
import { selectedCartItem, clearCart } from "../feature/cart/cartSlicee";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast, Bounce } from "react-toastify";

function Cart() {
  const cartItem = useSelector(selectedCartItem);
  const dispatch = useDispatch();

  function clearAllCart() {
    dispatch(clearCart());
    toast.success("Item are clear from cart!", {
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
      <div className="container" style={{ width: "700px" }}>
        {cartItem.length === 0 ? (
             <p className="bg-amber-300 text-center mt-2 p-2">Your cart is empty.</p>
        ) : (
          cartItem.map((item) => (
            <div key={item.id} className="container my-4">
              <div className="card mb-3" style={{ width: "650px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.img}
                      className="img-fluid rounded-start"
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.desc}</p>
                      <p className="card-text">
                        <strong>Price: ${item.price}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex align-center justify-center mt-3 mb-2">
        <button onClick={clearAllCart} className="bg-amber-300 p-2 rounded mb-2">
          clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
