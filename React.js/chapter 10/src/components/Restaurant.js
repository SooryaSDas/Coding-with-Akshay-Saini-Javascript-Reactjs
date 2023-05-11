import { IMG_CDN_URL } from "./constant";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId, })=>{
     return(
         <div className="w-56 p-2 m-2 shadow-sm bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
             <h2 className="font-bold text-xl">{name}</h2>
             <h3>{cuisines}</h3>
         </div>
     )
}

export default RestaurantCard