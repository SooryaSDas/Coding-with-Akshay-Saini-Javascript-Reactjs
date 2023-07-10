// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestauantInfo from "./RestauantInfo";
import RestaurantMenuList from "./RestaurantMenuList";
import DetailpageShimmer from "./DetailpageShimmer";


const RestaurantMenu = ()=>{
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId);

    return !resInfo ? (<DetailpageShimmer/>) : (
        <div className="menu">
           <RestauantInfo {...resInfo.info}/>
           <RestaurantMenuList menu={resInfo.menu}/>
        </div>
    )
}

export default RestaurantMenu;