const RestaurantCard = ({
    name, img, cuisin, rating
 })=>{
     return(
         <div className="card">
             <img src={img} alt="image" />
             <h2>{name}</h2>
             <h3>{cuisin.join(", ")}</h3>
             <h4>{rating} stars</h4>
         </div>
     )
}

export default RestaurantCard