import React,{ useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = ()=>{

  // const btnname = "login"
  let [btnname , setBtnname] = useState("login");
  const onlineStatus = useOnlineStatus();
  const totalItemsCount = useSelector((store) => store.cart.totalItemCount);
  console.log("Header:", totalItemsCount);

    return(
      <div className="flex justify-between shadow-xl sm:bg-white-100 md:bg-white-100 xl:bg-white-50">
        <div>
          <Link to="/">
          <img
            className="logo h-28 p-2" 
            src={LOGO_URL} 
            alt="logo" 
          />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="flex py-10">
            {/* <li className="px-4">Online Status : {onlineStatus ? "Online" : "Offline"}</li> */}
            <Link to="/"><li className="px-5"><b>Home</b></li></Link>
            <Link to="/about"> <li className="px-5"><b>About Us</b></li></Link>
            <Link to="/contact"> <li className="px-5"><b>Contact Us</b></li> </Link>
            <Link to="/cart"> <li className="px-5"><b>Cart</b> <span className="text-white bg-green-800 p-1 rounded-full"><b>{totalItemsCount}</b></span> </li> </Link>
          </ul>
        </div>
        <button className="pr-5" 
                    onClick={()=>{btnname ==="login" ? 
                    setBtnname("logout") : setBtnname("login")  ;
                      console.log(setBtnname);
                      }}>
                <b> {btnname}</b>
        </button>
      </div>
    );
  };

export default Header;

