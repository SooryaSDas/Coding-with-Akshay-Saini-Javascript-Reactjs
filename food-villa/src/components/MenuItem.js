import React from 'react'
import { ITEM_IMG_CDN } from '../utils/constants';


const MenuItem = ({item}) => {
    const { id, name, description, price, imageId } = item;

  return (
<div
      className="flex justify-between basis-[848px] max-h-[180px] p-5 border-b border-gray"
      key={id}
    >
      <div className="flex flex-col basis-[400px]">
        <h3 className="text-lg font-medium w-3/5">{name}</h3>
        <p className="mt-1 text-base font-normal">
          {price > 0 ? "₹ " + item.price / 100 : " "}{" "}
        </p>
        <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        {imageId && (
          <img
            className="w-[118px] h-[96px]"
            src={ITEM_IMG_CDN + imageId}
            alt={item?.name}
          />
        )}
      </div>
    </div>  )
}

export default MenuItem