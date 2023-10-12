import { useState } from "react";
import Header from "./Header";

const Login = ()=>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/2b0fca4f-c15c-4622-9efc-572c4a408c30/IN-en-20230605-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            </div>
            <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

               {!isSignInForm ?  <input type="text" 
                        placeholder="Full Name" 
                        className="p-2 my-2 w-full bg-gray-700"
                        
                /> : ""}

                <input type="text" 
                        placeholder="Email Address" 
                        className="p-2 my-2 w-full bg-gray-700"
                        
                />

                <input type="text" 
                    placeholder="Password" 
                    className="p-2 my-2 w-full bg-gray-700 rounded-lg"
                />
                <button className="p-4 my-4 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleSignInForm}>Already registered ? Sign Up Now....</p>
            </form>
        </div>
    )
}

export default Login;