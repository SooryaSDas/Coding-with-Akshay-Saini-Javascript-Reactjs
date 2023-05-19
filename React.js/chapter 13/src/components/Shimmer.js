import React from 'react';

function Shimmer() {
  return (
  <>
     <div className="Restaurantlist" data-testid="shimmer">
      {
        Array(10).fill("").map((e,index)=>
        (
          <div key={index} className='shimmer-card'> </div>
        ))
      }
     </div>
  </>
  )
}

export default Shimmer