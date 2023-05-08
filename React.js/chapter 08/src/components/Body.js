import {restaurantList} from "./constant";
import RestaurantCard from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterdata(searchText, restaurants){
    const filterdata = restaurants.filter((restaurant)=>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterdata;
}

const Body = ()=>{
    
    // https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId 


    const [allrestaurant, setAllRestaurant] = useState([]);
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

   
  useEffect(() => {
    getRestaurants();
  }, []);

    // console.log("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    console.log("render");
    
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}
 
  // conditional rendering
  // if restaurant data is empty --> shimmer ui
  // if restaurant has data --> noramal ui 

  if(!allrestaurant) return null;
  // if(filteredrestaurants?.length === 0) return <h2>no restaurant are found</h2>;

    return allrestaurant.length === 0 ? <Shimmer/> :(
       <> 
       <div className="search-container">  
        <input 
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e)=>{
            // e.target.value -> what ever you write in your input
            // console.log(searchText)
            setSearchText(e.target.value);
        }}
        />
        {/* {buttonsub}
         {
            if(buttonsub === "true"){
                setButtonSub("false");
            }
            else{
                setButtonSub("true")
            }
        } */}
        <button onClick={()=>{
            const data = filterdata(searchText, allrestaurant);
            setFilteredRestaurants(data);
        }  }>search</button>
        </div>
        <div className="Restaurantlist">
            {
                filteredrestaurants.map((restaurant)=>{
                   return(
                    <Link to={"/restaurant/"+restaurant.key} key={restaurant.key}>
                      <RestaurantCard {...restaurant} key={restaurant.key}/>
                    </Link>
                   )
                })
            }
              
        </div>
        </>
    )
};

export default Body