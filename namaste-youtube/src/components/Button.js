import React from 'react'

function Button(props) {
  return (
    <div>
        <button key={props.key} className='px-5 py-2 m-2 bg-gray-200 rounded-lg'> {props.data} </button>
    </div>
  )
}

export default Button