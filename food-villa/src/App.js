import React from "react";
// import { ReactDOM } from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const App = ()=>{
  return(
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Outlet/>
      </Provider>
    </div>
  )
}

export const appRouter = createBrowserRouter(
  [
    {
      path : "/",
      element : <App/>,
      children : [
        {
          path : "/",
          element : <Body/>
        },
        {
          path : "/about",
          element : <About/>
        },
        {
          path : "/restaurants/:resId",
          element : <RestaurantMenu/>
        },
        {
          path : "/contact",
          element : <Contact/>
        },
        {
          path : "/cart",
          element : <Cart/>
        }
      ]
    },
  ]
);

export default App;

