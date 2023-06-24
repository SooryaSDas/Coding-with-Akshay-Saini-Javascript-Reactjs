import { useRouteError } from "react-router-dom"
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h2>Error page</h2>
            <h3>{err.statusText}</h3>
        </div>
    )
}

export default Error;