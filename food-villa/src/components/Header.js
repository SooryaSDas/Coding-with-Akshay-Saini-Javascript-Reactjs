import React,{ useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import "../index.css"

const Header = ()=>{

  // const btnname = "login"
  let [btnname , setBtnname] = useState("login");


    return(
      <div className="header">
        <div className="logo-container">
          <Link to="/">
          <img
            className="logo" 
            src={LOGO_URL} 
            alt="logo" 
          />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"> <li>About Us</li></Link>
            <Link to="/contact"> <li>Contact Us</li> </Link>
            <Link to="/cart"> <li>Cart</li> </Link>
            <button className="login" 
                    onClick={()=>{btnname ==="login" ? 
                    setBtnname("logout") : setBtnname("login")  ;
                      console.log(setBtnname);
                      }}>
                {btnname}
            </button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;

