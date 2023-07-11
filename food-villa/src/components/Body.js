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
  const [delTime, setDelTime] = useState([]);
  const [lowtoHigh , setLowToHigh] = useState([]);
  const [hightolow, setHighToLow] = useState([]);


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
    setLowToHigh(json?.data?.cards[2]?.data?.data?.cards?.data);
    setHighToLow(json?.data?.cards[2]?.data?.data?.cards?.data);
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
        <div className="">
         <Carousel/>
 
        </div>
        <div className="filter flex pt-6 shadow-sm my-5 mx-9">
          <div className="ml-12">
            <h1 className="font-bold text-2xl">{listofRestaurants.length} restaurants</h1>
          </div>
          <div className="ml-64">
          {/* <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                placeholder="Search for anything..." 
                type="text" 
                name="search"
                value={searchText} onChange={(e)=> setSerchText(e.target.value)}
                /> */}

            <input type="text" className=" w-60 h-10 rounded-sm border-black-300" value={searchText} onChange={(e)=> setSerchText(e.target.value)} placeholder="Search for anything..." />
            <button className="p-2 m-2 bg-red-950 text-white rounded-md" onClick={()=>{
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
           <button className="filter-btn p-4" onClick={()=>{
              // filter logic here
              const lowtoHigh = filteredRestaurant.sort((res,res2)=> res.data.costForTwo/100 - res2.data.costForTwo/100);
              setLowToHigh(lowtoHigh)}}>
               Cost Low to High
           </button>
           <button className="filter-btn p-4" onClick={()=>{
              // filter logic here
              const hightolow = filteredRestaurant.sort((res,res2)=> res2.data.costForTwo/100 - res.data.costForTwo/100);
              setLowToHigh(hightolow)}}>
               Cost High to Low
           </button>
        </div>
        <div className="flex flex-wrap m-9 mx-16">
          {filteredRestaurant.map((restaurant)=>{
            // console.log(restaurant)
            return(
             <Link to ={"restaurants/"+restaurant.data.id}> <RestaurantCard key={restaurant.data.id} resData={restaurant}/> </Link>
            )
          })}
        </div>
      </div>
    );
  };

  export default Body;