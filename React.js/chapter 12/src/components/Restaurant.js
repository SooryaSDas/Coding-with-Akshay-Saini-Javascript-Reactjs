import { useContext } from "react";
import { IMG_CDN_URL } from "./constant";
import userContext from "../utils/userContext";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId, })=>{
        const {user} = useContext(userContext);
     return(
         <div className="w-56 p-2 m-2 shadow-sm bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
             <h2 className="font-bold text-xl">{name}</h2>
             <h3>{cuisines}</h3>
             <h5>{user.name} - {user.email}</h5>
         </div>
     )
}

export default RestaurantCard