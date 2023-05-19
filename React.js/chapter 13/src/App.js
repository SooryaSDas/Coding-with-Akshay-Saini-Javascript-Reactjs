import React, { Children, Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { useContext } from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(()=> import("./components/Instamart"));
/*
*Header
    - logo
    - Nav items(right side)
    - cart
Body
    - search bar
    - restaurant list
    - restaurant card
        - image
        - rating
        - name
        - cusine
Footer
    - links
    - copyright
*/

// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading  -> on the base the div will change (travel website- car, bus, train, flight - form)
// dynamic import

const AppLayout = ()=> {
    const [user,setUser] = useState({
        name : "sooraj",
        email : "sooraj1234@gmail.com",
    });

    return(
        <Provider store={store}>
            <userContext.Provider 
                value = {{
                user : user,
                setUser : setUser
                }}
            >
                <Header/>
                <Outlet/>
                <Footer/>
            </userContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children:[
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>,
                children:[
                    {
                        // creates localhost:1234/about/profile
                        // don't do like "/profile" -> browser thinks like localhost:1234/profile
                        path : "profile", 
                        element : <Profile/>
                    }
                ]
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path:"/restaurant/:resid",
                element : <RestaurantMenu/>
            },
            {
                path : "/instamart",
                element : <Suspense fallback={<Shimmer/>}> <Instamart/></Suspense>
                
            },
            {
                path: "/cart",
                element : <Cart/>
            }
        ]
    }
   
])
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
    