import { useContext } from "react";
import userContext from "../utils/userContext";
const Footer = ()=>{
    console.log("console from footer");
    const {user} = useContext(userContext)
    return(
           <div className="bg-purple-200">
             <h2>Footer contents</h2>
            <h3>This site was developed by {user.name}</h3>
            <h5>Please contact me {user.email}</h5>
           </div>
    )
}

export default Footer