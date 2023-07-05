import React from 'react'
import { RES_IMG_CDN } from '../utils/constants'

const RestauantInfo = (resInfo) => {
  return (
    <div className='pl-60 pt-20 mr-60'>
        <h2 className='font-semibold text-2xl mb-2'>{resInfo?.name}</h2>
      <div className='grid grid-cols-3 justify-between gap-44 pb-5'>
        <div>
          <p className='text-sm mb-1 '>{resInfo?.cuisines.join(", ")}</p>
          <h3 className='text-sm pb-3'>{resInfo.areaName}</h3>
          <i class="fa fa-solid fa-bicycle"></i> <span className='text-sm'>{resInfo.feeDetails.message}</span>
        </div>
        <div>
          <img src = {RES_IMG_CDN + resInfo?.cloudinaryImageId}/>
        </div>
        <div className='border border-gray-400 w-20 h-14 p-1'>
          <h3 className='text-green-950 font-bold'><i className="fa fa-star text-green-800 m-1"></i>{resInfo.avgRating}</h3>
          <h3 className='text-xs font-semibold'>{resInfo.totalRatingsString}</h3>
        </div>  
      </div>
      <hr/>
      <div className='grid grid-cols-7 pt-2'>
        <div>
          <i class="fa fa-solid fa-clock"></i><span className='text-sm font-bold'> {resInfo.sla.deliveryTime} MINS</span>
        </div>
        <div>
        <i class="fa fa-solid fa-indian-rupee-sign"></i> <span className='text-sm font-bold'>{resInfo.costForTwoMessage}</span>
        </div>
      </div>
    </div>
  )
}

export default RestauantInfo