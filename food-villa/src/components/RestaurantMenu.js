// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestauantInfo from "./RestauantInfo";
import RestaurantMenuList from "./RestaurantMenuList";


const RestaurantMenu = ()=>{
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId);

    return !resInfo ? (<Shimmer/>) : (
        <div className="menu">
           <RestauantInfo {...resInfo.info}/>
           <RestaurantMenuList menu={resInfo.menu}/>
        </div>
    )
}

export default RestaurantMenu;