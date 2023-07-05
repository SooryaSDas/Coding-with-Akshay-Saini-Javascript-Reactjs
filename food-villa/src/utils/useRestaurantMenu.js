import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    // return resInfo;
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json)
        const menuItemsList = json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

        const menu = menuItemsList.map(item => {
            if((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory) ) {
              return item.card.card;
            }
        })

        const modifiedData = {
            info : json.data.cards[0].card.card.info,
            menu : menu.filter(value => value !== undefined) // menu details
        };
  
        setResInfo(modifiedData);

    };
    return resInfo;
}

export default useRestaurantMenu;

