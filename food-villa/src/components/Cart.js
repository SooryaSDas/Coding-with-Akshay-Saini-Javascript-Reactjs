import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemQuantity from "./ItemQuantity";
import useItemTotal from "../utils/useItemTotal.js";
import {Link} from "react-router-dom"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const getItemTotal = useItemTotal();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return Object.values(cartItems).length > 0 ? (
    <div className="w-50 flex mt-11 mx-96 p-36 justify-between sm:p-0 xsm:p-0 mob:p-0 sm:flex-col xsm:flex-col mob:flex-col">
      

      <div className="bg-white drop-shadow-md flex-2 p-6 w-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg mt-2.5 text-title font-bold ">Cart Items</h1>
          <button
            className="w-[80px] h-[22px] rounded-md bg-red-700 text-white text-sm"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
        {Object.values(cartItems).map((item) => {
          return (
            <div className="my-3">
              <div className="flex items-center mt-8">
                <p className="px-2 w-48 text-sm">{item.name}</p>
                <div className="px-5">
                  <ItemQuantity item={item} key={item.id} />
                </div>

                <p className="font-thin text-sm">
                  {"₹ " + (item.price / 100) * item.quantity}
                </p>
              </div>
            </div>
          );
        })}
          
          <div className="border border-black my-2"></div>
        <div className="flex justify-between">
          <p className="font-bold text-sm">To Pay</p>
          <p className="font-bold  text-sm">{"₹ " + getItemTotal()}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
			<img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" className="h-[200px] w-[200px]" />
			<h2 className="px-14 pt-8 my-4">Your cart is empty !</h2>
				<Link to="/">
					<button className="bg-green-800 px-4 py-2 text-white hover:drop-shadow-lg backdrop-blur">
          SEE RESTAURANTS NEAR YOU
					</button>
				</Link>
		</div>
  );
};

export default Cart;
