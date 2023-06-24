import React from "react";
// import { ReactDOM } from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


// function App() {  
//   return (
//       <div className="App">
//         <Header/>
//         <RouterProvider router = {appRouter}/>
//       </div>
//   );
// }

const App = ()=>{
  return(
    <div className="App">
      <Header/>
      <Outlet/>
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
        }
      ]
    },
  ]
);

export default App;

