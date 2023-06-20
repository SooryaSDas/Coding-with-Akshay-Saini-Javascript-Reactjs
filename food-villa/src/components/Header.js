import React,{ useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = ()=>{

  // const btnname = "login"
  let [btnname , setBtnname] = useState("login");


    return(
      <div className="header">
        <div className="logo-container">
          <img
            className="logo" 
            src={LOGO_URL} 
            alt="logo" 
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
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

