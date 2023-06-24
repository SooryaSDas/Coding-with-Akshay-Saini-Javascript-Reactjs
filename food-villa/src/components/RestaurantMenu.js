import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams()
    console.log(resId);
    useEffect (()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async ()=>{
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.5241391&lng=76.9366376&restaurantId=191933&submitAction=ENTER");
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    };

    if(resInfo === null) return <Shimmer/> ;

     const way = resInfo?.cards[0]?.card?.card?.info;

     const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1> {way.name} </h1>
            <h2> {way.cuisines} </h2>
            <h3> {way.costForTwoMessage} </h3>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100} </li>
                ))}
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;