import { useDispatch, useSelector } from "react-redux";
import Fooditem from "./Fooditem";
import { addItem } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);

    const dispach = useDispatch();
    const handleClearCart = ()=>{
        dispach(clearCart());
    }
   return(
    <div>
         <h2>Cart Items - {cartItems.length}</h2>
         <button className="bg-green-100" onClick={()=>handleClearCart()}>Clear cart</button>
         <div className="flex">
            {cartItems.map(item => <Fooditem key={item.id} {...item}/>)}
            {/* <Fooditem {...cartItems[0]}/> */}
         </div>
    </div>
   )
}

export default Cart