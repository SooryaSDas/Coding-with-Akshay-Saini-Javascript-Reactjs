import React, { useEffect, useState } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

function Head() {
  const [searchquery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showsuggestions, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store)=>store.search)

  useEffect(()=>{
    const timer = setTimeout(()=> 
      {
        if(searchCache[searchquery]){
          setSuggestion(searchCache[searchquery]);
        } else {
          getSearchSuggestions()
        }
      }, 200);
      
    return ()=>{
      clearTimeout(timer);
    }
  },[searchquery])
 // key -i
 // render the component
 // useeffect();
 // start timer => make api call after 200ms

 // key -ip
 // destroy the component(useeffect return method)
 // re-render the component
 // useeffect()
 // start timer =>make api call after 200ms

 // settimeout make api call

  const getSearchSuggestions = async()=>{
    console.log("api call "+searchquery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);

    dispatch(cacheResults({
      [searchquery] : json[1]
    }))
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col m-2 p-5 shadow-xl'>
       <div className='flex col-span-1'>

            <img className='h-10 cursor-pointer' 
                onClick={()=>toggleMenuHandler()}
                src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg" 
                alt="sidebar" />
              <a href="/">
              <img className='h-12 mx-2' 
                src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" 
                alt="logo" />
            </a>
       </div>
       <div>
        <div className='col-span-10 px-10 flex content-center'>
              <input 
              className='px-5 w-7/12 border border-gray-400 p-2 rounded-s-3xl' 
              type="text"
              value={searchquery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestion(true)}
              onBlur={()=>setShowSuggestion(false)}
              />
              <button className='border border-gray-400 p-2 rounded-e-3xl px-5 py-2 bg-gray-100'>🔍</button>
        </div>
        { showsuggestions && (
          <div className='fixed bg-white py-2 px-5 w-[24rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestion.map((s) =>( <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>🔍 {s}</li>))}
              {/* <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 data</li> */}

            </ul>
          </div>
        )}
        </div>
       <div className='col-span-1'>
            <img className='h-10'
                src="https://cdn-icons-png.flaticon.com/512/552/552721.png" 
                alt="user-icon" />
       </div>
    </div>
  );
};

export default Head