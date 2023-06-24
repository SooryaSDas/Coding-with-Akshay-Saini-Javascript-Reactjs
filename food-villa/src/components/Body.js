import RestaurantCard from "./RestaurantCard";
import React,{useEffect, useState} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{

  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSerchText] = useState("");

  useEffect(()=>{
      // console.log("useEffect")
      fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5241391&lng=76.9366376&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    // console.log(json)
    setListofRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    window.alert("check your internet connection");
  }

  // conditional rendering
    // if(listofRestaurants.length === 0){
    //   return <Shimmer/>;
    // }
    // console.log("yes");
    // console.log(listofRestaurants)
    return( listofRestaurants?.length === 0 ? <Shimmer/> :
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=> setSerchText(e.target.value)} />
            <button onClick={()=>{
              // filter the restuarant card and update the ui
              // console.log(searchText)

              const filteredRestaurant = listofRestaurants.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurant);

            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={()=>{
           // filter logic here
              const filteredList = filteredRestaurant.filter(
                (res)=> res.data.avgRating > 4
                );
                setFilteredRestaurant(filteredList)}}>
                Top Rated Restaurant
           </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant)=>{
            return(
             <Link to ={"restaurants/"+restaurant.data.id}> <RestaurantCard key={restaurant.data.id} resData={restaurant}/> </Link>
            )
          })}
        </div>
      </div>
    );
  };

  export default Body;