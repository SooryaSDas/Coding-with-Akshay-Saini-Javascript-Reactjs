import React from 'react'

function Button({data}) {
  return (
    <div>
        <button key={data.index} className='px-5 py-2 m-2 bg-gray-200 rounded-lg'> {data} </button>
    </div>
  )
}

export default Button