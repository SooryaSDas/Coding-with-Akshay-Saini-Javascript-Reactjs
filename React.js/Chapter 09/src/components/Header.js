import { useState } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useonline";
// react element
const Title = ()=>(
    <a href="/">
        <img className="logo" src={logo} alt="logo" />
    </a>
);
const logedinuer = ()=>{
    return true;
}
const Header = ()=>{
    const [islogin,setIsLogin] = useState(true)
    const isOnline = useOnline();
   
    return (
    <div className="header">
        <Title/>
        {/* {title} */}
        {/* <button onClick={()=>setTitle("New Food App")}> click me</button> */}
        <div className="nav-items">
            <ul>
            <li> 
                <Link to="/"> Home</Link>
            </li>
            <li> 
                <Link to="/about">About</Link>
            </li>
            <li> 
                <Link to="/contact"> Contact</Link>
            </li>
            <li> 
                <Link to=""> Cart</Link>
            </li>
            <li> 
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