import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './constant';
import Shimmer from "./Shimmer";
import useRestaurant from '../utils/useRestaurant';

function RestaurantMenu() {
    // const paramss = useParams();
    // const {id} = paramss;
    const {resid} = useParams();
    console.log(resid);
  // custom made hook
    const restaurant = useRestaurant(resid)

  return !restaurant ? <Shimmer/> :(
    <div className='menu'>
        <div>
        <h1>Restaurant menu : {resid}</h1>
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