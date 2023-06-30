import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
  const {resData} = props;
  
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime
  } = resData?.data;
    return(
      <div className="w-56 p-5 m-2 shadow-lg bg-pink-50">
        <img 
          className ="res-logo"
          src = {CDN_URL + cloudinaryImageId} 
          alt="hotel" 
         />
        <h3 className="font-bold text-xl ">{name} </h3>
        <h4>{[cuisines]} </h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
}

export default RestaurantCard;