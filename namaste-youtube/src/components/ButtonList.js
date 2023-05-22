import React from 'react'
import Button from './Button'

function ButtonList() {
  const List = ["All","Mixes","News","Music","Tamil Cinema","Game","shows","Cooking show","A.R Rahman","Live","Programming"];
  return (
    <div className='flex'>
      {List.map((items,index)=> <Button key={index} data={items}/>)}
     
    </div>
  )
}

export default ButtonList