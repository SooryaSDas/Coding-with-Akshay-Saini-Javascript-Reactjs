import React from 'react'
import NestedCategory from './NestedCategory'
import ItemCategory from './ItemCategory'

const RestaurantMenuList = ({menu}) => {
  return (
    <div className='pl-48 pt-16 pr-60'>
      {menu.map((item,index)=>(
        <div key={index}>
            {item.categories ? (
              <NestedCategory nestedCategory={item}/>
            ) : (
              <ItemCategory itemCategory={item}/>
            )
          }
        </div>
      ))}
    </div>
  )
}

export default RestaurantMenuList