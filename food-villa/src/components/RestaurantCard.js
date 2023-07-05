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
      <div className="w-72 h-96 p-5 ml-10 mt-6 hover:shadow-2xl border-solid bg-white text-xs">
        <img 
          className ="res-logo"
          src = {CDN_URL + cloudinaryImageId} 
          alt="hotel" 
         />
        <h3 className="font-bold text-sm mt-3">{name} </h3>
        <p className="text-sm">{[cuisines.join(" , ")]} </p>
       <div className="flex mt-5 space-x-6">
          <h4 className="bg-green-500 h-6 w-16 text-center text-white text-sm"><i className="fa fa-star text-white m-1"></i>{avgRating} </h4>
          <h4>{deliveryTime} MINS</h4>
          <h4>{costForTwo / 100} FOR TWO</h4>
       </div>
      </div>
    )
}

export default RestaurantCard;