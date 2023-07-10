import React from 'react'

const DetailpageShimmer = () => {
  return (
    <div>
        <div className='pl-60 pt-20 mr-60'>
            <h2 className='font-semibold text-2xl mb-2'>name</h2>
            <div className='grid grid-cols-3 justify-between gap-44 pb-5'>
                <div>
                    <p className='text-sm mb-1 '>cousine</p>
                    <h3 className='text-sm pb-3'>areaName</h3>
                    <i class="fa fa-solid fa-bicycle"></i> <span className='text-sm'>message</span>
                </div>
            <div>
            <div className='w-36 h-20 bg-gray-400'></div>
        </div>
        <div className='border border-gray-400 w-20 h-14 p-1'>
            <h3 className='text-green-950 font-bold'><i className="fa fa-star text-green-800 m-1"></i>avgRating</h3>
            <h3 className='text-xs font-semibold'></h3>
        </div>  
        </div>
        <hr/>
        <div className='grid grid-cols-7 pt-2'>
            <div>
                 <i class="fa fa-solid fa-clock"></i><span className='text-sm font-bold'>  MINS</span>
            </div>
            <div>
                <i class="fa fa-solid fa-indian-rupee-sign"></i> <span className='text-sm font-bold'>costForTwoMessage</span>
            </div>
        </div>
        </div>
        <br />

        <div className='w-auto h-36 mx-64 mt-5 bg-gray-400'></div>
        <div className='w-auto h-36 mx-64 mt-5 bg-gray-400'></div>
        <div className='w-auto h-36 mx-64 mt-5 bg-gray-400'></div>
        <div className='w-auto h-36 mx-64 mt-5 bg-gray-400'></div>
        <div className='w-auto h-36 mx-64 mt-5 bg-gray-400'></div>
        <div className='w-auto h-36 mx-64 mt-5 bg-gray-400'></div>

    </div>
  )
}

export default DetailpageShimmer;