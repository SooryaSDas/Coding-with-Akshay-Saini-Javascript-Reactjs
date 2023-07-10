import React from "react";
import { UseSelector, useSelector } from "react-redux";


const useItemTotal = () =>{
    const cartItems = useSelector((store) => store.cart.items);

    const getItemTotal = () =>{
        let total = 
            cartItems &&
            Object.values(cartItems)
                .map((item) => (item.price / 100) * item.quantity)
                .reduce((acc, curr) => acc + curr, 0);

        return total;
    };
    return getItemTotal;
};

export default useItemTotal;