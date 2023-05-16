// import { IMG_CDN_URL } from "./constant";
const Fooditem = ({
    name,
    description,
    cloudinaryImageId,
    price })=>{
     return(
         <div className="w-56 p-2 m-2 shadow-sm bg-pink-50">
            {/* <img src={IMG_CDN_URL + cloudinaryImageId} /> */}
             <h2 className="font-bold text-xl">{name}</h2>
             <h3>{description}</h3>
             <h5>Rupees : {price}</h5>
         </div>
     )
}

export default Fooditem