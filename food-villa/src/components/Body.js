import RestaurantCard from "./RestaurantCard";
import React,{useEffect, useState} from 'react';
import Shimmer from "./Shimmer";

const Body = ()=>{

  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSerchText] = useState("");

  useEffect(()=>{
      // console.log("useEffect")
      fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.6954403&lng=76.81846209999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    setListofRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  // conditional rendering
    // if(listofRestaurants.length === 0){
    //   return <Shimmer/>;
    // }

    return( listofRestaurants.length === 0 ? <Shimmer/> :
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=> setSerchText(e.target.value)} />
            <button onClick={()=>{
              // filter the restuarant card and update the ui
              console.log(searchText)

              const filteredRestaurant = listofRestaurants.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurant);

            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={()=>{
           // filter logic here
              const filteredList = listofRestaurants.filter(
                (res)=> res.data.avgRating > 4
                );
              setListofRestaurants(filteredList)}}>
                Top Rated Restaurant
           </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant)=>{
            return(
              <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
            )
          })}
        </div>
      </div>
    );
  };

  export default Body;