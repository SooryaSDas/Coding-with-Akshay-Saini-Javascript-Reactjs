import React from 'react';
import { useState } from 'react';

function Profile(props) {
  const [state,setState] = useState(0);
  return (
    <div>
        <h2>Profile functional component</h2>
        <h3> Name fun : {props.name}</h3>
        <h3>Count : {state}</h3>
        <button onClick={()=>setState(state+1)}>Click me (+)</button>
        <button onClick={()=>setState(state-1)}>Click me(-)</button>

    </div>
  )
}

export default Profile