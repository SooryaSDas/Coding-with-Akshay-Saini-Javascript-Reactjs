import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/about";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
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

const AppLayout = ()=>{
    return(
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

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
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path:"/restaurants/:id",
                element : <RestaurantMenu/>
            }
        ]
    }
   
])
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
    