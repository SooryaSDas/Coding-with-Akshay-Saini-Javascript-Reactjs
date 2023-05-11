import { useState } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useonline";
// react element
const Title = ()=>(
    <a href="/">
        <img className="h-28 p-2" src={logo} alt="logo" />
    </a>
);
const logedinuer = ()=>{
    return true;
}
const Header = ()=>{
    const [islogin,setIsLogin] = useState(true)
    const isOnline = useOnline();
   
    return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50 lg:bg-green-100">
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
                <Link to=""> Cart</Link>
            </li>
            <li className="px-3"> 
                <Link to="/instamart"> Instamart</Link>
            </li>
            </ul>
        </div>
        <h2> {isOnline ? "online" : "offline"} </h2>
        {islogin ?  <button onClick={()=> setIsLogin(false)} >Logout</button> : <button onClick={()=>setIsLogin(true)}>Login</button> }
    </div>
    );
};



export default Header