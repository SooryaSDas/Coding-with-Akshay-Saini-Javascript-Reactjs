import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function SideBar() {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  // early written pattern
  if(!isMenuOpen) return null;

  return (
    <div className='w-48 p-5 shadow-xl'>
      <ul className=''>
       <Link to="/"> <li>Home</li> </Link>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <hr />
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <hr />
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movie & Shows</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
      </ul>
      <hr />
      <h1 className='font-bold pt-5'>More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <hr />
      <ul className='pt-5'>
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>

    </div>
  )
}

export default SideBar