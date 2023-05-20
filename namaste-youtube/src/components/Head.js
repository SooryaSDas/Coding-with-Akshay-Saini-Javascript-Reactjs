import React, { useState } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";

function Head() {
  const [searchquery, setSearchQuery] = useState("");
  console.log(searchquery)
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col m-2 p-2 shadow-xl'>
       <div className='flex col-span-3'>

            <img className='h-10 cursor-pointer' 
                onClick={()=>toggleMenuHandler()}
                src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg" 
                alt="sidebar" />
              <a href='/'>
              <img className='h-12 mx-2' 
                src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" 
                alt="logo" />
            </a>
       </div>
       <div className='col-span-8 flex content-center'>
            <input 
            className='w-7/12 border border-gray-400 p-2 rounded-s-3xl' 
            type="text"
            value={searchquery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button className='border border-gray-400 p-2 rounded-e-3xl px-5 py-2 bg-gray-100'>🔍</button>
       </div>
       <div className='col-span-1'>
            <img className='h-10'
                src="https://i.pinimg.com/474x/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.jpg" 
                alt="user-icon" />
       </div>
    </div>
  )
}

export default Head