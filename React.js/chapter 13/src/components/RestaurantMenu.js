import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './constant';
import Shimmer from "./Shimmer";
import useRestaurant from '../utils/useRestaurant';
import { useDispatch } from 'react-redux';
import {addItem} from "../utils/cartSlice";

const RestaurantMenu = () => {
    // const paramss = useParams();
    // const {id} = paramss;
    const {resid} = useParams();
    console.log(resid);
  // custom made hook
    const restaurant = useRestaurant(resid)

    const dispatch = useDispatch();
// add grapes in store
    // const handleadditem = ()=>{
    //   dispatch(addItem("grapes"));  // {payload : "grapes"}
    // }
  const addFoodItem = (item)=>{
    dispatch(addItem(item))
  }
    

  return !restaurant ? <Shimmer/> :(
    <div className='flex'>
        <div>
        <h1>Restaurant id : {resid}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <button className='p-2 m-5 bg-green-200' onClick={()=> handleadditem()}>Add items</button>
        </div>
        <div>
          <h1>Menu</h1>
          {/* // object.value is transilate object to array */}
          <ul data-testid = "menu">
            {Object.values(restaurant?.menu?.items).map((item)=>(
              <li key={item.id}> {item.name} - <button data-testid="addBtn" className='bg-green-300 p-1' onClick={()=>addFoodItem(item)}>Add</button> </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default RestaurantMenu