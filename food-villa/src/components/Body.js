import RestaurantCard from "./RestaurantCard";
import React,{useEffect, useState} from 'react';
const Body = ()=>{

  const [listofRestaurants, setListofRestaurants] = useState([]);

  useEffect(()=>{
      // console.log("useEffect")
      fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.6954403&lng=76.81846209999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    setListofRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
    if(listofRestaurants.length === 0){
      return "loading"
    }
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
           // filter logic here
           const filteredList = listofRestaurants.filter(
            (res)=> res.data.avgRating > 4
            );
            setListofRestaurants(filteredList)

          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {listofRestaurants.map((restaurant)=>{
            return(
              <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
            )
          })}
        </div>
      </div>
    );
  };

  export default Body;