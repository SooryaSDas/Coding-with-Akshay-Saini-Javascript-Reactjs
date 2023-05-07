import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './constant';
import Shimmer from "./Shimmer";

function RestaurantMenu() {
    // const paramss = useParams();
    // const {id} = paramss;
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    const [restaurant, setRestaurant] = useState({})

    async function getRestaurantInfo(){ 
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lag=77.62448069999999&menuId=229"+id);
        const json = await data.json();
        console.log(json);
    }

  return (!restaurant) ? <Shimmer/> :(
    <div className='menu'>
        <div>
        <h1>Restaurant menu : {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          {/* // object.value is transilate object to array */}
          <ul>
            {Object.values(restaurant?.menu?.items).map((item)=>{
              <li key={item.key}> {item.name} </li>
            })}
          </ul>
        </div>
    </div>
  );
}

export default RestaurantMenu