import RestaurantCard from "./RestaurantCard";
import React,{useEffect, useState} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_LIST } from "../utils/constants";
import Carousel from "./Carousel";



const Body = ()=>{

  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSerchText] = useState("");
  const [slides, setSlides] = useState([]);
  const [delTime, setDelTime] = useState();


  useEffect(()=>{
      // console.log("useEffect")
      fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch(RES_LIST)
    const json = await data.json();
      console.log(json)
    setListofRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setSlides(json?.data?.cards[0]?.data?.data?.cards);
    setDelTime(json?.data?.cards[2]?.data?.data?.cards?.data);

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
      <div className="body ">
        <div className="flex flex-row bg-black h-96 p-6 overflow-hidden">
         {slides.map((carouselsdata)=>{
            return(
              <Carousel key={carouselsdata.data.bannerId} carousaldata={carouselsdata}/>
            
            )
         })}
 
        </div>
        <div className="filter flex m-40 pt-6 shadow-sm my-5">
          <div className="res">
            <h1 className="font-bold text-2xl">{listofRestaurants.length} restaurants</h1>
          </div>
          <div className="search">
            <input type="text" className="focus:bg-blue-200" value={searchText} onChange={(e)=> setSerchText(e.target.value)} />
            <button className="p-2 m-2 bg-purple-500 text-white rounded-md" onClick={()=>{
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
                Rating
           </button>
           <button className="filter-btn p-4" onClick={()=>{
              // filter logic here
              const delTime = filteredRestaurant.sort((res,res2)=> res.data.deliveryTime - res2.data.deliveryTime);
                setDelTime(delTime)}}>
                Delivery Time
           </button>
        </div>
        <div className="flex flex-wrap">
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