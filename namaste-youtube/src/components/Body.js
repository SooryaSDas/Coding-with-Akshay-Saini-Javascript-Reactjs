import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

function Body() {
  return (
    <div className='flex'> 
        <SideBar/>
        <MainContainer/>
    </div>
  )
}

export default Body