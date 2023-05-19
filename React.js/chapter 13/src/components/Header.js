import { useState, useContext } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useonline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

// react element
const Title = ()=>(
    <a href="/">
        <img data-testid="logo" className="h-28 p-2" src={logo} alt="logo" />
    </a>
);
const logedinuer = ()=>{
    return true;
}
const Header = ()=>{
    const [islogin,setIsLogin] = useState(true)
    const isOnline = useOnline();
   
    const {user} = useContext(userContext);
    const cartItems = useSelector(store => store.cart.items)

    return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50 lg:bg-red-100">
        <Title/>
        {/* {title} */}
        {/* <button onClick={()=>setTitle("New Food App")}> click me</button> */}
        <div className="nav-item">
            <ul className="flex py-10">
            <li className="px-3 "> 
                <Link to="/"> Home</Link>
            </li>
            <li className="px-3"> 
                <Link to="/about">About</Link>
            </li>
            <li className="px-3"> 
                <Link to="/contact"> Contact</Link>
            </li>
            <li className="px-3"> 
                <Link to="/instamart"> Instamart</Link>
            </li>
            <li className="px-3"> 
                <Link to="/cart" data-testid="cart"> Cart- {cartItems.length} </Link>
            </li>
            </ul>
        </div>
       <span>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </span>
        <h2 data-testid="online-status"> {isOnline ? "online" : "offline"} </h2>
        {islogin ?  <button onClick={()=> setIsLogin(false)} >Logout</button> : <button onClick={()=>setIsLogin(true)}>Login</button> }
    </div>
    );
};



export default Header