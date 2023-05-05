import {restaurantList} from "./constant";
import RestaurantCard from "./Restaurant";
import { useState } from "react";

function filterdata(searchText, restaurants){
    const filterdata = restaurants.filter((restaurant)=>
    restaurant.name.includes(searchText)
    );
    return filterdata;
}

const Body = ()=>{
    // searchText is the react local variable
    // usestate give an array [variable name, funciton to update variable]
    // const updatefun = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    return(
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
            const data = filterdata(searchText, restaurants);
            setRestaurants(data);
        }  }>search</button>
        </div>
        <div className="Restaurantlist">
            {
                restaurants.map((restaurant)=>{
                   return(
                    <RestaurantCard {...restaurant} key={restaurant.key}/>
                   )
                })
            }
              
        </div>
        </>
    )
};

export default Body