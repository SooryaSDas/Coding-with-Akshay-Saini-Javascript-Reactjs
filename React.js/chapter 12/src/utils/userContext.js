import { createContext } from "react";

const userContext = createContext({
   user : {
    name : "soorya",
    email : "sooryasandra@gmail.com"
   }
});

export default userContext