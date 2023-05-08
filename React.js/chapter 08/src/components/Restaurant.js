import { IMG_CDN_URL } from "./constant";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId, })=>{
     return(
         <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
             <h2>{name}</h2>
             <h3>{cuisines}</h3>
         </div>
     )
}

export default RestaurantCard