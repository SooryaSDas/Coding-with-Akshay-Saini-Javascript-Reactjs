import { useState } from "react"
import { FETCH_MENU_URL } from "../components/constant";

const useRestaurant = (resid)=>{
    const [restaurant, setRestaurant] = useState(null);

    // get data from api
    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){ 
        const data = await fetch(FETCH_MENU_URL+resid);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data)
    }
    // return the restaurant data
    return restaurant
}

export default useRestaurant