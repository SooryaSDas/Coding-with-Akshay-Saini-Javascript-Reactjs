import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  const err = useRouteError();
  const {status, statusText} = err;
  console.log(err);
  return (
    <div>
        <h1>Error...</h1>
        <h2>Yeh... something went wrong</h2>
        <h2>{status + " : "+ err.statusText}</h2>
        {/* <h2>{err.statusText}</h2> */}
    </div>
  )
}

export default Error